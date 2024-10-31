import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/contact/page"));

export default function ContactPage() {
	return (
		<>
			<ContactForm />
		</>
	);
}
