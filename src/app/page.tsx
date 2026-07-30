'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<div className="flex flex-col flex-1">
			<Navbar />

			<Hero />

			<About />

			<Projects />
		</div>
	);
}
