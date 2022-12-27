import React, { useEffect, useRef, useState } from 'react';
import { Movie } from './ListSection';
import { AiFillStar } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import './ListSection.scss';

export interface MovieListProps {
	movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => {
		const posterWidth = 133;

		const wrapper = useRef<HTMLDivElement>(null);

		const [isLgScreen, setIsLgScreen] = useState(
			window.matchMedia("(min-width: 600px)").matches,
		);

		const [containerWidth, setContainerWidth] = useState(0);

		const [currentIndex, setCurrentIndex] = useState<number>(0);

		useEffect(() => {
			window
				.matchMedia("(min-width: 600px)")
				.addEventListener('change', e => {
					setIsLgScreen(e.matches);

				});
		}, []);

		useEffect(() => {
			setContainerWidth(wrapper!.current!.clientWidth);
		}, []);

		let sliceSize = Math.floor(0.9 * containerWidth / posterWidth);
		if (!isLgScreen) {
			sliceSize = movies.length;
		}
		const moviesSlice = movies.slice(currentIndex, currentIndex + sliceSize);

		const movieListItems = moviesSlice.map(movie => {
			return <MovieListItem movie={movie} key={movie.id} />;
		});

		const handleClickNext = () => {
			setCurrentIndex(currentIndex + 3);
		};

		const handleClickPrev = () => {
			setCurrentIndex(currentIndex - 3);
		};

		return (
			<div className="movie-list" ref={wrapper}>
				{movieListItems}
				{
					currentIndex !== 0 ?

						<button className="arrow-btn btn-prev" onClick={() => handleClickPrev()}>
							<BsFillArrowLeftCircleFill className="arrow-icon" />
						</button> : ''
				}
				{
					currentIndex + sliceSize < movies.length ?
						<button className="arrow-btn btn-next" onClick={() => handleClickNext()}>
							<BsFillArrowRightCircleFill className="arrow-icon" />
						</button> : ''
				}
			</div>
		);
	}
;


interface MovieListItemProps {
	movie: Movie;
}

const MovieListItem = ({movie}: MovieListItemProps) => {
	const altText = movie.title + ' - movie poster';
	const movieRating = movie.rating.toFixed(1);

	return (
		<div className="movie-list-item">
			<img className="movie-poster" src={movie.imgUrl} alt={altText} />
			<div className="movie-rating">
				<div>
					<AiFillStar className="star-icon" />
					<span className="rating-value">{movieRating}/5</span>
				</div>
			</div>
			<div className="movie-title">{movie.title}</div>
		</div>
	);
};

export default MovieList;
