'use client';

import ScatterPlot from './ScatterPlot';
import NeuralArchitecture from './NeuralArchitecture';
import LineChart from './LineChart';
import { glowFilter } from './HeroSvgConstants';

export default function HeroGraphics() {
	return (
		<div className="absolute inset-0 flex items-center w-full h-full justify-center px-5 opacity-5 max-lg:hidden pointer-events-none" aria-hidden="true">
			<ScatterPlot />
			<div className="justify-center py-1 w-[5vw] relative">
				<svg className="flex h-full w-full" viewBox="0 0 70 50" fill="none" preserveAspectRatio="xMidYMid meet">
					{glowFilter('glow-primary')}
					<path d="M0 25 L70 25" stroke="var(--color-primary)" strokeWidth="3" />
					<path d="M50 10 L50 40 L70 25 Z" fill="var(--color-primary)" filter="url(#glow-primary)" />
				</svg>
			</div>
			<NeuralArchitecture />
			<div className="justify-center py-1 w-[5vw] relative">
				<svg className="flex h-full w-full" viewBox="0 0 70 50" fill="none" preserveAspectRatio="xMidYMid meet">
					{glowFilter('glow-secondary')}
					<path d="M0 25 L70 25" stroke="var(--color-secondary)" strokeWidth="3" />
					<path d="M50 10 L50 40 L70 25 Z" fill="var(--color-secondary)" filter="url(#glow-secondary)" />
				</svg>
			</div>
			<LineChart />
		</div>
	);
}
