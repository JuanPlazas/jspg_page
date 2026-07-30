'use client';

import { useI18nContext } from '@/app/providers';

export default function HeroTerminal() {
	const { phrases } = useI18nContext();

	return (
		<div className="flex flex-col items-start justify-start glass rounded-2xl my-5 p-5 w-full glow-primary border-border">
			<div className="flex items-center gap-2 mb-3">
				<span className="w-3 h-3 rounded-full bg-red-500" />
				<span className="w-3 h-3 rounded-full bg-yellow-500" />
				<span className="w-3 h-3 rounded-full bg-green-500" />
				<span className="text-xs ml-2 font-mono text-text-muted">zsh — ~/profile</span>
			</div>
			<div className="text-sm space-y-2 w-full">
				<p className="text-primary">
					$ <span className="text-text-base">whoami</span>
				</p>
				<p className="text-text-base">{phrases.hero.description}</p>
				<p className="text-primary">
					$ <span className="text-text-base">cat ~/hybrid-profile.json</span>
				</p>
				<div className="border-l-2 border-border space-y-1">
					<p className="text-text-muted">{'{'}</p>
					<p className="ml-4">
						<span className="text-secondary">&quot;stack&quot;</span>:{' '}
						<span className="text-tertiary">&quot;[Python, JavaScript, Node, TypeScript, Java, React, AWS, PostgreSQL, MySQL, MongoDB y Redis.]&quot;</span>,
					</p>
					<p className="ml-4">
						<span className="text-secondary">&quot;AI & Data&quot;</span>:<span className="text-tertiary">&quot;{phrases.hero.profile_ai}&quot;</span>,
					</p>
					<p className="ml-4">
						<span className="text-secondary">&quot;Cloud & DevOps&quot;</span>: <span className="text-tertiary">&quot;AWS (AWS Cloud Foundations), Docker, Terraform.&quot;</span>
					</p>
					<a
						className="ml-4 text-primary underline hover:[box-shadow:var(--glow-primary-color)] transition-all duration-300 px-[0.3rem] py-[0.3rem] rounded-md underline-offset-4"
						href="https://github.com/JuanPlazas#%EF%B8%8F-tecnolog%C3%ADas-favoritas"
					>
						&quot;{phrases.hero.profile_more}&quot;
					</a>
					<p className="text-text-muted">{'}'}</p>
				</div>
				<p className="text-primary">
					$ <span className="text-text-base">./deploy --prod</span>
				</p>
				<p className="text-secondary ml-4">✓ Build successful (42s)</p>
			</div>
		</div>
	);
}
