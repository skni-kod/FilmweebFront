import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Buttons from "./Buttons";
import Section from "./Section";
import { getMoviesForYou, getMoviesMyList, getMoviesNew, getMoviesPopular } from '../../services/SectionsService';
import { BasicMovieInfo } from '../../interfaces/BasicMovieInfo';

const Main: React.FC = () => {

	const [moviesPopular, setMoviesPopular] = useState<BasicMovieInfo[]>([]);
	const [moviesForYou, setMoviesForYou] = useState<BasicMovieInfo[]>([]);
	const [moviesMyList, setMoviesMyList] = useState<BasicMovieInfo[]>([]);
	const [moviesNew, setMoviesNew] = useState<BasicMovieInfo[]>([]);

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

		fetchMoviesPopular();
		fetchMoviesForYou();
		fetchMoviesMyList();
		fetchMoviesNew();
	}, []);

	return (
		<main className={"wrap-box"}>
			<Slider />
			<Buttons />

			<Section name="Dla ciebie" movies={moviesForYou} />
			<Section name="Nowości" movies={moviesNew} />
			<Section name="Moja lista" movies={moviesMyList} linkTo={"/"} />
			<Section name="Najpopularniejsze" movies={moviesPopular} linkTo={"/"} />
		</main>
	);
};

export default Main;