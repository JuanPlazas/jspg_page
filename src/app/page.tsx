import Navbar from '@/components/Navbar';
import PageClient from '@/components/PageClient';

export default function Home() {
	return (
		<div className="flex flex-col flex-1">
			<Navbar />

			<PageClient />
		</div>
	);
}
