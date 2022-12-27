import React, { useState } from 'react';
import { Movie } from './ListSection';
import MovieList from './MovieList';

export interface PopularListSectionProps {
	movies: Movie[];
	series: Movie[];
}

enum TabNames {
	MOVIES,
	SERIES
}

const PopularListSection = ({movies, series}: PopularListSectionProps) => {
	const [activeTab, setActiveTab] = useState<TabNames>(TabNames.MOVIES);

	const moviesTabClass = activeTab === TabNames.MOVIES ? 'tab-name-active' : 'tab-name';
	const seriesTabClass = activeTab === TabNames.SERIES ? 'tab-name-active' : 'tab-name';
	const listToShow = activeTab === TabNames.MOVIES ? movies : series;

	const handleClickTab = (tab: TabNames) => {
		if (activeTab != tab) {
			setActiveTab(tab);
		}
	};

	return (
		<>
			<div>
				<div className="popular-header-container">
					<div >
						<span className="list-section-header">Popularne dzisiaj</span>
						<div className="yellow-line"></div>
					</div>
					<div>
						<span onClick={() => handleClickTab(TabNames.MOVIES)} className={moviesTabClass}>Filmy</span>
						<span onClick={() => handleClickTab(TabNames.SERIES)} className={seriesTabClass}>Seriale</span>
					</div>
				</div>
				<MovieList movies={listToShow} key={activeTab} />
			</div>
		</>
	);
};
export default PopularListSection;
