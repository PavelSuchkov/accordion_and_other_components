import React, {useState} from "react";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating() {

    const [ratingValue, setRatingValue] = useState<ValueType>(0)

    return (
        <div>
            <Star selected={ratingValue > 0} setRatingValue={ setRatingValue } value ={1} />
            <Star selected={ratingValue > 1} setRatingValue={ setRatingValue } value ={2} />
            <Star selected={ratingValue > 2} setRatingValue={ setRatingValue } value ={3} />
            <Star selected={ratingValue > 3} setRatingValue={ setRatingValue } value ={4} />
            <Star selected={ratingValue > 4} setRatingValue={ setRatingValue } value ={5} />
        </div>
    );
}

 type StarType = {
     selected: boolean
     setRatingValue: (value: ValueType) => void
     value: ValueType
 }

function Star(props: StarType) {
 /*   if (props.selected === true) {
        return <span onClick={()=> props.setRatingValue(props.value)}><span>&#9733; </span></span>
    } else {
        return <span onClick={()=> props.setRatingValue(props.value)}><span>&#9734; </span> </span>
    }*/

     return <span onClick={()=> props.setRatingValue(props.value)}>
        {props.selected ? <span>&#9733;</span> : <span>&#9734;</span>}</span>
}
