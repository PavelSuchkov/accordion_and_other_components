import React from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'UncontrolledAccordion Stories',
    component: UncontrolledAccordion
}

const callBack = action('was clicked');


export const ChangeAccordionMode = () => {
    return <UncontrolledAccordion titleValue={'Changing Mode'}/>
};


