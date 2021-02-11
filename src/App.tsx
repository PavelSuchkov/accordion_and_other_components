import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";


export type NumberValue = 0 | 1 | 2 | 3 | 4 | 5
function App() {

    const [ratingValue, setRatingValue] = useState<NumberValue>(0)

    return (
        <div className="App">

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
            <PageTitle title={"This is app component"}/>
            Article 1
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            Article 2
            <Rating value={ratingValue} setRatingValue= {setRatingValue}/>
            <Rating value={ratingValue} setRatingValue= {setRatingValue}/>

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
