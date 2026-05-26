import { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useStopwatch } from 'react-use-precision-timer';


export default function timer() {

    const [val, setVal] = useState(0);
    const stopwatch = useStopwatch();

    useEffect(() => {
        if (!stopwatch.isRunning()) return;

        const updateInterval = setInterval(() => {
            setVal(stopwatch.getElapsedRunningTime());
        }, 10);

        return () => clearInterval(updateInterval);
    }, [stopwatch.isRunning()]);
    
    
    function start() {
        stopwatch.start();
    }

    function stop() {
        setVal(0);
        stopwatch.stop();
    }

    function pause() {
        stopwatch.pause();
    }

    function resume() {
        stopwatch.resume();
    }

    return (
        <View>
            <Text>Time: {val} ms </Text>
            <Button    
                onPress={() => {
                    if (stopwatch.isStarted()) {
                        setVal(0);
                        stop();
                    } else {
                        start();
                    }
                }}
                title={stopwatch.isStarted() ? "Stop" : "Start"}
            />
            {stopwatch.isStarted() &&
            <Button
                onPress={() => {
                    if (!stopwatch.isPaused()){
                        pause();
                    } else {
                       resume();
                    }
                }}
                title={!stopwatch.isPaused() ? "Pause" : "Resume"}
            />}

        </View>
    );
}

