'use client';

import { useState } from 'react';
import { useThemeContext, useI18nContext } from '@/app/providers';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme, toggleTheme } = useThemeContext();
	const { phrases, lang, toggleLanguage } = useI18nContext();

	const NAV_ITEMS = Object.keys(phrases.nav) as Array<keyof typeof phrases.nav>;
	const scrollTo = (id: string) => {
		setMenuOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 glass w-full">
			<div className="lg:mx-auto flex h-16 lg:max-w-6xl items-center justify-between px-4 relative z-50">
				<button onClick={() => scrollTo('hero')} className="font-bold text-primary text-lg tracking-tight cursor-pointer">
					{'<JP/>'}
				</button>

				{/* Desktop nav */}
				<nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-text-muted">
					{NAV_ITEMS.map((id) => (
						<button
							key={id}
							onClick={() => scrollTo(id)}
							className="px-2 
                py-1 
                transition-all 
                duration-200 
                cursor-pointer 
                hover:[box-shadow:var(--glow-primary-color)]
                hover:text-primary
                hover:rounded-[10px]"
						>
							{phrases.nav[id]}
						</button>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<button onClick={toggleLanguage} className="w-9 h-9 text-xs transition-all duration-200 rounded-full glass cursor-pointer hover:[box-shadow:var(--glow-primary-color)]">
						{lang === 'es' ? 'EN' : 'ES'}
					</button>
					<button onClick={toggleTheme} className="w-9 h-9 rounded-full glass transition-all duration-200 cursor-pointer hover:[box-shadow:var(--glow-primary-color)]">
						{theme === 'dark' ? '☀️' : '🌙'}
					</button>

					{/* Hamburger */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="
              lg:hidden 
              w-9 
              h-9 
              rounded-full 
              glass 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              transition-all 
              duration-200 
              hover:[box-shadow:var(--glow-primary-color)]"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
							{menuOpen ? <path key="close" d="M6 18L18 6M6 6l12 12" /> : <path key="open" d="M4 6h16M4 12h16M4 18h16" />}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu overlay */}
			<div
				className={`fixed 
        z-40 
        w-full
        h-screen
        flex
        transition-opacity
        duration-300 
        lg:hidden 
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
			>
				<div className="absolute w-full h-full bg-bg-base backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
				<nav
					className={`relative 
            flex 
            flex-col
            items-center 
            justify-center 
            gap-20 
            h-full 
            w-full 
            transition-all 
            duration-300`}
				>
					{NAV_ITEMS.map((id) => (
						<button key={id} onClick={() => scrollTo(id)} className="text-xl font-medium text-text-muted hover:text-primary transition-colors duration-200 cursor-pointer">
							{phrases.nav[id]}
						</button>
					))}
				</nav>
			</div>
		</header>
	);
}
