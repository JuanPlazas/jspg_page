import HeroIntro from './HeroIntro';
import HeroTerminal from './HeroTerminal';
import HeroDeco from './HeroDeco';
import HeroGraphics from './HeroGraphics';
import HeroVideo from './HeroVideo';

export default function Hero() {
	return (
		<section id="hero" className="flex flex-col items-center pt-20">
			<HeroIntro />

			<div className="flex flex-row justify-between w-full px-4 gap-1 max-lg:flex-col-reverse">
				<div className="flex flex-col w-1/2 max-lg:w-full">
					<HeroTerminal />
				</div>
				<HeroDeco />
				<div className="flex flex-col w-1/2 max-lg:w-full">
					<HeroGraphics />
					<HeroVideo />
				</div>
			</div>
		</section>
	);
}
