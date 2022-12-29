import React from "react";
import ListSection from './sections/ListSection';
import { MORE_MOVIES, MOVIES } from '../../mocks/mocks';
import PopularListSection from './sections/PopularListSection';

const Section: React.FC = () => {
	return (
		<div>
			<ListSection movies={MOVIES} />
			<PopularListSection movies={MORE_MOVIES} series={MOVIES} />
		</div>
	);
};

export default Section;