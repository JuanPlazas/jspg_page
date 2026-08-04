export default function Contact({ phrases }: { phrases: { contact: { title: string; subtitle: string; description: string; email: string } } }) {

	return (
		<section id="contact" className="border-t border-border py-24 px-4">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-3xl font-bold text-text-base mb-4">{phrases.contact.title}</h2>
				<p className="text-text-muted mb-2">{phrases.contact.subtitle}</p>
				<p className="text-text-muted mb-8 max-w-lg mx-auto">{phrases.contact.description}</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<a href={`mailto:${phrases.contact.email}`} className="glass rounded-xl p-6 flex flex-col items-center justify-center hover:border-primary transition-all">
						<div className="w-8 mb-2">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
								<path d="M20.61 5.23l-8 6.28a1 1 0 0 1-1.24 0l-8-6.28A1 1 0 0 0 3 6v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-.39-.77z" fill="#2ca9bc" />
								<path
									d="M20 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm0-14H4a1 1 0 0 0-.62.22l8 6.29a1 1 0 0 0 1.24 0l8-6.29A1 1 0 0 0 20 5z"
									stroke="#000000"
									strokeWidth="2"
								/>
							</svg>
						</div>
						<p className="text-sm text-text-muted">{phrases.contact.email}</p>
					</a>
					<a
						href="https://linkedin.com/in/juan-sebastian-plazas-gallo"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit LinkedIn profile"
						className="glass rounded-xl p-6 flex flex-col items-center justify-center hover:border-secondary transition-all"
					>
						<div className="w-8 mb-2">
							<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient id="a" x1="80" y1="80" x2="432" y2="432" gradientUnits="userSpaceOnUse">
										<stop offset="0" stopColor="#2489be" />
										<stop offset="1" stopColor="#0575b3" />
									</linearGradient>
								</defs>
								<path
									d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
									fill="url(#a)"
								/>
							</svg>
						</div>
						<p className="text-sm text-text-muted">LinkedIn</p>
					</a>
					<a
						href="https://github.com/JuanPlazas"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit GitHub profile"
						className="glass rounded-xl p-6 flex flex-col items-center justify-center hover:border-accent transition-all"
					>
						<div className="w-8 mb-2">
							<svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#3E75C3">
								<path d="M24 0C10.746 0 0 10.787 0 24.097c0 10.644 6.876 19.675 16.414 22.862 1.2.221 1.638-.523 1.638-1.161 0-.572-.021-2.087-.033-4.097-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.783-2.664-3.524-2.664-3.524-2.18-1.495.164-1.465.164-1.465 2.408.17 3.675 2.483 3.675 2.483 2.142 3.682 5.617 2.619 6.985 2.001.218-1.557.839-2.618 1.525-3.221-5.33-.608-10.932-2.674-10.932-11.907 0-2.631.934-4.782 2.47-6.467-.248-.61-1.071-3.059.234-6.377 0 0 2.016-.648 6.6 2.469 1.916-.534 3.968-.8 6.009-.81 2.039.011 4.093.276 6.01.81 4.581-3.117 6.593-2.469 6.593-2.469 1.31 3.318.486 5.767.238 6.377 1.539 1.685 2.468 3.836 2.468 6.467 0 9.255-5.611 11.293-10.957 11.89.861.744 1.629 2.214 1.629 4.462 0 3.221-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.158C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0" />
							</svg>
						</div>
						<p className="text-sm text-text-muted">GitHub</p>
					</a>
				</div>
			</div>
		</section>
	);
}
