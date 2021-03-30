import React, {useState} from 'react';
import {/*OnOff,*/ OnOffMemo} from "./OnOff";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'OnOff Stories',
    component: OnOffMemo
}

const callBack = action('was cklicked')

export const onMode = () => <OnOffMemo on={true} onClick={callBack}/>
export const offMode = () => <OnOffMemo on={false} onClick={callBack}/>

export const ChangingMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOffMemo on={value} onClick={setValue}/>
}
