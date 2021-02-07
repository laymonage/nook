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
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap"
		rel="stylesheet"
	/>
	<title>{post.attributes.title} | laymonage</title>
</svelte:head>

<div class="mx-auto my-8 sm:my-32">
	<BaseContainer>
		<div class="mx-auto mt-16 md:w-11/12 lg:w-10/12 xl:w-7/12 first:mt-0 post">
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
				<div class="mx-4 mt-4 markdown">
					{@html post.body}
				</div>
			</BaseCard>
		</div>
	</BaseContainer>
</div>
