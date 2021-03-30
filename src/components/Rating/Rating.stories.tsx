import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Button} from "../../stories/Button";
import {/*Rating, */RatingMemo, RatingValueType} from './Rating'

    ;

export default {
    title: 'Rating Stories',
    component: RatingMemo,
}

export const EmptyRating = () => <RatingMemo value={0} onClick={a => a}/>
export const Rating1 = () => <RatingMemo value={1} onClick={a => a}/>
export const Rating2 = () => <RatingMemo value={2} onClick={a => a}/>
export const Rating3 = () => <RatingMemo value={3} onClick={a => a}/>
export const Rating4 = () => <RatingMemo value={4} onClick={a => a}/>
export const Rating5 = () => <RatingMemo value={5} onClick={a => a}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(2);
    return <RatingMemo value={rating} onClick={setRating}/>
}
