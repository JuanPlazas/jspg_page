import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Juan Sebastian Plazas Gallo | AI Engineer | Fullstack Developer',
	description: 'Portafolio profesional de Juan Plazas. Ingeniero de Sistemas, Maestrando en Inteligencia Artificial y Ciencia de Datos.',
	openGraph: {
		title: 'Juan Sebastian Plazas Gallo | AI Engineer | Fullstack Developer',
		description:
			'Ingeniero de Sistemas y Maestrando en Inteligencia Artificial y Ciencia de Datos, experiencia sólida en producción (cloud, DevOps, backend) con conocimientos avanzados en Machine Learning, Deep Learning y Visión Computacional.',
		locale: 'es_CO',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`} suppressHydrationWarning>
			<head>
				<meta name="apple-mobile-web-app-title" content="JSPG_PAGE" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col transition-colors duration-300">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
