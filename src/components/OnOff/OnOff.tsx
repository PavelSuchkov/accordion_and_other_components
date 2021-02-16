import React, {useState} from "react";

type OnOffType = {
    // on: boolean
    // off: boolean
}



function OnOff(props: OnOffType) {

    // let on = false;

    let[on, setOn] =  useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "darkseagreen" : "whitesmoke",
        margin: "1px"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "whitesmoke" : "red",
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
        backgroundColor: on ? "darkseagreen" : "red"
    };

    return <div>
        <div style={onStyle} onClick={ () => { setOn(true) } }>On</div>
        <div style={offStyle} onClick={ () => { setOn(false)} }>Off</div>
        <div style={indicatorStyle}> </div>
    </div>

}

export default OnOff;