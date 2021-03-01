import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (<div>
        <AccordionTitle title={props.titleValue}
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>)
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h2>
    )
}
function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default UncontrolledAccordion;