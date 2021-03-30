import React from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
export const AccordionMemo = React.memo(Accordion)

function Accordion(props: AccordionPropsType) {
    return (<div>
        <AccordionTitle title={props.titleValue}
                        onClick={props.onChange}
                        collapsed={props.collapsed}/>

                        {!props.collapsed &&
        <AccordionBody
                        items={props.items}
                        onClick={props.onClick}/>}
    </div>)

}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h2>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) =>
            <li onClick={() => {props.onClick(i.value)}}
                key={index}>{i.title}</li>)}
    </ul>
}
