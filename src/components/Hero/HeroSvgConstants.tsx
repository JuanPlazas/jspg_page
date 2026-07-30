export const size_canvas_svg = { width: 70, height: 50 };

export const glow_svg = (
	<defs>
		<filter id="glow" x="-100%" y="-100%" width="500%" height="500%">
			<feGaussianBlur stdDeviation="2.5" result="blur1" />
			<feGaussianBlur stdDeviation="4.5" result="blur2" />
			<feGaussianBlur stdDeviation="6" result="blur3" />
			<feMerge>
				<feMergeNode in="blur3" />
				<feMergeNode in="blur2" />
				<feMergeNode in="blur1" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
);
