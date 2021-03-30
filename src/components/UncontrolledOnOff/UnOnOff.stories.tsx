import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnContrOnOffMemo} from "./UnContrOnOff";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'UncontrolledOnOFF Stories',
    component: UnContrOnOffMemo
}

const callBack = action('was clicked');


export const OnMode = () => <UnContrOnOffMemo defaultOn={true} />
export const OffMode = () => <UnContrOnOffMemo defaultOn={false}/>

export const ChangeAccordionMode = () => {
    return <UnContrOnOffMemo />
};


