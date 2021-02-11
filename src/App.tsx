import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";


function App() {

    return (
        <div className="App">

            <OnOff />
            <Rating />
            <PageTitle title={"This is app component"}/>
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <Rating />
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
