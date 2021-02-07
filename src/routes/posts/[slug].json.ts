import type { Request, Response } from '../../models/api';
import { join } from 'path';
import { readPost } from '../../utils/io';

export async function get(req: Request): Promise<Response> {
	const { slug } = req.params;
	const path: string = join('content', 'posts', `${slug}.md`);
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		body: { ...readPost(path) },
	};
}
