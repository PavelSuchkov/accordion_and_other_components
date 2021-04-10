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
        console.log('UseEffect only first render (Component did mount)')
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

export const SetTimeOutExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('Set timeout Example');

    useEffect(() => {

        setInterval(() => {
            console.log('Interval + 1')
            setCounter((state) => state + 1)
        }, 1000)
    }, [])



    return <>
        {/*<button onClick={() => {setCounter(counter + 1)}}>+</button>*/}
        counter =  {counter}
        {/*<button onClick={() => {setFake(fake + 1)}}>+</button>*/}
        fake =  {fake}
    </>

}


export const GetTimeExample = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    console.log('Get time with clock');

    useEffect(() => {
        console.log('Rerender 1234')
        setInterval(() => {
            console.log('Rerender Component')
            let date = new Date();
            setSeconds(date.getSeconds())
            setMinutes(date.getMinutes())
            setHours(date.getHours())
        }, 1000)
    } )


    return <>
        <h1>
            {hours}-:-{minutes}-:-{seconds}
        </h1>
    </>

}