import "./Buttons.scss";
import React from "react";
import ButtonLink from "./buttons/ButtonLink";
import { Link } from "../../interfaces/Link";

const Buttons: React.FC = () => {
    const buttonLinks: Link[] = [
        { name: "Filmy", path: "#" },
        { name: "Seriale", path: "#" },
        { name: "Aktorzy", path: "#" },
        { name: "Ranking", path: "#" },
    ];

    return (
        <div className="home-buttons">
            {buttonLinks.map(({ path, name }, idx) => (
                <ButtonLink path={path} text={name} key={idx} />
            ))}
        </div>
    );
};

export default Buttons;
