import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Select Stories',
    component: Select
}


export const Example = () => {
    const [value, setValue] = useState('2')
    return (
        <>  <Select onChange={setValue}
                    value={value}
                    items={[{value: `1`, title: 'Minsk'},
                        {value: `2`, title: 'Moscow'},
                        {value: `3`, title: 'Kiev'}]}/>


        </>
    )
}
export const ExampleWithoutValue = () => {

    const [value, setValue] = useState(null)

   return(
       <>  <Select onChange={setValue}
                   value={value}
                items={[{value: `1`, title: 'Minsk'},
                    {value: `2`, title: 'Moscow'},
                    {value: `3`, title: 'Kiev'}]}/>


    </>
   )
}
