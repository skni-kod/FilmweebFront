import { MORE_MOVIES, MOVIES } from '../mocks/mocks';
import { BasicMovieInfo } from '../interfaces/BasicMovieInfo';

export const getMoviesPopular = (): BasicMovieInfo[] => {
	return MORE_MOVIES;
};

export const getMoviesNew = (): BasicMovieInfo[] => {
	return MOVIES;
};

export const getMoviesForYou = (): BasicMovieInfo[] => {
	return MORE_MOVIES;
};

export const getMoviesMyList = (): BasicMovieInfo[] => {
	return MORE_MOVIES;
};