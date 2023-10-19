"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { EffectCards } from "swiper/modules";

export default function Home() {
	const [swiper, setSwiper] = useState(null);
	const [swiper2, setSwiper2] = useState(null);
	const [swiper3, setSwiper3] = useState(null);
	const [swiper4, setSwiper4] = useState(null);

	const goToPreviousSlide = () => {
		if (swiper) {
			swiper.slidePrev();
			swiper2.slidePrev();
			swiper3.slidePrev();
			swiper4.slidePrev();
		}
	};

	const goToNextSlide = () => {
		if (swiper) {
			swiper.slideNext();
			swiper2.slideNext();
			swiper3.slideNext();
			swiper4.slideNext();
		}
	};

	return (
		<div className="relative container m-auto overflow-hidden">
			<div className="relative h-fit overflow-hidden">
				<Swiper
					// navigation={true}
					// modules={[Navigation]}
					cssMode={true}
					className="mySwiper"
					onSwiper={(swiper) => setSwiper(swiper)}
				>
					<SwiperSlide>
						<Image
							className="first-slider"
							src="/Screenshot_1.png"
							width={100}
							height={100}
							sizes="100vw"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							className="first-slider"
							src="/Screenshot_2.png"
							width={100}
							height={100}
							sizes="100vw"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							className="first-slider"
							src="/Screenshot_3.png"
							width={100}
							height={100}
							sizes="100vw"
						/>
					</SwiperSlide>
				</Swiper>

				{/* 2nd Slider  */}

				<div className="absolute z-10 w-40 h-40 overflow-hidden top-[40%] left-24">
					<Swiper
						effect={"cards"}
						grabCursor={true}
						modules={[EffectCards]}
						className="mySwiper"
						onSwiper={(swiper3) => setSwiper3(swiper3)}
					>
						<SwiperSlide>
							<Image src="/ss1.png" width={144} height={144} />
						</SwiperSlide>
						<SwiperSlide>
							<Image src="/ss2.png" width={144} height={144} />
						</SwiperSlide>
						<SwiperSlide>
							<Image src="/ss3.png" width={144} height={144} />
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="absolute z-10 w-[50%] h-36 overflow-hidden top-[50%] right-24 bg-[#00000011]">
					<Swiper
						direction={"vertical"}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper text-white"
						cssMode={true}
						onSwiper={(swiper4) => setSwiper4(swiper4)}
						// className="bg-transparent"
					>
						<SwiperSlide className="">
							<div className="text-base p-2 w-fit text-left">
								Clark learns about the source of his abilities and his real home
								when he enters a Kryptonian ship in the Artic. However, an old
								enemy follows him to Earth in search of a codex and brings
								destruction.
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-base p-2 w-fit text-left">
								Bruce Wayne and Diana Prince try to bring the metahumans of
								Earth together after the death of Clark Kent. Meanwhile,
								Darkseid sends Steppenwolf to Earth with a vast army to
								subjugate humans.
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-base p-2 w-fit text-left">
								Bruce Wayne, a billionaire, believes that Superman is a threat
								to humanity after his battle in Metropolis. Thus, he decides to
								adopt his mantle of Batman and defeat him once and for all.
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="absolute z-10 overflow-hidden top-[40%] text-3xl left-1/2 transform -translate-x-1/2 bg-[#00000011] text-white">
					DC COMICS
				</div>

				<div className="absolute z-20 bottom-0 h-16 right-4 w-fit">
					<Swiper
						direction={"vertical"}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper"
						onSwiper={(swiper2) => setSwiper2(swiper2)}
						// className="bg-transparent"
					>
						<SwiperSlide className="">
							<div className="text-3xl p-4 w-fit"> MAN OF STEEL </div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-3xl p-4 w-fit">JUSTICE LEAGUE</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-3xl p-4 w-fit"> BATMAN v SUPERMAN </div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			<div className="mt-4 absolute bottom-0 z-10 bg-white left-[40%] w-full">
				<button
					onClick={goToPreviousSlide}
					className="bg-blue-500 text-white px-4 py-2 m-2"
				>
					Prev
				</button>
				<button
					onClick={goToNextSlide}
					className="bg-blue-500 text-white px-4 py-2 m-2"
				>
					Next
				</button>
			</div>
		</div>
	);
}
