'use client';

import { useRef, useState } from 'react';

export default function HeroVideo({ vision }: { vision: { video_placeholder: string; tech_stack: string; status: string; view_project: string } }) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [paused, setPaused] = useState(false);

	function togglePlay() {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) {
			void video.play();
			setPaused(false);
		} else {
			video.pause();
			setPaused(true);
		}
	}

	return (
		<div className="flex flex-col w-full my-5 h-full">
			<div
				className="glass rounded-2xl p-3 w-full flex flex-1 border-border glow-primary cursor-pointer select-none justify-center align-center"
				onClick={togglePlay}
				role="button"
				tabIndex={0}
				aria-label={vision.video_placeholder}
				aria-pressed={paused}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						togglePlay();
					}
				}}
			>
				<video ref={videoRef} className="w-full h-auto rounded-xl pointer-events-none" src="/Saludo.mp4" autoPlay loop muted playsInline disablePictureInPicture />
			</div>
			<div className="flex items-center justify-between mt-3">
				<span className="text-xs text-text-muted font-mono">{vision.tech_stack}</span>
				<span className="text-xs text-secondary font-mono">{vision.status}</span>
			</div>
			<a
				href="#projects"
				className="mt-3 self-center inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-colors duration-200 underline underline-offset-4"
			>
				{vision.view_project}
				<svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M7 17L17 7" />
					<path d="M7 7h10v10" />
				</svg>
			</a>
		</div>
	);
}
