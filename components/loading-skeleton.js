export default function LoadingSkeleton() {
	return (
		<div className="w-full animate-pulse">
			<div className="h-48 bg-gray-200 rounded-lg mb-8" />
			<div className="space-y-4">
				{[...Array(3)].map((_, i) => (
					<div key={i} className="space-y-2">
						<div className="h-4 bg-gray-200 rounded w-3/4" />
						<div className="h-4 bg-gray-200 rounded w-1/2" />
					</div>
				))}
			</div>
		</div>
	);
}
