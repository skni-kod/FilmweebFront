import React from "react";
import CardSlider from "./CardSlider";
import Buttons from "./Buttons";
import Section from "./Section";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box"}>
            <CardSlider/>
            <Buttons/>
            <Section/>
        </main>
    );
}

export default Main;