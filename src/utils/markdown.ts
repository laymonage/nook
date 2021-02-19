import hljs from 'highlight.js';
import marked from 'marked';

const renderer = new marked.Renderer();

const linkRenderer = renderer.link;
renderer.link = (href: string, title: string, text: string) => {
	const extLink = href.startsWith('http');
	const html = linkRenderer.call(renderer, href, title, text);
	return extLink
		? html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `)
		: html;
};

const options = {
	renderer,
	highlight(code: string, language: string) {
		const lang = hljs.getLanguage(language) ? language : 'plaintext';
		return hljs.highlight(lang, code).value;
	},
};

export function md(markup: string): string {
	return marked(markup, { ...options });
}
