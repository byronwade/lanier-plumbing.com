export default function PageHeader({ title, subtitle }) {
	return (
		<div className="py-8 bg-gray-50">
			<div className="container px-4 mx-auto">
				<h1 className="mb-2 text-4xl font-bold">{title}</h1>
				{subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
			</div>
		</div>
	);
}
