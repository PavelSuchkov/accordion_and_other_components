import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRatingMemo} from "./UncontrolledRating";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'UncontrolledRating Stories',
    component: UncontrolledRatingMemo
}

const callBack = action('was clicked');

export const Mode  = () => <UncontrolledRatingMemo/>

export const ChangeAccordionMode = () => {
    return <UncontrolledRatingMemo />
};


