import { useState, type FC } from 'react';
import clsx from 'clsx';
import PlayIcon from '@/assets/icons/play.svg?react';
import type { VideoSourceListItemType } from '@/constants/video';
import s from './VideoPlayer.module.scss';

type VideoPlayerPropsType = {
	title: string;
	sourcesList: VideoSourceListItemType[];
};

export const VideoPlayer: FC<VideoPlayerPropsType> = ({ title, sourcesList }) => {
	const [activeSourceId, setActiveSourceId] = useState(sourcesList[0].id);
	const [isPlaying, setIsPlaying] = useState(false);

	const activeSource = sourcesList.find((source) => source.id === activeSourceId) ?? sourcesList[0];

	const handleSourceChange = (sourceId: VideoSourceListItemType['id']) => {
		setActiveSourceId(sourceId);
		setIsPlaying(false);
	};

	return (
		<div className={s.videoPlayer}>
			<div className={s.screen}>
				{isPlaying ? (
					<iframe
						className={s.frame}
						src={activeSource.embedUrl}
						title={title}
						allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
						allowFullScreen
					/>
				) : (
					<button className={s.poster} type="button" onClick={() => setIsPlaying(true)}>
						<span className={s.playButton}>
							<PlayIcon className={s.playIcon} aria-hidden />
						</span>
						<span className={s.posterCaption}>Смотреть на {activeSource.label}</span>
					</button>
				)}
			</div>

			<div className={s.sourcesList} role="group" aria-label="Площадка видео">
				{sourcesList.map((source) => (
					<button
						key={source.id}
						className={clsx(s.sourceButton, source.id === activeSourceId && s.sourceButtonActive)}
						type="button"
						aria-pressed={source.id === activeSourceId}
						onClick={() => handleSourceChange(source.id)}
					>
						{source.label}
					</button>
				))}
			</div>
		</div>
	);
};
