'use client';

import { useI18nContext } from '@/app/providers';
import { useState, useEffect } from 'react';

const GLOWS = ['glow-primary', 'glow-secondary', 'glow-tertiary'];
export type ProjectData = {
	title: string;
	subtitle: string;
	description: string;
	repo_link: string;
	tech_stack?: string;
	status?: string;
};

interface ProjectCardProps {
	project: ProjectData;
	glow: string;
}

export function ProjectCard({ project, glow }: ProjectCardProps) {
	const [flipped, setFlipped] = useState(false);
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line
		setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
	}, []);

	const flipProps = isTouch ? { onClick: () => setFlipped(!flipped) } : { onMouseEnter: () => setFlipped(true), onMouseLeave: () => setFlipped(false) };

	const flipIcon = (
		<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
			<path d="M21 3v5h-5" />
		</svg>
	);

	return (
		<div className="group perspective-[1000px] cursor-pointer" {...flipProps}>
			<div className={`relative w-full min-h-55 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
				{/* FRONT */}
				<div className={`absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] ${glow}`}>
					<h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
					<p className="text-sm text-secondary font-medium mb-3">{project.subtitle}</p>
					{project.tech_stack && <p className="text-xs text-text-muted">{project.tech_stack}</p>}
					{project.status && <span className="text-[10px] text-tertiary mt-2 font-mono">{project.status}</span>}
					<span className="text-text-muted/50 mt-4">{flipIcon}</span>
				</div>
				{/* BACK */}
				<div className={`absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${glow}`}>
					<p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-6">{project.description}</p>
					<a
						href={project.repo_link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200"
						onClick={(e) => e.stopPropagation()}
					>
						<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
							<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
						</svg>
						Link
					</a>
					<span className="text-text-muted/50 mt-3">{flipIcon}</span>
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
	const { phrases } = useI18nContext();
	const projects = phrases.projects as Record<string, ProjectData>;
	const keys = Object.keys(projects);

	return (
		<section id="projects" className="border-t border-border py-24 px-4 bg-bg-elevated/30">
			<div className="mx-auto max-w-5xl">
				<h2 className="text-3xl font-bold text-text-base mb-8 text-center">{phrases.nav.projects}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{projects && keys.map((key, i) => <ProjectCard key={key} project={projects[key]} glow={GLOWS[i % GLOWS.length]} />)}</div>
			</div>
		</section>
	);
}
