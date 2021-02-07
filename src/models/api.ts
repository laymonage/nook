export type Request = {
	host: string;
	path: string;
	headers: Record<string, string>;
	query: URLSearchParams;
	body?: unknown;
	params: Record<string, string>;
};

export type Response = {
	statusCode: number;
	headers: Record<string, string>;
	body: unknown;
};
