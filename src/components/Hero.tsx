'use client';

import { useI18nContext } from '@/app/providers';
import { generateHeroData } from '@/lib/data';
import { useMemo } from 'react';

const size_canvas_svg = { width: 70, height: 50 };
const glow_svg = (
	<defs>
		<filter id="glow" x="-100%" y="-100%" width="500%" height="500%">
			{/* Blur 1 - más suave y amplio */}
			<feGaussianBlur stdDeviation="2.5" result="blur1" />

			{/* Blur 2 - más fuerte */}
			<feGaussianBlur stdDeviation="4.5" result="blur2" />

			{/* Blur 3 - para intensidad extra */}
			<feGaussianBlur stdDeviation="6" result="blur3" />

			<feMerge>
				<feMergeNode in="blur3" /> {/* El más grande primero */}
				<feMergeNode in="blur2" />
				<feMergeNode in="blur1" />
				<feMergeNode in="SourceGraphic" /> {/* El círculo original encima */}
			</feMerge>
		</filter>
	</defs>
);

export default function Hero() {
	const { phrases } = useI18nContext();
	const data = useMemo(() => generateHeroData(), []);

	const buildIntro = () => {
		return (
			<div
				className="flex 
        flex-col 
        items-center 
        justify-center 
        w-full 
        max-lg:p-2
      "
			>
				<h1
					className="text-4xl 
          font-bold 
          text-primary 
          [text-shadow:0_0_8px_var(--color-primary)] 
          max-sm:text-sm 
          max-lg:text-2xl"
				>
					const perfil = {'{'} <br />
					<span className="ml-15 max-lg:ml-5 text-secondary [text-shadow:0_0_8px_var(--color-secondary)]">name:</span>
					<span className="ml-15 max-lg:ml-5 text-tertiary [text-shadow:0_0_8px_var(--color-tertiary)]">&quot;Juan Sebastian Plazas Gallo&quot;</span> , <br />
					<span className="ml-15 max-lg:ml-5 text-secondary [text-shadow:0_0_8px_var(--color-secondary)]">rol:</span>
					<span className="ml-15 max-lg:ml-5 text-tertiary [text-shadow:0_0_8px_var(--color-tertiary)]">&quot;Backend & Cloud Developer&quot;</span> <br />
					{'}'}
				</h1>
				<div className="flex items-center justify-center gap-4 my-2 pointer-events-auto max-sm:flex-col">
					<a
						href="/docs/CV_Juan_Plazas.pdf"
						download="CV_Juan_Plazas.pdf"
						className="bg-primary 
            rounded-full 
            px-8 
            py-3 
            text-sm 
            font-bold 
            text-white 
            transition-all 
            animate-pulse
            hover:[box-shadow:var(--glow-primary-color)]"
					>
						{phrases.hero.cta_cv}
					</a>
					<a
						href="#contact"
						className="rounded-full 
            glass 
            px-8 
            py-3 
            text-sm 
            font-medium 
            transition-all 
            text-text-base 
            hover:[box-shadow:var(--glow-primary-color)] 
            hover:text-primary"
					>
						{phrases.hero.cta_contact}
					</a>
				</div>
			</div>
		);
	};

	const buildTerminal = () => {
		return (
			<div
				className="flex 
        flex-col 
        items-start 
        justify-start 
        glass 
        rounded-2xl 
        my-5
        p-5 
        w-full 
        glow-primary 
        border-border"
			>
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
							className="ml-4 
                text-primary 
                underline 
                hover:[box-shadow:var(--glow-primary-color)] 
                transition-all 
                duration-300
                px-[0.3rem] 
                py-[0.3rem]
                rounded-md
                underline-offset-4"
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
	};

	const buildDeco = () => {
		return (
			<div>
				{/* Orbs de luz de fondo */}
				<div
					className="hidden 
            lg:flex 
            absolute 
            top-0
            left-1/10 
            w-225 
            h-225 
            rounded-full 
            opacity-[0.2] 
            bg-[radial-gradient(circle,var(--color-primary),transparent_70%)]
            pointer-events-none"
				/>
				<div
					className="hidden 
            lg:flex 
            absolute 
            bottom-1/10 
            right-1/10 
            w-175 
            h-175 
            rounded-full 
            opacity-[0.1] 
            bg-[radial-gradient(circle,var(--color-secondary),transparent_70%)]
            pointer-events-none"
				/>
			</div>
		);
	};

	const buildGraphics = () => {
		return (
			<div
				className="flex
        items-center
        w-full
        h-full
        justify-center
        px-5 
        opacity-30
        max-lg:hidden"
			>
				{buildScatterPlot()}
				{/* conection 1: Scatter Plot (Data Distribution) to Neural Architecture */}
				<div
					className="justify-center 
          py-1 
          w-[5vw] 
          relative 
        "
				>
					<svg className="flex h-full w-full" viewBox="0 0 70 50" fill="none" preserveAspectRatio="xMidYMid meet">
						{glow_svg}
						<path d="M0 25 L70 25" stroke="var(--color-primary)" strokeWidth="3" />
						<path d="M50 10 L50 40 L70 25 Z" fill="var(--color-primary)" filter="url(#glow)" />
					</svg>
				</div>
				{buildNeuralArchitecture()}
				{/* conection 2: Line Charts (Metrics) to Neural Architecture */}
				<div
					className="justify-center 
          py-1 
          w-[5vw] 
          relative 
         
        "
				>
					<svg className="flex h-full w-full" viewBox="0 0 70 50" fill="none" preserveAspectRatio="xMidYMid meet">
						{glow_svg}
						<path d="M0 25 L70 25" stroke="var(--color-secondary)" strokeWidth="3" />
						<path d="M50 10 L50 40 L70 25 Z" fill="var(--color-secondary)" filter="url(#glow)" />
					</svg>
				</div>
				{buildLineChart()}
			</div>
		);
	};

	const buildScatterPlot = () => {
		const pts = data.points;
		const minX = Math.min(...pts.map((p) => p.cx));
		const maxX = Math.max(...pts.map((p) => p.cx));
		const minY = Math.min(...pts.map((p) => p.cy));
		const maxY = Math.max(...pts.map((p) => p.cy));

		return (
			<div className="relative w-[20vw]">
				<svg viewBox={`0 0 ${size_canvas_svg.width} ${size_canvas_svg.height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
					<line x1="0" y1="50" x2="70" y2="50" stroke="var(--color-primary)" />
					<line x1="0" y1="0" x2="0" y2="50" stroke="var(--color-primary)" />
					{pts.map((point, i) => (
						<circle
							key={i}
							cx={point.cx}
							cy={point.cy}
							r="1.8"
							fill={point.color}
							opacity={point.color === 'var(--color-secondary)' ? 1 : 0.7}
							className="animate-pulse"
							style={{ animationDelay: `${i * 10}ms` }}
						/>
					))}
					<line x1={minX} y1={maxY} x2={maxX} y2={minY} stroke="red" strokeWidth="2.5" strokeDasharray="4 2" />
				</svg>
			</div>
		);
	};

	const buildNeuralArchitecture = () => {
		const input_layer = 3;
		const hidden_layer = 5;
		const output_layer = 4;
		const x_offset_input = 5;
		const x_offset_hidden = 32;
		const x_offset_output = 65;

		return (
			<div
				className="justify-around 
        items-center
        relative 
        w-[18vw]"
			>
				<svg viewBox={`0 0 ${size_canvas_svg.width} ${size_canvas_svg.height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
					{glow_svg}
					{Array.from({ length: input_layer }, (_, i) => (
						<circle
							key={`i-${i}`}
							cx={x_offset_input}
							cy={i * (size_canvas_svg.height / input_layer) + size_canvas_svg.height / input_layer / 2}
							r="3"
							fill="var(--color-primary)"
							filter="url(#glow)"
						/>
					))}
					{Array.from({ length: hidden_layer }, (_, i) => (
						<circle
							key={`h-${i}`}
							cx={x_offset_hidden}
							cy={i * (size_canvas_svg.height / hidden_layer) + size_canvas_svg.height / hidden_layer / 2}
							r="4"
							fill="none"
							stroke="var(--color-secondary)"
							strokeWidth="1"
						/>
					))}
					{Array.from({ length: output_layer }, (_, i) => (
						<circle
							key={`o-${i}`}
							cx={x_offset_output}
							cy={i * (size_canvas_svg.height / output_layer) + size_canvas_svg.height / output_layer / 2}
							r="3"
							fill="var(--color-tertiary)"
							filter="url(#glow)"
						/>
					))}
					{Array.from({ length: input_layer }, (_, i) =>
						Array.from({ length: hidden_layer }, (_, j) => (
							<line
								key={`ci-${i}-${j}`}
								x1={x_offset_input + 1}
								y1={i * (size_canvas_svg.height / input_layer) + size_canvas_svg.height / input_layer / 2}
								x2={x_offset_hidden - 3}
								y2={j * (size_canvas_svg.height / hidden_layer) + size_canvas_svg.height / hidden_layer / 2}
								stroke="var(--color-primary)"
								strokeWidth="0.5"
							/>
						))
					)}
					{Array.from({ length: hidden_layer }, (_, i) =>
						Array.from({ length: output_layer }, (_, j) => (
							<line
								key={`co-${i}-${j}`}
								x1={x_offset_hidden + 3}
								y1={i * (size_canvas_svg.height / hidden_layer) + size_canvas_svg.height / hidden_layer / 2}
								x2={x_offset_output - 1}
								y2={j * (size_canvas_svg.height / output_layer) + size_canvas_svg.height / output_layer / 2}
								stroke="var(--color-tertiary)"
								strokeWidth="0.5"
							/>
						))
					)}
				</svg>
			</div>
		);
	};

	const buildLineChart = () => {
		return (
			<div className="relative w-[20vw]">
				<svg viewBox={`0 0 ${size_canvas_svg.width} ${size_canvas_svg.height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
					<line x1="0" y1="50" x2="70" y2="50" stroke="var(--color-tertiary)" />
					<line x1="0" y1="0" x2="0" y2="50" stroke="var(--color-tertiary)" />
					<path d="M0,0 Q10,40 35,40 T70,40" fill="none" stroke="var(--color-secondary)" strokeWidth="1" />
					<path d="M1,5 Q12,5 33,25 T70,45" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="2" />
				</svg>
				<div className="w-full flex justify-between mt-1 text-xs text-text-muted">
					<span style={{ color: 'var(--color-secondary)' }}>Acc: 0.98</span>
					<span style={{ color: 'var(--color-primary)' }}>Loss: 0.02</span>
				</div>
			</div>
		);
	};

	return (
		<section id="hero" className="flex flex-col items-center pt-20">
			{buildIntro()}

			<div className="flex flex-row justify-between w-full px-4 gap-1 max-lg:flex-col-reverse">
				{/** LEFT SIDE */}
				<div className="flex flex-col w-1/2 max-lg:w-full">{buildTerminal()}</div>
				{buildDeco()}

				{/** RIGHT SIDE */}
				<div className="flex flex-col w-1/2 max-lg:w-full">
					{buildGraphics()}
					<div className="mx-auto max-w-4xl my-6">
						<div className="glass rounded-2xl p-16 flex items-center justify-center text-text-muted text-center">{phrases.hero.vision.video_placeholder}</div>
						<div className="flex items-center justify-between mt-3">
							<span className="text-xs text-text-muted font-mono">{phrases.hero.vision.tech_stack}</span>
							<span className="text-xs text-secondary font-mono">{phrases.hero.vision.status}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
