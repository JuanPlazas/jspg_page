import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
	return (
		<div className="flex flex-col flex-1">
			<Navbar />

			<Hero />

			<About />

			<Projects />

			<Contact />
		</div>
	);
}
