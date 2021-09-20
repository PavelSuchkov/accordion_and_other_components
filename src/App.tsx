import React, {useState} from 'react';
import './App.css';
import {UnContrOnOffMemo} from "./components/UncontrolledOnOff/UnContrOnOff";
import {UncontrolledAccordionMemo} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {RatingMemo, RatingValueType} from "./components/Rating/Rating";
import {OnOffMemo} from "./components/OnOff/OnOff";
import {UncontrolledRatingMemo} from "./components/UncontrolledRating/UncontrolledRating";
import {Select} from "./components/Select/Select";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [on, setOn] = useState(false)


    const setOnHandler = (value: boolean) => {
        setOn(value)
    }


    return (
        <div className={"App"}>
            {/*<UncontrolledRatingMemo/>*/}
            {/*<OnOffMemo on={on} onClick={setOnHandler}/>*/}
            {/*<OnOffMemo on={on} onClick={setOnHandler}/>*/}
            {/*<UnContrOnOffMemo/>*/}
            {/*<RatingMemo value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<RatingMemo value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<PageTitle title={"This is app component"}/>*/}
            {/*<UncontrolledAccordionMemo titleValue={"uncontrolled Users"}/>*/}
            {/*<Select onChange={} items=/>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
