'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
	return (
		<div className="flex flex-col flex-1">
			<Navbar />

			<Hero />
		</div>
	);
}
