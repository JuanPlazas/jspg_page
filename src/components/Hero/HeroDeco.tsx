export default function HeroDeco() {
	return (
		<div>
			<div className="hidden lg:flex absolute top-0 left-1/10 w-225 h-225 rounded-full opacity-[0.2] bg-[radial-gradient(circle,var(--color-primary),transparent_70%)] pointer-events-none" />
			<div className="hidden lg:flex absolute bottom-1/10 right-1/10 w-175 h-175 rounded-full opacity-[0.1] bg-[radial-gradient(circle,var(--color-secondary),transparent_70%)] pointer-events-none" />
		</div>
	);
}
