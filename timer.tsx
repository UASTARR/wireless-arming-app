import { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useStopwatch } from 'react-use-precision-timer';


export default function timer() {

    const [val, setVal] = useState(0); {/* Initialises the time value (milliseconds) */}
    const stopwatch = useStopwatch(); {/* Initialises the stopwatch object from the stopwatch library */}

    useEffect(() => {                 {/* Stopwatch display update logic */}
        if (!stopwatch.isRunning()) return;

        const updateInterval = setInterval(() => {
            setVal(stopwatch.getElapsedRunningTime());}, 10); {/* Updates every 10ms i think */}

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
              
            {/* Start/stop button */}
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

            
            {/* Pause/resume button */}
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

