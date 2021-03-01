import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UnContrOnOff from "./UnContrOnOff";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'UncontrolledOnOFF Stories',
    component: UnContrOnOff
}

const callBack = action('was clicked');


export const OnMode = () => <UnContrOnOff defaultOn={true} />
export const OffMode = () => <UnContrOnOff defaultOn={false}/>

export const ChangeAccordionMode = () => {
    return <UnContrOnOff />
};


