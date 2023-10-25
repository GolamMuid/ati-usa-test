import Image from "next/image";
import React from "react";

function Clients() {
	return (
		<div className="container m-auto mb-10">
			<h1 className="text-center font-semibold text-6xl text-textPrimary uppercase mb-20">
				We are trusted by
			</h1>
			<marquee scrollamount="12" className="bg-[#ffffff99] shadow-lg py-4">
				<div className="flex gap-4">
					<Image
						// className="first-slider"
						src="/images/clients/BangladesArmy.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/BangladeshDiabeticSomity.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/BangladesPolice.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/DAE.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/happy_hospital.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/HEQEP.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/KYAMCHLogo.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/micro_fibre.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/NCC.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/Pcl_Plasitic.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/RAJUK.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/undp-logo_1-150x150.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
					<Image
						// className="first-slider"
						src="/images/clients/unicef-logo.png"
						width={150}
						height={150}
						alt="slide-img"
					/>
				</div>
			</marquee>
		</div>
	);
}

export default Clients;
