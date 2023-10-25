import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
	return (
		<div className="bg-servicesBg">
			<div className="container m-auto py-10">
				<h1 className="text-center font-semibold text-6xl text-textPrimary">
					Our Services
				</h1>
				<div className="flex flex-wrap justify-between py-32 px-16 gap-8">
					<ServiceCard
						src={"/images/ourServices/01.jpg"}
						title="ATI MEDITOP"
						description="Hospital Information System"
					/>

					<ServiceCard
						src={"/images/ourServices/02.jpg"}
						title="ATI EMR"
						description="Electronic Medical Record (EMR)"
					/>

					<ServiceCard
						src={"/images/ourServices/03.jpg"}
						title="ATI LIS"
						description="Labratory Information System (LIS)"
					/>

					<ServiceCard
						src={"/images/ourServices/04.jpg"}
						title="ATI PACS"
						description="Picture Archiving & Communication System"
					/>

					<ServiceCard
						src={"/images/ourServices/05.jpg"}
						title="ATI ERP"
						description="Enterprise Resource Planning"
					/>

					<ServiceCard
						src={"/images/ourServices/06.jpg"}
						title="ATI MBS"
						description="Mobile Billing & GPS Tracking"
					/>
				</div>
			</div>
		</div>
	);
}

export default Services;
