import Image from "next/image";
import React from "react";

function ServiceCard({ src, title, description }) {
	return (
		<div className="w-[327px] h-[394px] bg-white rounded-md overflow-hidden border-2 border-slate-300 ease-in-out hover:scale-110">
			<div className="w-[327px] h-[287px] relative">
				<Image src={src} objectFit="cover" layout="fill" alt="service-img" />
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
