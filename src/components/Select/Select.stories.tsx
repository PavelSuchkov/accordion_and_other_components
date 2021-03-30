import React, {useMemo, useState} from 'react';
import {/*Select,*/ SelectMemo} from "./Select";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Select Stories',
    component: SelectMemo
}


export const Example = () => {
    const [value, setValue] = useState('2')
    return (
        <>  <SelectMemo onChange={setValue}
                        value={value}
                        items={[{value: `1`, title: 'Minsk'},
                            {value: `2`, title: 'Moscow'},
                            {value: `3`, title: 'Kiev'}]}/>


        </>
    )
}
export const ExampleWithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <>  <SelectMemo onChange={setValue}
                        value={value}
                        items={[{value: `1`, title: 'Minsk'},
                            {value: `2`, title: 'Moscow'},
                            {value: `3`, title: 'Kiev'}]}/>


        </>
    )
}

export const ExampleWithUseMemoByCityTitle = () => {

    const cities = [{value: `1`, title: 'Minsk'}, {value: `2`, title: 'Moscow'},
        {value: `3`, title: 'Kiev'}, {value: `4`, title: 'Warsaw'},
        {value: `5`, title: 'Vilno'}, {value: `6`, title: 'Praha'},
        {value: `7`, title: 'Riga'}, {value: `8`, title: 'Odessa'}]

    const [value, setValue] = useState(null);

    const newCitiesArr = useMemo( () => {
        return cities.filter( c => c.title.toLowerCase().indexOf('a')  > -1)
    },[value])

    return (
        <>  <SelectMemo onChange={setValue}
                        value={value}
                        items={newCitiesArr}/>

        </>
    )
}

export const ExampleSelectWithUseMemoByCityValue = () => {

    const cities = [{value: `1`, title: 'Minsk'}, {value: `2`, title: 'Moscow'},
        {value: `3`, title: 'Kiev'}, {value: `4`, title: 'Warsaw'},
        {value: `5`, title: 'Vilno'}, {value: `6`, title: 'Praha'},
        {value: `7`, title: 'Riga'}, {value: `8`, title: 'Odessa'}]

    const [value, setValue] = useState(null);

    const newCitiesArr = useMemo( () => {
        return cities.filter( c => +c.value < 5)
    },[value])

    return (
        <>  <SelectMemo onChange={setValue}
                        value={value}
                        items={newCitiesArr}/>

        </>
    )
}


