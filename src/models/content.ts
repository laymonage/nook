export interface PostAttributes {
	title: string;
	date: string;
	tags: string[];
	toc: boolean;
	comments: boolean;
	draft: boolean;
	description: string;
	images: string[];
	slug?: string;
}

export interface Post {
	attributes: PostAttributes;
	body: string;
}
