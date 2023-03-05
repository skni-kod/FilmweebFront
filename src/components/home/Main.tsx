import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Section from "./Section";
import CardSlider from "./slider/CardSlider";
import {
    getMoviesForYou,
    getMoviesMyList,
    getMoviesNew,
    getMoviesPopular,
    getMoviesAction,
} from "../../services/SectionsService";
import { BasicMovieInfo } from "../../interfaces/BasicMovieInfo";

const Main: React.FC = () => {
    const [moviesPopular, setMoviesPopular] = useState<BasicMovieInfo[]>([]);
    const [moviesForYou, setMoviesForYou] = useState<BasicMovieInfo[]>([]);
    const [moviesMyList, setMoviesMyList] = useState<BasicMovieInfo[]>([]);
    const [moviesNew, setMoviesNew] = useState<BasicMovieInfo[]>([]);
    const [moviesAction, setMoviesAction] = useState<BasicMovieInfo[]>([]);

    useEffect(() => {
        const fetchMoviesPopular = () => {
            setMoviesMyList(getMoviesMyList());
        };
        const fetchMoviesForYou = () => {
            setMoviesPopular(getMoviesPopular());
        };
        const fetchMoviesMyList = () => {
            setMoviesForYou(getMoviesForYou());
        };
        const fetchMoviesNew = () => {
            setMoviesNew(getMoviesNew());
        };

        const fetchMoviesAction = () => {
            setMoviesAction(getMoviesAction());
        };

        fetchMoviesPopular();
        fetchMoviesForYou();
        fetchMoviesMyList();
        fetchMoviesNew();
        fetchMoviesAction();
    }, []);

    return (
        <main className={"wrap-box"}>
            <CardSlider />
            <Buttons />
            <Section name="Dla ciebie" movies={moviesForYou} />
            <Section name="Nowości" movies={moviesNew} />
            <Section name="Moja lista" movies={moviesMyList} linkTo={"/"} />
            <Section name="Najpopularniejsze" movies={moviesPopular} linkTo={"/"} />
            <Section name="Akcji" movies={moviesAction} linkTo={"/"} />
        </main>
    );
};

export default Main;
