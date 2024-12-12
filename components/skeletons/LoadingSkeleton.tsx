export const LoadingSkeleton = () => {
	return (
		<div className="w-full animate-pulse">
			<div className="h-8 mb-4 bg-gray-200 rounded-md"></div>
			<div className="space-y-3">
				<div className="w-3/4 h-4 bg-gray-200 rounded"></div>
				<div className="h-4 bg-gray-200 rounded"></div>
				<div className="w-5/6 h-4 bg-gray-200 rounded"></div>
			</div>
		</div>
	);
};
