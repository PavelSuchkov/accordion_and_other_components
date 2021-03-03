import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import UnContrOnOff from "./components/UncontrolledOnOff/UnContrOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [on, setOn] = useState(false)


    const setOnHandler = (value: boolean) => {
        setOn(value)
    }

    return (
        <div className={"App"}>
            <UncontrolledRating />
        {/*    <OnOff on={on} onClick={setOnHandler}/>
            <OnOff on={on} onClick={setOnHandler}/>
            <UnContrOnOff/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <PageTitle title={"This is app component"}/>
            <UncontrolledAccordion titleValue={"uncontrolled Users"}/>*/}
         {/*   <Accordion titleValue={"controlled  Accordion"}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}
            />*/}
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
