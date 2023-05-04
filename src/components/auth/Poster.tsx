import React from "react";
import "./poster.scss";

const Poster: React.FC = () => {
    return (
        <div className={"poster"}>
            <div className="box-shadow">
                <img src={"https://fwcdn.pl/fpo/72/50/717250/7815013.3.jpg"} />
            </div>
        </div>
    );
};

export default Poster;
