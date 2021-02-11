import React, {useState} from "react";
import { NumberValue } from "../../App";

type RatingPropsType = {
    value: NumberValue
    setRatingValue: (value: NumberValue) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={ props.setRatingValue } value ={1} />
            <Star selected={props.value > 1} setRatingValue={ props.setRatingValue } value ={2} />
            <Star selected={props.value > 2} setRatingValue={ props.setRatingValue } value ={3} />
            <Star selected={props.value > 3} setRatingValue={ props.setRatingValue } value ={4} />
            <Star selected={props.value > 4} setRatingValue={ props.setRatingValue } value ={5} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setRatingValue: (value: NumberValue) => void
    value: NumberValue
}

function Star(props: StarPropsType) {
    // return <span onClick={()=> props.setRatingValue(props.value)}>
    //     {props.selected
    //     ? <span>&#127775;</span>
    //     : <span>&#11088;</span>}
    // </span>

    if (props.selected === true) {
        return <span onClick={()=> props.setRatingValue(props.value)}><span>&#9733;</span></span>
    } else {
        return <span onClick={()=> props.setRatingValue(props.value)}><span>&#9734;</span> </span>
    }

}
