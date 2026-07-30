'use client';

import { useI18nContext } from '@/app/providers';

export default function HeroVideo() {
	const { phrases } = useI18nContext();

	return (
		<div className="mx-auto max-w-4xl my-6">
			<div className="glass rounded-2xl p-16 flex items-center justify-center text-text-muted text-center">{phrases.hero.vision.video_placeholder}</div>
			<div className="flex items-center justify-between mt-3">
				<span className="text-xs text-text-muted font-mono">{phrases.hero.vision.tech_stack}</span>
				<span className="text-xs text-secondary font-mono">{phrases.hero.vision.status}</span>
			</div>
		</div>
	);
}
