import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {/*Accordion,*/ AccordionMemo, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react/types-6-0";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Accordion Stories',
    component: AccordionMemo
}

const callBack = action('was clicked');
const onItemClickCallback = action(`some item was clicked`)

const Template: Story<AccordionPropsType> = (args) => <AccordionMemo {...args} />

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'MenuCollapsedMode',
    collapsed: true,
    onChange: callBack
}

export const CollapsedMode = () => <AccordionMemo titleValue={'CollapsedMode'}
                                              collapsed={true}
                                              onChange={callBack}
                                              onClick={onItemClickCallback}
                                              items={[]}/>

export const UnCollapsedMode = () => <AccordionMemo titleValue={'UnCollapsedMode'}
                                                collapsed={false}
                                                onChange={callBack}
                                                onClick={onItemClickCallback}
                                                items={[{title: 'React', value: 1},
                                                    {title: `Js`, value: 2},
                                                    {title: `Redux`, value: 3},
                                                    {title: `Html`, value: 4}]}/>

export const ChangeAccordionMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <AccordionMemo titleValue={'Skills'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={onItemClickCallback}
                      items={[{title: 'React', value: 1},
                          {title: `Js`, value: 2},
                          {title: `Redux`, value: 3},
                          {title: `Html`, value: 4}]}/>
};


