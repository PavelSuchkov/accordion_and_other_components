import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>

export const TrackValueOfInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return <> <input onChange={onChange}/> Value: {value} </>
}

export const GetValueByKeyPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)

    }

    return <> <input ref={inputRef}/>
        <button onClick={save}>Save</button>
          - actual value: {value} </>
}


export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {

    const [value, setValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
        action('check / uncheck ');
    }

    return <input type='checkbox' checked={value} onChange={onChange}/>
}

export const ControlledSelect = () => {

    const [value, setValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Moscow</option>
    </select>
}


