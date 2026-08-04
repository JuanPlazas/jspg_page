export default function HeroIntro({ hero }: { hero: { cta_cv: string; cta_contact: string } }) {
	return (
		<div className="flex flex-col items-center justify-center w-full max-lg:p-2">
			<h1 className="text-4xl font-bold text-primary [text-shadow:0_0_8px_var(--color-primary)] max-sm:text-sm max-lg:text-2xl">
				const perfil = {'{'} <br />
				<span className="ml-15 max-lg:ml-5 text-secondary [text-shadow:0_0_8px_var(--color-secondary)]">name:</span>
				<span className="ml-15 max-lg:ml-5 text-tertiary [text-shadow:0_0_8px_var(--color-tertiary)]">&quot;Juan Sebastian Plazas Gallo&quot;</span> , <br />
				<span className="ml-15 max-lg:ml-5 text-secondary [text-shadow:0_0_8px_var(--color-secondary)]">rol:</span>
				<span className="ml-15 max-lg:ml-5 text-tertiary [text-shadow:0_0_8px_var(--color-tertiary)]">&quot;Backend & Cloud Developer&quot;</span> <br />
				{'}'}
			</h1>
			<div className="flex items-center justify-center gap-4 my-2 pointer-events-auto max-sm:flex-col">
				<a
					href={process.env.CV_URL || '/CV_Juan_Plazas.pdf'}
					download="CV_Juan_Plazas.pdf"
					className="bg-primary rounded-full px-8 py-3 text-sm font-bold text-white transition-all animate-pulse hover:[box-shadow:var(--glow-primary-color)]"
				>
					{hero.cta_cv}
				</a>
				<a href="#contact" className="rounded-full glass px-8 py-3 text-sm font-medium transition-all text-text-base hover:[box-shadow:var(--glow-primary-color)] hover:text-primary">
					{hero.cta_contact}
				</a>
			</div>
		</div>
	);
}
