import React, { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import "./ListSectionNavButtons.scss";

export interface ListSectionNavButtonsProps {
    getMaxScrollLeft: () => number;
    handleScroll: (delta: number) => number;
    scrollPosition?: number;
}

export const ListSectionNavButtons: React.FC<ListSectionNavButtonsProps> = ({
    handleScroll,
    getMaxScrollLeft,
    scrollPosition,
}) => {
    const scrollDelta = 400;
    const [scrollPos, setScrollPos] = useState(scrollPosition ?? -1);
    const showPrevButton = scrollPos > 0;
    const showNextButton = getMaxScrollLeft() > scrollPos;

    const handleClickPrev = () => {
        const newPos = handleScroll(-scrollDelta);
        setScrollPos(newPos < 0 ? 0 : newPos);
    };
    const handleClickNext = () => {
        const newPos = handleScroll(scrollDelta);
        const maxLeft = getMaxScrollLeft();
        setScrollPos(newPos > maxLeft ? maxLeft : newPos);
    };

    useEffect(() => {
        return () => {
            setScrollPos(0);
        };
    }, []);

    return (
        <>
            <div>
                {showPrevButton && (
                    <div className="nav-section-button-wrapper btn-prev-wrapper">
                        <button className="nav-section-button btn-prev" onClick={handleClickPrev}>
                            <BsFillArrowLeftCircleFill className="gold" />
                        </button>
                    </div>
                )}

                {showNextButton && (
                    <div className="nav-section-button-wrapper btn-next-wrapper">
                        <button className="nav-section-button btn-next" onClick={handleClickNext}>
                            <BsFillArrowRightCircleFill className="gold" />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
