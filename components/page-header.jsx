"use client";

import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";

export default function PageHeader({ title, subtitle }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="hidden border-b border-red-200 shadow-sm sm:block">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4">
					<div className="flex items-center">
						<div className="hidden w-1 h-8 mr-4 bg-red-600 rounded-full sm:block"></div>
						<div>
							<h1 className="text-lg font-semibold text-gray-900 sm:text-xl">{title}</h1>
							{subtitle && <p className="hidden mt-1 text-sm text-gray-500 sm:block">{subtitle}</p>}
						</div>
					</div>
					<div className="items-center hidden text-sm text-gray-500 sm:flex">
						<span>Home</span>
						<ChevronRight className="w-4 h-4 mx-2" />
						<span>{title}</span>
					</div>
					<button className="p-2 text-gray-500 rounded-md sm:hidden hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
							Home
						</a>
						<a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 bg-gray-100 rounded-md">
							{title}
						</a>
						{subtitle && <p className="px-3 py-2 text-sm text-gray-500">{subtitle}</p>}
					</div>
				</div>
			)}
		</div>
	);
}
