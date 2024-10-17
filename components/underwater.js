import React from "react";

const Underwater = () => {
	return (
		<div className="h-screen w-screen bg-gradient-to-b from-[#35597a] via-[#0C201F] to-black overflow-hidden p-4">
			<svg className="absolute w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 blur-[20px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 1000">
				<text x="20%" y="40%" textAnchor="middle" className="text-[13em] fill-[#7f8e7b] stroke-[#d3d7d2] stroke-[3px] sm:stroke-[4px] md:stroke-[5px] uppercase animate-strokeOffset" style={{ strokeLinejoin: "round", strokeDasharray: 50 }}>
					quality
				</text>
				<text x="20%" y="70%" textAnchor="middle" className="text-[13em] fill-[#7f8e7b] stroke-[#d3d7d2] stroke-[3px] sm:stroke-[4px] md:stroke-[5px] uppercase animate-strokeOffset" style={{ strokeLinejoin: "round", strokeDasharray: 50 }}>
					plumbing
				</text>
			</svg>
		</div>
	);
};

export default Underwater;
