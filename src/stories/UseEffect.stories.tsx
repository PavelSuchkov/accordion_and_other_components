import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect demo'
}


export const UE_Example_1 = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('Example 2')

    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('UseEffect only first render (Component did mount')
        document.title = counter.toString();
    }, [] )

    useEffect(() => {
        console.log('UseEffect when counter was clicked')
        document.title = counter.toString();
    }, [counter] )


    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        counter =  {counter}
        <button onClick={() => {setFake(fake + 1)}}>+</button>
        fake =  {fake}
    </>
}