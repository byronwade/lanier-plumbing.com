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
	homePage?:
		| {
				id: string | number;
				value?: any;
		  }
		| number;
	siteURL?: string;
	companyName?: string;
	defaultSEO?: {
		title?: string;
		description?: string;
		keywords?: string[];
		image?: {
			url: string;
		};
	};
	socialMedia?: {
		twitter?: string;
		facebook?: string;
		instagram?: string;
		linkedin?: string;
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
