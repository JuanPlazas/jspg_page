import { size_canvas_svg } from './HeroSvgConstants';

export default function LineChart() {
	return (
		<div className="relative w-[20vw]">
			<svg viewBox={`0 0 ${size_canvas_svg.width} ${size_canvas_svg.height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
				<line x1="0" y1="50" x2="70" y2="50" stroke="var(--color-tertiary)" />
				<line x1="0" y1="0" x2="0" y2="50" stroke="var(--color-tertiary)" />
				<path d="M0,0 Q10,40 35,40 T70,40" fill="none" stroke="var(--color-secondary)" strokeWidth="1" />
				<path d="M1,5 Q12,5 33,25 T70,45" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="2" />
			</svg>
			<div className="w-full flex justify-between mt-1 text-xs text-text-muted">
				<span style={{ color: 'var(--color-secondary)' }}>Acc: 0.98</span>
				<span style={{ color: 'var(--color-primary)' }}>Loss: 0.02</span>
			</div>
		</div>
	);
}
