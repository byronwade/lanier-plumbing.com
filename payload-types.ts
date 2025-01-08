export interface Page {
	id: string;
	title: string;
	slug: string;
	content?: string;
	updatedAt: string;
	createdAt: string;
	pageMeta?: {
		title?: string;
		description?: string;
		image?: {
			url: string;
		};
	};
	layout?: {
		blockType: string;
		id?: string;
		[key: string]: any;
	}[];
}

export interface Service {
	id: string;
	title: string;
	slug: string;
	description?: string;
	content?: string;
	updatedAt: string;
	createdAt: string;
}

export interface Setting {
	id: string;
	companyName: string;
	siteURL: string;
	homePage?: { id: string } | string | number;
	logo?: {
		id: string;
		url: string;
		alt: string;
		filename: string;
	};
	address?: {
		street: string;
		city: string;
		state: string;
		zip: string;
		country: string;
	};
	phone?: string;
	email?: string;
	priceRange?: string;
	serviceArea?: string;
	blogSettings?: {
		defaultAuthor: string;
		defaultExcerpt: string;
		authorBio?: string;
	};
	socialMedia?: {
		twitter?: string;
		facebook?: string;
		instagram?: string;
		linkedin?: string;
		youtube?: string;
	};
	defaultSEO?: {
		title?: string;
		description?: string;
		keywords?: string[];
		image?: {
			id: string;
			url: string;
			alt: string;
			filename: string;
		};
	};
	siteVerification?: {
		google?: string;
		bing?: string;
		yandex?: string;
		yahoo?: string;
	};
	updatedAt: string;
	createdAt: string;
}
