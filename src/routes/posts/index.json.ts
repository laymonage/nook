import { join } from 'path';
import type { Response } from '../../models/api';
import { readPostsDir, rootDir } from '../../utils/io';

export async function get(): Promise<Response> {
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		body: { content: readPostsDir(join(rootDir(), 'content', 'posts')) },
	};
}
