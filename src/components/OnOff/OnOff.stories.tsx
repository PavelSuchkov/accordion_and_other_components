import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'OnOff Stories',
    component: OnOff
}

const callBack = action('was cklicked')

export const onMode = () => <OnOff on={true} onClick={callBack}/>
export const offMode = () => <OnOff on={false} onClick={callBack}/>

export const ChangingMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onClick={setValue}/>
}
