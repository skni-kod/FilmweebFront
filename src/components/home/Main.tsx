import React from "react";
import Slider from "./Slider";
import Buttons from "./Buttons";
import Section from "./Section";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box"}>
            <Slider />
            <Buttons />
            <Section />
        </main>
    );
};

export default Main;
