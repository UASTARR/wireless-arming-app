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
                onPress={() => stopwatch.isRunning() ? stopwatch.stop() : stopwatch.start()}
                title={stopwatch.isRunning() ? "Stop" : "Start"}
            />
        </View>
    );
}

