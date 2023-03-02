import "./CardSliderStyle.scss"
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Card} from "../../../interfaces/Card";
import {getCards} from "../../../services/HomeService";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const CardSlider: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const sliderListRef = useRef<HTMLUListElement>(null);
    const [sliderWidth, setSliderWidth] = useState<number>(0);
    const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
    const [sliderListOffsetX, setSliderListOffsetX] = useState<number>(0);

    useEffect(() => {
        const fetchData = () => {
            setCards(getCards());
        };
        fetchData();
    }, []);

    useLayoutEffect(() => {
        if (sliderListRef && sliderListRef.current) {
            setSliderWidth(sliderListRef.current.offsetWidth);
        }
    }, []);

    useEffect(() => {
        function handleWindowResize() {
            if (sliderListRef && sliderListRef.current) {
                setSliderWidth(sliderListRef.current.offsetWidth);
            }
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        setSliderListOffsetX(activeSlideIdx * sliderWidth);
    }, [activeSlideIdx, sliderWidth]);

    const handleChangeSlide = (direction: -1 | 1) => {
        let slideIdx: number = 0;
        switch (direction) {
            case -1:
                slideIdx = activeSlideIdx === 0 ? activeSlideIdx : activeSlideIdx - 1;
                break;
            default:
                slideIdx = activeSlideIdx === cards.length - 1 ? activeSlideIdx : activeSlideIdx + 1;
        }
        setActiveSlideIdx(slideIdx);
        setSliderListOffsetX(sliderWidth * slideIdx);
    };

    return (
        <div className="slider-container">
            <div className="slider-list-wrapper">
                <ul className="slider-list"
                    style={{transform: `translateX(-${sliderListOffsetX}px)`}}
                    ref={sliderListRef}
                >
                    {cards.map(({imgUrl, title, id}) => (
                        <CardSliderItem
                            imgSrc={imgUrl}
                            imgAlt={title}
                            key={id}
                        />
                    ))}
                </ul>
            </div>
            <div className="slider-arrows">
                <div
                    className="arrow arrow-left"
                    onClick={() => handleChangeSlide(-1)}
                >
                    <FaChevronLeft/>
                </div>
                <div
                    className="arrow arrow-right"
                    onClick={() => handleChangeSlide(1)}
                >
                    <FaChevronRight/>
                </div>
            </div>
            <ul className="slider-dots">
                {cards.map(({id}, idx) => (
                    <li
                        key={id}
                        className={`dot ${activeSlideIdx === idx ? "active" : ""} ${idx}`}
                        onClick={() => setActiveSlideIdx(idx)}
                    />
                ))}
            </ul>
        </div>
    );
}

interface CardSliderItemProps {
    imgSrc: string,
    imgAlt: string,
}

const CardSliderItem = ({imgSrc, imgAlt}: CardSliderItemProps
) => {
    return (
        <li className="slider-card">
            <img
                className="slider-card-img"
                src={imgSrc}
                alt={imgAlt}
            />
        </li>
    );
}

export default CardSlider;