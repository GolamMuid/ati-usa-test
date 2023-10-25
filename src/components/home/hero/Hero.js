"use client";

import React, { useState } from "react";
import TextSlider from "./TextSlider";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

function Hero() {
	const [counterOn, setCounterOn] = useState(false);

	return (
		<div className="container m-auto overflow-hidden">
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 2fr",
				}}
			>
				<div className="mr-8">
					<div className="text-textPrimary font-medium text-2xl mb-5">
						We Provide
					</div>
					<TextSlider />
				</div>

				<ScrollTrigger
					onEnter={() => setCounterOn(true)}
					onExit={() => setCounterOn(false)}
				>
					<div className="pl-8 flex items-center gap-8 border-l-2 border-textLight">
						<div className="text-blue font-bold text-9xl"> 25 </div>
						<div className="flex flex-col text-center text-textSecondary text-2xl">
							<div> Years of Business </div>
							<div> Excellence </div>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<div className="text-center">
								<div className="text-textSecondary p-4 border-b-2 border-primary font-medium text-xl">
									{counterOn ? (
										<CountUp start={0} end={2000} duration={2} delay={0} />
									) : (
										<div> 0 </div>
									)}
								</div>
								<div className="text-textLight font-medium text-base p-2">
									Software <br /> Developed
								</div>
							</div>
							<div className="text-center">
								<div className="text-textSecondary p-4 border-b-2 border-primary font-medium text-xl">
									{counterOn ? (
										<CountUp start={0} end={100} duration={2} delay={0} />
									) : (
										<div> 0 </div>
									)}
								</div>
								<div className="text-textLight font-medium text-base p-2">
									Happy <br /> Clients
								</div>
							</div>
							<div className="text-center">
								<div className="text-textSecondary p-4 border-b-2 border-primary font-medium text-xl">
									{counterOn ? (
										<CountUp start={0} end={12} duration={2} delay={0} />
									) : (
										<div> 0 </div>
									)}
								</div>
								<div className="text-textLight font-medium text-base p-2">
									Awards <br /> Won
								</div>
							</div>
							<div className="text-center">
								<div className="text-textSecondary p-4 border-b-2 border-primary font-medium text-xl">
									{counterOn ? (
										<CountUp start={0} end={80} duration={2} delay={0} />
									) : (
										<div> 0 </div>
									)}
								</div>
								<div className="text-textLight font-medium text-base p-2">
									Employees
								</div>
							</div>
						</div>
					</div>
				</ScrollTrigger>
			</div>
		</div>
	);
}

export default Hero;
