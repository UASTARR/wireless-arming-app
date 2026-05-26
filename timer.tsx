import { useState, useRef, useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useStopwatch } from 'react-use-precision-timer';


export default function timer() {

    const stopwatch = useStopwatch({delay: 10} ,callback);

    const [val, setVal] = useState(0);
    
    const callback = useCallback(() => {
        setVal(stopwatch.getElapsedRunningTime());
    }, [stopwatch]);
 
    

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

