export default function HeroVideo({ vision }: { vision: { video_placeholder: string; tech_stack: string; status: string } }) {
	return (
		<div className="mx-auto max-w-4xl my-6">
			<div className="glass rounded-2xl p-16 flex items-center justify-center text-text-muted text-center">{vision.video_placeholder}</div>
			<div className="flex items-center justify-between mt-3">
				<span className="text-xs text-text-muted font-mono">{vision.tech_stack}</span>
				<span className="text-xs text-secondary font-mono">{vision.status}</span>
			</div>
		</div>
	);
}
