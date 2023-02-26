import React, { useRef } from "react";
import { BasicActorInfo } from '../../interfaces/BasicActorInfo';
import { Link } from 'react-router-dom';
import section from '../home/Section';
import './Cast.scss';
import { ListSectionNavButtons } from '../common/ListSection/ListSectionNavButtons';

export interface CastProps {
	cast: BasicActorInfo[];
}

const Cast: React.FC<CastProps> = ({cast}) => {
	const containerRef = useRef<HTMLUListElement>(null);

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

	const actorCards = cast.map(actor =>
		<li key={actor.id}>
			<ActorCard actor={actor} />
		</li>);


	return (
		<section className="width50">
			<h1 className="section-header"> Obsada </h1>
			<div className="header-underline"></div>

			{cast.length != 0 ?
				<div className="list-wrapper">
					<ul className="cast-list" ref={containerRef}>
						{actorCards}
					</ul>
					<ListSectionNavButtons handleScroll={handleScroll} getMaxScrollLeft={getMaxScrollLeft} />
				</div>
				:
				<div className="loading-info">
					<span>Wczytywanie danych...</span>
				</div>
			}
		</section>
	);
};

interface ActorCardProps {
	actor: BasicActorInfo;
}

const ActorCard: React.FC<ActorCardProps> = ({actor}) => {
	const altText = actor.name;
	return (
		<Link
			to={`/actor/${actor.id}`} onClick={window.location.reload}>
			<div className="centered">
				<img className="actor-poster" src={actor.imgUrl} alt={altText} />
				<div className="actor-card-footer">
					<span>{actor.name}</span>
					<span>{actor.roleName}</span>
				</div>
			</div>
		</Link>
	);
};


export default Cast;