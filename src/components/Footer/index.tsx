export default function Footer({ phrases }: { phrases: { footer: { copyright: string; built_with: string } } }) {

	return (
		<footer className="border-t border-border py-8 px-4">
			<div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
				<span>
					© {new Date().getFullYear()} {phrases.footer.copyright}
				</span>
				<span>{phrases.footer.built_with}</span>
			</div>
		</footer>
	);
}
