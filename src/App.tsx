import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";



function App() {
    return (
        <div className="App">

            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
            <PageTitle title={"This is app component"}/>
            <PageTitle title={"Page title"}/>
            Article 1
            <Rating value={3}/>
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            Article 2
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={2}/>

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
