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
    

    return (
        <View>
            <p>Time: {val} ms </p>
            <Button
                onPress={() => {
                    if (stopwatch.isStarted()) {
                        setVal(0);
                        stopwatch.stop();
                    } else {
                        stopwatch.start();
                    }
                }}
                title={stopwatch.isStarted() ? "Stop" : "Start"}
            />
            {stopwatch.isStarted() &&
            <Button
                onPress={() => {
                    if (!stopwatch.isPaused()){
                        stopwatch.pause();
                    } else {
                        stopwatch.resume();
                    }
                }}
                title={!stopwatch.isPaused() ? "Pause" : "Resume"}
            />}

        </View>
    );
}

