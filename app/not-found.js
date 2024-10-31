import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
			<p className="mt-4">The page you&apos;re looking for doesn&apos;t exist.</p>
			<Link href="/" className="mt-8 text-red-600 hover:text-red-800">
				Return Home
			</Link>
		</div>
	);
}
