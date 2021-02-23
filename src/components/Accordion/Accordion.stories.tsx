import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Accordion Stories',
    component: Accordion
}

const callBack = action('was clicked');

export const CollapsedMode = () => <Accordion titleValue={'CollapsedMode'} collapsed={true} onClick={callBack}/>
export const UnCollapsedMode = () => <Accordion titleValue={'UnCollapsedMode'} collapsed={false} onClick={callBack}/>

export const ChangeAccordionMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Change'} collapsed={value} onClick={() => setValue(!value)}/>
};


