import Services from "@/components/home/Services/Services";
import Carousel from "@/components/home/carousel/Carousel";
import Clients from "@/components/home/clients/Clients";
import Hero from "@/components/home/hero/Hero";
import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<Carousel />
			<Hero />
			<Services />
			<Clients />
		</main>
	);
}
