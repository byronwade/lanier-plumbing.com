export function LoadingSkeleton() {
	return (
		<div className="container max-w-4xl px-4 py-8 mx-auto">
			<div className="w-2/3 h-8 mb-4 bg-gray-200 rounded animate-pulse" />
			<div className="w-full h-4 mb-6 bg-gray-200 rounded animate-pulse" />
			<div className="space-y-4">
				<div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
				<div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
				<div className="w-4/6 h-4 bg-gray-200 rounded animate-pulse" />
			</div>
		</div>
	);
}
