'use client';

import { useI18nContext } from '@/app/providers';
import Timeline from './Timeline';
import AboutBio from './AboutBio';

export default function About() {
	const { phrases } = useI18nContext();
	const journey = phrases.about.journey;
	const paragraphs = [phrases.about.paragraph1, phrases.about.paragraph2, phrases.about.paragraph3];

	return (
		<section id="about" className="border-t border-border pb-5 pt-24">
			<div className="px-4 w-full">
				<h2 className="text-3xl font-bold text-text-base mb-8 text-center lg:text-left">{phrases.about.title}</h2>
				<div className="flex flex-row max-lg:flex-col gap-6">
					<div className="w-1/2 max-lg:w-full">
						<AboutBio paragraphs={paragraphs} />
					</div>
					{journey && (
						<div className="h-full w-1/2 max-lg:w-full">
							<h3 className="text-lg font-semibold text-primary mb-6">{journey.title}</h3>
							<Timeline steps={journey.steps} />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
