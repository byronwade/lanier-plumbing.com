// Base document structure
export interface BaseDoc {
	id: string;
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

// Collection response structure
export interface CollectionResponse<T> {
	docs: T[];
}

// Settings type
export interface Setting {
	homePage: {
		id: string | number;
		value?: any;
	};
	companyName: string;
	companyPhone: string;
	companyEmail: string;
	companyAddress: string;
	socialLinks: Array<{ platform: string; url: string }>;
}
