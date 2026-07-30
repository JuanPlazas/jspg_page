export default function AboutBio({ paragraphs }: { paragraphs: string[] }) {
	return (
		<div className="glass rounded-2xl p-8 space-y-4 text-text-muted leading-relaxed h-full">
			{paragraphs.map((text, i) => (
				<p key={i}>{text}</p>
			))}
		</div>
	);
}
