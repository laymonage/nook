import type { Post, PostAttributes } from 'src/models/content';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import fm from 'front-matter';
import { md } from './markdown';

export function readPost(path: string): Post {
	const content = readFileSync(path, 'utf-8');
	const { attributes, body }: Post = fm(content);
	return { attributes, body: md(body) };
}

export function readPostsDir(dirname: string): PostAttributes[] {
	return readdirSync(dirname).map((filename) => {
		const path = join(dirname, filename);
		const content = readFileSync(path, 'utf-8');
		const { attributes } = fm<PostAttributes>(content);
		const [slug] = filename.split('.');
		return { slug, ...attributes };
	});
}
