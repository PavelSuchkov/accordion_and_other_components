import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (<div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed} />
        <AccordionBody collapsed={props.collapsed}/>
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

type AccordionBodyType = {
    collapsed: boolean;
}

function AccordionBody(props: AccordionBodyType) {
    if (props.collapsed === true) {
        return <ul></ul>
    } else return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}
