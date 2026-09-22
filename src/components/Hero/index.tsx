import HeroIntro from './HeroIntro';
import HeroTerminal from './HeroTerminal';
import HeroDeco from './HeroDeco';
import HeroGraphics from './HeroGraphics';
import HeroVideo from './HeroVideo';
import type { Phrases } from '@/i18n/types';

export default function Hero({ phrases }: { phrases: Phrases }) {
	return (
		<section id="hero" className="relative flex flex-col items-center pt-20 overflow-hidden">
			<div className="relative w-full">
				<HeroGraphics />
				<div className="relative z-10">
					<HeroIntro hero={phrases.hero} />
				</div>
			</div>

			<div className="flex flex-row items-stretch justify-between w-full px-4 lg:gap-9 gap-1 max-lg:flex-col-reverse">
				<div className="flex flex-col w-[70%] max-xl:w-full">
					<HeroTerminal hero={phrases.hero} />
				</div>
				<HeroDeco />
				<div className="flex flex-col w-[30%] max-xl:w-full">
					<HeroVideo vision={phrases.hero.vision} />
				</div>
			</div>
		</section>
	);
}
