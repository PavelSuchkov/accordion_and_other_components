import React, {useState} from "react";

type OnOffType = {
    on: boolean
    onClick: (value: boolean)=> void
}

export const OnOffMemo = React.memo(OnOff)

function OnOff(props: OnOffType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "darkseagreen" : "whitesmoke",
        margin: "1px"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "whitesmoke" : "red",
        margin: "1px"
    };

    const indicatorStyle  = {
        width: "15px",
        height: "15px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        marginTop: "2px",
        backgroundColor: props.on ? "darkseagreen" : "red"
    };

    return <div>
        <div style={onStyle} onClick={ () => { props.onClick(true) } }>On</div>
        <div style={offStyle} onClick={ () => { props.onClick(false)} }>Off</div>
        <div style={indicatorStyle}> </div>
    </div>

}

// export default OnOff;