import Link from "next/link";

export default function Header() {
	return (
		<div className="fixed z-10 inline-flex self-center justify-center w-full top-10">
			<div className="flex flex-row p-2 px-6 mx-auto space-x-6 border rounded-full bg-background border-input">
				<Link href="#">Home</Link>
				<Link href="#">Tips</Link>
				<Link href="#">Projects</Link>
				<Link href="#">Services</Link>
				<Link href="#">Contact Us</Link>
			</div>
		</div>
	);
}
