"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

function TextSlider() {
	return (
		<div className="mySwiper h-[120px] overflow-hidden max-w-[340px]">
			<Swiper
				direction={"vertical"}
				pagination={{
					clickable: true,
				}}
				className="h-[120px] text-left text-primary font-medium"
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				<SwiperSlide>
					<div className="text-left text-5xl">
						Software <br /> Development
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="text-left text-5xl">
						Web <br /> Development
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="text-left text-5xl">
						Mobile <br /> Application
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="text-left text-5xl">
						ERP <br /> Solution
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default TextSlider;
