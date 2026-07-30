export interface Point {
	cx: number;
	cy: number;
	color: string;
}

function mulberry32(seed: number) {
	return function () {
		seed |= 0;
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export function generateHeroData(seed = 42): { points: Point[] } {
	const rng = mulberry32(seed);
	const n = 160;
	const slope = 0.52;
	const noise = 4.2;
	let color: string;
	const points: Point[] = [];

	for (let i = 0; i < n; i++) {
		const x = 5 + rng() * 60;
		const u = rng();
		const v = rng();
		const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
		let y = 45 - (slope * x + z * noise);

		if (rng() < 0.17) {
			y += rng() > 0.5 ? 10 : -10;
			color = 'var(--color-tertiary)';
		} else if (i > n * 0.6) {
			color = 'var(--color-secondary)';
		} else {
			color = 'var(--color-primary)';
		}

		y = Math.max(6, Math.min(44, y));
		points.push({ cx: Number(x.toFixed(4)), cy: Number(y.toFixed(4)), color });
	}

	return { points };
}
