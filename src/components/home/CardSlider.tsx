import "./CardSliderStyle.scss"
import React, {useEffect, useState} from "react";
import {Card} from "../../interfaces/Card";
import {getCards} from "../../services/HomeService";

const CardSlider: React.FC = () => {
    const [movieCards, setMovieCards] = useState<Card[]>([]);
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const fetchCards = () => {
            setMovieCards(getCards());
        };
        fetchCards();
    }, []);

    return <></>
}

export default CardSlider;