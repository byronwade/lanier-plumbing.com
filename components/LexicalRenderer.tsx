import React from "react";
import escapeHTML from "escape-html";

interface Props {
	content: any;
}

const LexicalRenderer: React.FC<Props> = ({ content }) => {
	if (!content) return null;

	// If content is already a string, return it wrapped in a div
	if (typeof content === "string") {
		return <div dangerouslySetInnerHTML={{ __html: content }} />;
	}

	// Helper function to render nodes recursively
	const renderNodes = (nodes: any[]) => {
		return nodes.map((node, i) => {
			if (node.type === "text") {
				let text = escapeHTML(node.text);
				if (node.bold) text = `<strong>${text}</strong>`;
				if (node.italic) text = `<em>${text}</em>`;
				if (node.underline) text = `<u>${text}</u>`;
				if (node.strikethrough) text = `<s>${text}</s>`;
				if (node.code) text = `<code>${text}</code>`;
				return <span key={i} dangerouslySetInnerHTML={{ __html: text }} />;
			}

			if (node.type === "link") {
				return (
					<a key={i} href={escapeHTML(node.url)} {...(node.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
						{renderNodes(node.children)}
					</a>
				);
			}

			if (node.type === "paragraph") {
				return <p key={i}>{renderNodes(node.children)}</p>;
			}

			if (node.type === "heading") {
				const Tag = `h${node.tag}` as keyof JSX.IntrinsicElements;
				return <Tag key={i}>{renderNodes(node.children)}</Tag>;
			}

			if (node.type === "list") {
				const Tag = node.listType === "ordered" ? "ol" : "ul";
				return (
					<Tag key={i}>
						{node.children.map((item: any, itemIndex: number) => (
							<li key={itemIndex}>{renderNodes(item.children)}</li>
						))}
					</Tag>
				);
			}

			if (node.type === "quote") {
				return <blockquote key={i}>{renderNodes(node.children)}</blockquote>;
			}

			if (node.type === "upload") {
				return (
					<figure key={i} className="my-8">
						<img src={node.value?.url} alt={node.value?.alt || ""} className="rounded-lg shadow-lg" />
						{node.value?.caption && <figcaption className="mt-2 text-sm text-center text-gray-600">{node.value.caption}</figcaption>}
					</figure>
				);
			}

			// Return null for unknown node types
			return null;
		});
	};

	// Handle root node
	if (content.root && content.root.children) {
		return <div className="lexical-content">{renderNodes(content.root.children)}</div>;
	}

	// Handle array of nodes
	if (Array.isArray(content)) {
		return <div className="lexical-content">{renderNodes(content)}</div>;
	}

	return null;
};

export default LexicalRenderer;
