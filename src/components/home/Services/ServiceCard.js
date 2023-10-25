import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../styles/Services.module.css";

function ServiceCard({ src, title, description }) {
	return (
		<div
			className={`w-[327px] h-[394px] bg-white ${styles.card} rounded-md overflow-hidden border-2 border-slate-300 transition-transform hover:scale-105`}
		>
			<div className="relative">
				<div className="w-[327px] h-[287px] relative">
					<Image src={src} objectFit="cover" layout="fill" alt="service-img" />
				</div>
				<div
					className={`absolute bottom-[-90px] inset-x-0 transform -translate-y-1/2 ${styles.exploreBtn}`}
				>
					<button className="text-white border-2 border-white flex items-center rounded-md gap-2 m-auto p-4">
						Explore More {<BsArrowRight />}
					</button>
				</div>
			</div>
			<div className="text-center p-4">
				<div className="text-textPrimary font-medium text-2xl mb-2">
					{title}
				</div>
				<div className="text-textSecondary font-medium text-base">
					{description}
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
