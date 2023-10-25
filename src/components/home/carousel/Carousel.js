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

export default function Carousel() {
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
		<div className="relative container m-auto overflow-hidden mb-8">
			<div className="relative overflow-hidden">
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
							src="/images/carousel/04.png"
							width={1920}
							height={1080}
							alt="slide-img"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							className="first-slider"
							src="/images/carousel/00.png"
							width={1920}
							height={1080}
							alt="slide-img"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							className="first-slider"
							src="/images/carousel/01.png"
							width={1920}
							height={1080}
							alt="slide-img"
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
							<Image
								src="/images/carousel/t04.png"
								width={200}
								height={240}
								alt="slide-thumb"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/images/carousel/t00.png"
								width={220}
								height={260}
								alt="slide-thumb"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/images/carousel/t01.png"
								width={220}
								height={260}
								alt="slide-thumb"
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="absolute z-10 w-[50%] overflow-hidden top-[50%] right-24 bg-[#00000011]">
					<Swiper
						direction={"vertical"}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper text-white"
						// cssMode={true}
						onSwiper={(swiper4) => setSwiper4(swiper4)}
					>
						<SwiperSlide className="">
							<div className="text-base p-2 w-fit h-fit text-left">
								ATI MEDiTOP is a complete Hospital Information System which
								facilitates Management, Clinicians, Technologists, Nurses,
								technicians, Support Staffs & Patients of a Hospital. Segmented
								by modules related to the working of a hospital, ATI MEDiTOP
								performs day to day tasks efficiently and produces stunning
								management and statistical report that helps to run the business
								smoothly.
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-base p-2 w-fit h-fit text-left">
								ATI’s Laboratory information system (LIS) releases a new window
								for the laboratory in Robustness, Modality, Security, Cost
								Reduction, Administrative Conducts and billing solutions. An
								esteemed and highly experienced team of Clinical Pathology
								specialists and IT Engineers developed the Laboratory
								Information System (LIS) is the trusted source of pathology
								information used by hundreds of physicians and pathologist
								professionals every day.
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-base p-2 w-fit text-left">
								The Electronic Medical Record (EMR) contains longitudinal health
								information about individual patients. It includes a range of
								data in a comprehensive form. These are organized by medical
								history, including demographics, medication, allergies,
								immunization status, laboratory results, and radiology images.
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="absolute z-10 overflow-hidden top-[40%] text-3xl left-1/2 transform -translate-x-1/2 bg-[#00000011] text-white">
					ATI LIMITED
				</div>

				<div className="absolute z-20 bottom-0 h-12 w-[50%] right-0 text-center">
					<Swiper
						// direction={"vertical"}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper"
						onSwiper={(swiper2) => setSwiper2(swiper2)}
						// className="bg-transparent"
					>
						<SwiperSlide className="">
							<div className="text-xl p-4">
								ATI MEDITOP (Hospital Information System)
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-xl p-4">
								ATI LIS (Labratory Information System)
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="text-xl p-4">
								ATI EMR (Electronic Medical Record)
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			<div className="mt-4 absolute bottom-0 z-10 bg-white left-[40%] w-full">
				<button
					onClick={goToPreviousSlide}
					className="bg-primary text-white px-4 py-2"
				>
					Prev
				</button>
				<button
					onClick={goToNextSlide}
					className="bg-primary text-white px-4 py-2"
				>
					Next
				</button>
			</div>
		</div>
	);
}
