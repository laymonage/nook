import hljs from 'highlight.js';
import marked from 'marked';

const renderer = new marked.Renderer();

const linkRenderer = renderer.link;
renderer.link = (href: string, title: string, text: string): string => {
	const extLink = href.startsWith('http');
	const html: string = linkRenderer.call(renderer, href, title, text);
	return extLink
		? html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `)
		: html;
};

const imageRenderer = renderer.image;
renderer.image = (href: string, title: string, text: string): string => {
	const html: string = imageRenderer.call(renderer, href, title, text);
	const url = new URL(href);
	const lazy = url.searchParams.get('lazy') !== '0';
	return lazy ? html.replace(/^<img /, `<img loading="lazy" `) : html;
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
