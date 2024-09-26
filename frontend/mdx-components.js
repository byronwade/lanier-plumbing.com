import Image from "next/image";

export function useMDXComponents(components) {
	return {
		// Custom MDX components
		h1: ({ children }) => <h1 className="my-4 text-4xl font-bold">{children}</h1>,
		img: (props) => <Image sizes="100vw" alt="" style={{ width: "100%", height: "auto" }} {...props} />,
		...components,
	};
}
