import { glowFilter, size_canvas_svg } from './HeroSvgConstants';

export default function NeuralArchitecture() {
	const input_layer = 3;
	const hidden_layer = 5;
	const output_layer = 4;
	const x_offset_input = 5;
	const x_offset_hidden = 32;
	const x_offset_output = 65;

	return (
		<div className="justify-around items-center relative w-[18vw]" aria-hidden="true">
			<svg viewBox={`0 0 ${size_canvas_svg.width} ${size_canvas_svg.height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet" focusable="false">
				{glowFilter('glow-neural')}
				{Array.from({ length: input_layer }, (_, i) => (
					<circle key={`i-${i}`} cx={x_offset_input} cy={i * (size_canvas_svg.height / input_layer) + size_canvas_svg.height / input_layer / 2} r="3" fill="var(--color-primary)" filter="url(#glow-neural)" />
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
						filter="url(#glow-neural)"
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
}
