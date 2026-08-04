'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4 text-center">
			<h1 className="text-4xl font-bold text-primary">Algo salió mal</h1>
			<p className="text-text-muted max-w-md">{error.message || 'Ocurrió un error inesperado.'}</p>
			<button onClick={reset} className="glass rounded-full px-6 py-3 text-sm font-bold cursor-pointer hover:[box-shadow:var(--glow-primary-color)]">
				Intentar de nuevo
			</button>
		</div>
	);
}
