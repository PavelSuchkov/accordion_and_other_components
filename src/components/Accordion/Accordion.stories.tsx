import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react/types-6-0";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Accordion Stories',
    component: Accordion
}

const callBack = action('was clicked');


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'MenuCollapsedMode',
    collapsed: true,
    onClick: callBack
}

export const CollapsedMode = () => <Accordion titleValue={'CollapsedMode'} collapsed={true} onClick={callBack}/>
export const UnCollapsedMode = () => <Accordion titleValue={'UnCollapsedMode'} collapsed={false} onClick={callBack}/>

export const ChangeAccordionMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Change'} collapsed={value} onClick={() => setValue(!value)}/>
};


