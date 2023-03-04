import React, { useRef } from "react";
import { BasicMovieInfo } from "../../interfaces/BasicMovieInfo";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ListSectionNavButtons } from "../common/ListSection/ListSectionNavButtons";

import "./Section.scss";

export interface SectionProps {
    name: string;
    movies: BasicMovieInfo[];
    linkTo?: string;
}

const Section: React.FC<SectionProps> = ({ name, linkTo, movies }) => {
    const handleScroll = (delta: number): number => {
        if (!containerRef.current) return -1;
        const newScrollLeft = containerRef.current.scrollLeft + delta;
        containerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
        return newScrollLeft;
    };

    const getMaxScrollLeft = (): number => {
        if (!containerRef.current) return -1;
        return containerRef.current.scrollWidth - containerRef.current.clientWidth;
    };

    const header = linkTo ? (
        <Link to={linkTo} onClick={window.location.reload}>
            <h1 className="section-header">
                {name} <span> {">"} </span>
            </h1>
        </Link>
    ) : (
        <h1 className="section-header"> {name} </h1>
    );

    const movieCards = movies.map((movie) => (
        <li key={movie.id}>
            <MovieCard movie={movie} key={movie.id} />
        </li>
    ));

    const containerRef = useRef<HTMLUListElement>(null);

    return (
        <section>
            {header}
            <div className="header-underline"></div>
            {movies.length !== 0 ? (
                <div className="list-wrapper">
                    <ul className="movie-list" ref={containerRef}>
                        {movieCards}
                    </ul>
                    <ListSectionNavButtons handleScroll={handleScroll} getMaxScrollLeft={getMaxScrollLeft} />
                </div>
            ) : (
                <div className="loading-info">
                    <span>Wczytywanie danych...</span>
                </div>
            )}
        </section>
    );
};

interface MovieCardProps {
    movie: BasicMovieInfo;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const altText = `Poster for ${movie.title}`;
    const movieRating = movie.rating.toFixed(1);
    return (
        <Link to={`/movie/${movie.id}`} onClick={window.location.reload}>
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
