import type { Response } from '../../models/api';
import { readPostsDir } from '../../utils/io';

export async function get(): Promise<Response> {
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		body: { content: readPostsDir('content/posts') },
	};
}
