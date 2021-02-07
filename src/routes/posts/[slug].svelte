<script context="module">
	export async function load({ page, fetch }) {
		const post = fetch(`${page.path}.json`).then((r) => r.json());
		return { props: { post: await post } };
	}
</script>

<script>
	import BaseCard from '$components/base/BaseCard.svelte';
	import BaseContainer from '$components/base/BaseContainer.svelte';

	import { formatDateTime } from '$utils/string';
	export let post;

	let title = '';

	$: title = post.attributes.title;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap"
		rel="stylesheet"
	/>
	<title>{title}{title && ` | `}laymonage</title>
</svelte:head>

<div class="w-full mx-auto mt-2 mb-16 sm:mt-32">
	<BaseContainer>
		<div class="w-full mx-auto mt-16 sm:w-11/12 lg:w-10/12 xl:w-7/12 first:mt-0 post">
			<BaseCard>
				<div class="flex-row text-center">
					<h2 class="mb-4 text-3xl font-bold">{post.attributes.title}</h2>
					<p class="mb-4">{formatDateTime(new Date(post.attributes.date))}</p>
					<div class="mb-16">
						{#each post.attributes.tags as tag}
							<span class="p-1 mx-1 bg-gray-400 border-2 border-gray-500 rounded bg-opacity-20"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
				<div class="mt-4 sm:mx-4 markdown">
					{@html post.body}
				</div>
			</BaseCard>
		</div>
	</BaseContainer>
</div>
