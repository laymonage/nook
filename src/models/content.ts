export interface PostAttributes {
	title: string;
	date: string;
	tags: string[];
	toc: boolean;
	comments: boolean;
	draft: boolean;
	description: string;
	image: string;
	slug?: string;
}

export interface Post {
	attributes: PostAttributes;
	body: string;
}
