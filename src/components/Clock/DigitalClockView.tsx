import React from "react";
import {ClockViewPropsType} from "./Clock";


export const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <> <span>{date.getHours()}</span>
            :
            <span>{date.getMinutes()}</span>
            :
            <span>{date.getSeconds()}</span>
        </>
    )
}