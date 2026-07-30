'use client';

import { useThemeContext, useI18nContext } from './providers';

export default function Home() {
	const { theme, toggleTheme } = useThemeContext();
	const { phrases, lang, toggleLanguage } = useI18nContext();

	return (
		<div className="flex flex-col flex-1">
			{/* ===== NAVBAR ===== */}
			<header className="fixed top-0 left-0 right-0 z-50 glass">
				<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
					<span className="font-bold text-primary text-lg tracking-tight glow-primary">{'<JP />'}</span>
					<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
						<a href="#about" className="hover:text-primary transition-colors">
							{phrases.nav.about}
						</a>
						<a href="#contact" className="hover:text-primary transition-colors">
							{phrases.nav.contact}
						</a>
						<a href="#hero" className="hover:text-primary transition-colors">
							{phrases.nav.hero}
						</a>
						<a href="#projects" className="hover:text-primary transition-colors">
							{phrases.nav.projects}
						</a>
					</nav>
					<div className="flex items-center gap-4">
						<button onClick={toggleLanguage} className="w-9 h-9 rounded-full glass text-xs font-bold uppercase tracking-wider text-text-muted hover:text-primary transition-colors">
							{lang === 'es' ? 'EN' : 'ES'}
						</button>
						<button onClick={toggleTheme} className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-muted hover:text-primary transition-colors">
							{theme === 'dark' ? '☀️' : '🌙'}
						</button>
					</div>
				</div>
			</header>

			{/* ===== HERO - SPLIT SCREEN ===== */}
			<section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
				{/* Línea divisoria */}
				<div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

				{/* Lado izquierdo: Terminal/Human */}
				<div className="flex-1 flex items-center justify-center p-8 lg:p-16">
					<div className="glass rounded-2xl p-8 w-full max-w-lg glow-primary">
						{/* Barra de título */}
						<div className="flex items-center gap-2 mb-6">
							<span className="w-3 h-3 rounded-full bg-red-500" />
							<span className="w-3 h-3 rounded-full bg-yellow-500" />
							<span className="w-3 h-3 rounded-full bg-green-500" />
							<span className="text-xs text-text-muted ml-2 font-mono">zsh — ~/profile</span>
						</div>
						{/* Terminal lines */}
						<div className="font-mono text-sm space-y-3">
							<p className="text-primary">
								$ <span className="text-text-base">whoami</span>
							</p>
							<p className="text-text-base ml-4">juan.plazas — AI Engineer</p>
							<p className="text-primary mt-4">
								$ <span className="text-text-base">cat system/profile.json</span>
							</p>
							<div className="ml-4 border-l-2 border-primary/30 pl-4 space-y-1">
								<p className="text-text-muted">{'{'}</p>
								<p className="ml-4">
									<span className="text-secondary">&quot;experience&quot;</span>: <span className="text-accent">&quot;+8 years&quot;</span>,
								</p>
								<p className="ml-4">
									<span className="text-secondary">&quot;stack&quot;</span>: <span className="text-accent">&quot;[&apos;Python&apos;,&apos;Node.js&apos;,&apos;AWS&apos;]&quot;</span>,
								</p>
								<p className="ml-4">
									<span className="text-secondary">&quot;role&quot;</span>: <span className="text-accent">&quot;Hybrid — Production + AI&quot;</span>
								</p>
								<p className="text-text-muted">{'}'}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Lado derecho: Neural Network */}
				<div className="flex-1 flex items-center justify-center p-8 lg:p-16">
					<div className="glass rounded-2xl p-8 w-full max-w-lg glow-secondary">
						<div className="flex items-center gap-2 mb-6">
							<span className="w-3 h-3 rounded-full bg-red-500" />
							<span className="w-3 h-3 rounded-full bg-yellow-500" />
							<span className="w-3 h-3 rounded-full bg-green-500" />
							<span className="text-xs text-text-muted ml-2 font-mono">neural — inference</span>
						</div>
						{/* Nodos simulados */}
						<div className="flex justify-center items-center gap-8 py-6">
							<div className="flex flex-col items-center gap-4">
								<div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center glow-primary">
									<span className="text-primary text-xs font-bold">I</span>
								</div>
								<div className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center">
									<span className="text-primary/60 text-xs font-bold">N</span>
								</div>
								<div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
									<span className="text-primary/30 text-xs font-bold">P</span>
								</div>
							</div>
							{/* Flechas de conexión */}
							<div className="flex flex-col gap-4">
								<div className="w-8 h-0.5 bg-primary/40" />
								<div className="w-8 h-0.5 bg-primary/40" />
								<div className="w-8 h-0.5 bg-primary/40" />
							</div>
							<div className="flex flex-col items-center gap-4">
								<div className="w-14 h-14 rounded-full border-2 border-secondary flex items-center justify-center glow-secondary">
									<span className="text-secondary text-sm font-bold">H</span>
								</div>
								<div className="w-14 h-14 rounded-full border-2 border-secondary/60 flex items-center justify-center">
									<span className="text-secondary/80 text-xs font-bold">H</span>
								</div>
								<div className="w-14 h-14 rounded-full border-2 border-secondary/30 flex items-center justify-center">
									<span className="text-secondary/50 text-xs font-bold">H</span>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="w-8 h-0.5 bg-secondary/40" />
								<div className="w-8 h-0.5 bg-secondary/40" />
								<div className="w-8 h-0.5 bg-secondary/40" />
							</div>
							<div className="flex flex-col items-center gap-4">
								<div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center">
									<span className="text-accent text-xs font-bold">O</span>
								</div>
								<div className="w-12 h-12 rounded-full border-2 border-accent/40 flex items-center justify-center">
									<span className="text-accent/60 text-xs font-bold">O</span>
								</div>
								<div className="w-12 h-12 rounded-full border-2 border-accent/20 flex items-center justify-center">
									<span className="text-accent/30 text-xs font-bold">O</span>
								</div>
							</div>
						</div>
						{/* Activación */}
						<div className="text-center mt-4">
							<span className="text-xs font-mono text-secondary animate-pulse">▸ inference complete: hybrid profile detected ◂</span>
						</div>
					</div>
				</div>
			</section>

			<footer className="border-t border-border py-8 px-4">
				<div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
					<span>
						© {new Date().getFullYear()} {phrases.footer.copyright}
					</span>
					<span>{phrases.footer.built_with}</span>
				</div>
			</footer>
		</div>
	);
}
