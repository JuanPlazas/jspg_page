import type { Metadata } from 'next';
import Script from 'next/script';
import { cookies } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const SITE_URL = 'https://juanplazas.vercel.app';

export const metadata: Metadata = {
	title: 'Juan Sebastian Plazas Gallo | AI Engineer | Fullstack Developer',
	description: 'Portafolio profesional de Juan Plazas. Ingeniero de Sistemas, Maestrando en Inteligencia Artificial y Ciencia de Datos.',
	metadataBase: new URL(SITE_URL),
	openGraph: {
		title: 'Juan Sebastian Plazas Gallo | AI Engineer | Fullstack Developer',
		description:
			'Ingeniero de Sistemas y Maestrando en Inteligencia Artificial y Ciencia de Datos, experiencia sólida en producción (cloud, DevOps, backend) con conocimientos avanzados en Machine Learning, Deep Learning y Visión Computacional.',
		url: SITE_URL,
		siteName: 'Juan Sebastian Plazas Gallo',
		locale: 'es_CO',
		type: 'website',
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const themeCookie = cookieStore.get('theme')?.value;
	const initialTheme = themeCookie === 'light' ? 'light' : 'dark';
	const langCookie = cookieStore.get('lang')?.value;
	const initialLang = langCookie === 'en' ? 'en' : 'es';

	return (
		<html lang={initialLang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${initialTheme}`} suppressHydrationWarning>
			<head>
				<meta name="apple-mobile-web-app-title" content="JSPG_PAGE" />
			</head>
			<body className="min-h-full flex flex-col transition-colors duration-300">
				<Script
					id="json-ld"
					type="application/ld+json"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Juan Sebastian Plazas Gallo',
							jobTitle: 'AI Engineer & Fullstack Developer',
							url: SITE_URL,
							knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Fullstack Development'],
							sameAs: ['https://github.com/JuanPlazas', 'https://linkedin.com/in/juan-sebastian-plazas-gallo'],
						}),
					}}
				/>
				<Providers initialTheme={initialTheme} initialLang={initialLang}>
					{children}
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
