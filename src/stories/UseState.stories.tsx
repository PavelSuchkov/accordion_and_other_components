import React, {useState} from "react";


export default {
    title: 'UseState demo'
}


export const Example_1 = () => {
    console.log('Example 1')
    const [counter, setCounter] = useState(0)

    const changer = (state: number) => {
        return state + 1;
    }


    return <>
        <button onClick={() => {setCounter(changer)}}>+
        </button>
        {counter}

    </>
}