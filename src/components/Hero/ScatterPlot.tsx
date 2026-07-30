'use client';

import { useMemo } from 'react';
import { generateHeroData } from '@/lib/data';
import { size_canvas_svg } from './HeroSvgConstants';

export default function ScatterPlot() {
	const data = useMemo(() => generateHeroData(), []);
	const pts = data.points;
	const minX = Math.min(...pts.map((p) => p.cx));
	const maxX = Math.max(...pts.map((p) => p.cx));
	const minY = Math.min(...pts.map((p) => p.cy));
	const maxY = Math.max(...pts.map((p) => p.cy));

	return (
		<div className="relative w-[20vw]">
			<svg viewBox={`0 0 ${size_canvas_svg.width} ${size_canvas_svg.height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
				<line x1="0" y1="50" x2="70" y2="50" stroke="var(--color-primary)" />
				<line x1="0" y1="0" x2="0" y2="50" stroke="var(--color-primary)" />
				{pts.map((point, i) => (
					<circle
						key={i}
						cx={point.cx}
						cy={point.cy}
						r="1.8"
						fill={point.color}
						opacity={point.color === 'var(--color-secondary)' ? 1 : 0.7}
						className="animate-pulse"
						style={{ animationDelay: `${i * 10}ms` }}
					/>
				))}
				<line x1={minX} y1={maxY} x2={maxX} y2={minY} stroke="red" strokeWidth="2.5" strokeDasharray="4 2" />
			</svg>
		</div>
	);
}
