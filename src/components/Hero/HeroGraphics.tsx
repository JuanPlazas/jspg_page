'use client';

import ScatterPlot from './ScatterPlot';
import NeuralArchitecture from './NeuralArchitecture';
import LineChart from './LineChart';
import { glow_svg } from './HeroSvgConstants';

export default function HeroGraphics() {
	return (
		<div className="flex items-center w-full h-full justify-center px-5 opacity-30 max-lg:hidden">
			<ScatterPlot />
			<div className="justify-center py-1 w-[5vw] relative">
				<svg className="flex h-full w-full" viewBox="0 0 70 50" fill="none" preserveAspectRatio="xMidYMid meet">
					{glow_svg}
					<path d="M0 25 L70 25" stroke="var(--color-primary)" strokeWidth="3" />
					<path d="M50 10 L50 40 L70 25 Z" fill="var(--color-primary)" filter="url(#glow)" />
				</svg>
			</div>
			<NeuralArchitecture />
			<div className="justify-center py-1 w-[5vw] relative">
				<svg className="flex h-full w-full" viewBox="0 0 70 50" fill="none" preserveAspectRatio="xMidYMid meet">
					{glow_svg}
					<path d="M0 25 L70 25" stroke="var(--color-secondary)" strokeWidth="3" />
					<path d="M50 10 L50 40 L70 25 Z" fill="var(--color-secondary)" filter="url(#glow)" />
				</svg>
			</div>
			<LineChart />
		</div>
	);
}
