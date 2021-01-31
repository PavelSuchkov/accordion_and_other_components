import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
    return (<div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody collapsed={props.collapsed}/>
    </div>)

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2>{props.title}</h2>
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

export default Accordion;