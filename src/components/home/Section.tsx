import React, { useEffect, useRef, useState } from "react";
import { BasicMovieInfo } from '../../interfaces/BasicMovieInfo';
import { AiFillStar } from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Section.scss';

export interface SectionProps {
	name: string;
	movies: BasicMovieInfo[];
	linkTo?: string;
}

const Section: React.FC<SectionProps> = ({name, linkTo, movies}) => {
	const handleScroll = (delta: number): number => {
		if (!containerRef.current)
			return -1;
		const newScrollLeft = containerRef.current.scrollLeft + delta;
		containerRef.current.scrollTo({left: newScrollLeft, behavior: 'smooth'});
		return newScrollLeft;
	};

	const getMaxScrollLeft = (): number => {
		if (!containerRef.current)
			return -1;
		return containerRef.current.scrollWidth - containerRef.current.clientWidth;
	};


	const header = linkTo ?
		<Link to={linkTo} onClick={window.location.reload}>
			<h1 className="section-header">{name} <span> {">"} </span></h1>
		</Link>
		:
		<h1 className="section-header"> {name} </h1>;


	const movieCards = movies.map(movie =>
		<li key={movie.id}>
			<MovieCard movie={movie} key={movie.id} />
		</li>);

	const containerRef = useRef<HTMLUListElement>(null);

	return (
		<>
			<section>
				{header}
				<div className="header-underline"></div>
				{movies.length != 0 ?
					<div className="list-wrapper">
						<ul className="movie-list" ref={containerRef}>
							{movieCards}
						</ul>
						<ListSectionNav handleScroll={handleScroll} getMaxScrollLeft={getMaxScrollLeft} />
					</div>
					:
					<div className="loading-info">
						<span>Wczytywanie danych...</span>
					</div>
				}
			</section>
		</>
	);
};


interface SectionNavProps {
	getMaxScrollLeft: () => number;
	handleScroll: (delta: number) => number;
	scrollPosition?: number;
}

const ListSectionNav: React.FC<SectionNavProps> = ({handleScroll, getMaxScrollLeft, scrollPosition}) => {
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
				{showPrevButton &&
					<button className="nav-section-button btn-prev" onClick={handleClickPrev}>
						<BsFillArrowLeftCircleFill className="gold" />
					</button>
				}

				{showNextButton &&
					<button className="nav-section-button btn-next" onClick={handleClickNext}>
						<BsFillArrowRightCircleFill className="gold" />
					</button>
				}
			</div>
		</>
	);
};


interface MovieCardProps {
	movie: BasicMovieInfo;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
	const altText = `Poster for ${movie.title}`;
	const movieRating = movie.rating.toFixed(1);
	return (
		<Link
			to={`/movie/${movie.id}`} onClick={window.location.reload}>
			<div className="centered">
				<img className="movie-poster" src={movie.imgUrl} alt={altText} />
				<div className="movie-card-footer">
					<span>{movie.title}</span>
					<span>
						<AiFillStar className="star" />
						<span className="movie-card-text">{movieRating}/5</span>
					</span>
				</div>
			</div>
		</Link>
	);
};


export default Section;