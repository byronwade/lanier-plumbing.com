import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type BaseBlock = Extract<LayoutType[number], { blockType: "faq" }>;

interface FAQ {
	question: string;
	answer: string;
}

interface FAQBlock extends BaseBlock {
	heading?: string;
	subheading?: string;
	faqs: FAQ[];
}

export default function FAQ(props: FAQBlock) {
	const { heading = "Common Questions & Answers", subheading = "Find out all the essential details about our platform and how it can serve your needs.", faqs = [] } = props;

	return (
		<div className="w-full py-12 bg-white md:py-24">
			<div className="container px-4 md:px-6 mx-auto max-w-[800px]">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">FAQ</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{heading}</h2>
					<p className="text-gray-500 md:text-lg max-w-[700px]">{subheading}</p>
				</div>

				<div className="mt-12 space-y-8">
					{faqs.map((faq: FAQ, index: number) => (
						<div key={index} className="flex space-x-4">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-semibold text-gray-500 bg-gray-100 rounded-md">{index + 1}</div>
							<div className="flex-grow space-y-2">
								<h3 className="text-lg font-semibold">{faq.question}</h3>
								<p className="text-gray-500">{faq.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
