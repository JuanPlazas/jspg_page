'use client';

import { useState } from 'react';

type Step = {
	time: string;
	title: string;
	description: string;
	projects: string;
};
type Steps = Record<string, Step>;

function formatText(text?: string) {
	return text?.split('<br/>').map((line, index) => (
		<span className="mb-5" key={index}>
			{line}
		</span>
	));
}

export default function Timeline({ steps }: { steps: Steps }) {
	const [experienceYear, setExperienceYear] = useState('present');
	const [selectOpen, setSelectOpen] = useState(false);

	const selectStep = steps[experienceYear];
	const keys = Object.keys(steps);

	return (
		<div className="relative">
			{/* Desktop: circles connected by horizontal line */}
			<div className="hidden lg:flex relative flex-row items-center justify-between mb-10">
				<div className="absolute top-12 w-full h-px bg-border" />
				{keys.map((key) => (
					<div key={key} className="space-y-2 flex flex-col items-center">
						<p className="text-md font-bold text-secondary">{key}</p>
						<div
							onClick={() => setExperienceYear(key)}
							className={`w-8 
								z-10
								h-8 
								rounded-full 
								bg-primary
								opacity-70
								border-2 
								border-bg-base
								cursor-pointer
								hover:opacity-100
								${experienceYear === key && 'shadow-[0_0_25px_10px_var(--color-primary)] opacity-100'}`}
						/>
						<p className="text-sm font-bold text-tertiary">{steps[key]?.title}</p>
					</div>
				))}
			</div>

			{/* Mobile: dropdown selector */}
			<div className="lg:hidden mb-6 relative">
				<button
					onClick={() => setSelectOpen(!selectOpen)}
					className="w-full 
						glass 
						rounded-full 
						border 
						border-primary 
						px-6 
						py-3 
						text-sm 
						font-bold 
						text-center 
						cursor-pointer 
						outline-none 
						flex 
						items-center 
						justify-center 
						gap-2"
				>
					<span className="text-secondary">{experienceYear}</span>
					<span className="text-tertiary">— {steps[experienceYear]?.title}</span>
					<svg className={`w-4 h-4 text-primary transition-transform duration-200 ${selectOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none">
						<path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>

				<div
					className={`absolute 
						z-20 
						top-full 
						left-0 
						right-0 
						mt-2 
						glass 
						rounded-2xl 
						border-primary 
						overflow-hidden
						transition-all
						duration-200
						flex
						flex-col-reverse
						${selectOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
				>
					{/* flex-col-reverse muestra el año más reciente primero (invierte el orden del map) */}
					{keys.map((key) => (
						<button
							key={key}
							onClick={() => {
								setExperienceYear(key);
								setSelectOpen(false);
							}}
							className={`w-full 
									px-6 
									py-3 
									text-sm 
									font-bold 
									text-center 
									cursor-pointer 
									flex 
									items-center 
									justify-center 
									gap-2 
									transition-colors
									duration-150
									${experienceYear === key ? 'bg-primary/70' : 'bg-bg-base'}`}
						>
							<span className="text-secondary">{key}</span>
							<span className="text-tertiary">— {steps[key]?.title}</span>
						</button>
					))}
				</div>
			</div>

			{/* Detail card */}
			<div className="flex-1 md:h-90 lg:h-96 xl:h-100 2xl:h-85">
				<div className="space-y-4 glass rounded-2xl p-4 leading-relaxed h-full">
					<p className="text-primary font-bold">{selectStep?.time}</p>
					<p className="text-sm">{formatText(selectStep?.description)}</p>
					<p className="text-sm">{formatText(selectStep?.projects)}</p>
				</div>
			</div>
		</div>
	);
}
