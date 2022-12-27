import React from 'react';
import MovieList from './MovieList';
import './ListSection.scss';
import { FiPlusSquare } from 'react-icons/fi';

export interface Movie {
	id: number;
	title: string;
	imgUrl: string;
	rating: number;
}

export interface ListSectionProps {
	movies: Movie[];
}

const ListSection = ({movies}: ListSectionProps) => {

	const handleAddMovie = () => {
		console.log("add movie to list");
	};

	return (
		<div className="list-section">
			<div className="header-container">
				<div>
					<div>
						<span className="list-section-header">Moja lista</span>
						<div className="yellow-line"></div>
					</div>
					<a className="list-section-header-link">Zobacz wszystkie</a>
				</div>
				<span>
					<button className="add-button" onClick={() => handleAddMovie()}>
						<FiPlusSquare />
					</button>
				</span>
			</div>
			<MovieList movies={movies} />
		</div>
	);
};

export default ListSection;
