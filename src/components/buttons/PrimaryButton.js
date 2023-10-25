import React from "react";

function PrimaryButton({ children }) {
	return (
		<button className="bg-primary text-white py-2 px-5 m-auto flex items-center gap-2 rounded-md hover:bg-hoverPrimary transition-colors duration-300">
			{children}
		</button>
	);
}

export default PrimaryButton;
