import HeroIntro from './HeroIntro';
import HeroTerminal from './HeroTerminal';
import HeroDeco from './HeroDeco';
import HeroGraphics from './HeroGraphics';
import HeroVideo from './HeroVideo';
import type { Phrases } from '@/i18n/types';

export default function Hero({ phrases }: { phrases: Phrases }) {
	return (
		<section id="hero" className="flex flex-col items-center pt-20">
			<HeroIntro hero={phrases.hero} />

			<div className="flex flex-row justify-between w-full px-4 gap-1 max-lg:flex-col-reverse">
				<div className="flex flex-col w-1/2 max-lg:w-full">
					<HeroTerminal hero={phrases.hero} />
				</div>
				<HeroDeco />
				<div className="flex flex-col w-1/2 max-lg:w-full">
					<HeroGraphics />
					<HeroVideo vision={phrases.hero.vision} />
				</div>
			</div>
		</section>
	);
}
