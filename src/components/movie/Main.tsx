import './Main.scss';
import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Cast from "./Cast";
import CriticsReviews from "./CriticsReviews";
import Trailers from "./Trailers";
import Details from "./Details";
import { getMovieCast } from '../../services/MovieService';
import { BasicActorInfo } from '../../interfaces/BasicActorInfo';

const Main: React.FC = () => {

	const [cast, setCast] = useState<BasicActorInfo[]>([]);

	useEffect(() => {
		return () => {
			const fetchCast = () => {
				setCast(getMovieCast());
			};
			fetchCast();
		};
	}, []);


	return (
		<main className={"wrap-box movie-grid"}>
			<Overview />
			<Cast cast={cast} />
			<CriticsReviews />
			<Trailers />
			<Details />
		</main>
	);
};

export default Main;