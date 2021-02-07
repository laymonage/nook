<script context="module">
	export async function load({ fetch }) {
		const posts = fetch('posts.json').then((r) => r.json());
		return { props: { allPosts: (await posts).content } };
	}
</script>

<script>
	import BaseCard from '$components/base/BaseCard.svelte';
	import BaseContainer from '$components/base/BaseContainer.svelte';

	import { formatDate } from '$utils/string';

	export let allPosts = [];
	let searchInput = null;
	let search = '';
	let posts = [];

	$: if (allPosts)
		posts = allPosts.filter((post) => {
			const haystack = `${post.title} ${post.tags.join(' ')} ${post.description}`;
			return haystack.toLowerCase().includes(search.toLowerCase());
		});

	function focus(event) {
		if (event.key === '/' && document.activeElement !== searchInput) {
			event.preventDefault();
			searchInput.focus();
		}
	}
</script>

<svelte:window on:keydown={focus} />

<div class="mx-auto my-8 md:w-11/12 lg:w-7/12 sm:my-32">
	<BaseContainer>
		<div class="mx-auto md:w-11/12 lg:w-11/12 xl:w-9/12">
			<div class="mb-2">
				<BaseCard>
					<h1 class="mb-8 text-4xl text-center">Posts</h1>
					<div class="flex flex-row">
						<input
							class="flex-grow w-full px-4 py-2 bg-gray-300 border-2 border-r-0 border-gray-400 rounded rounded-r-none border-opacity-20 focus:outline-none focus:bg-opacity-30 hover:bg-opacity-30 bg-opacity-10"
							placeholder="Type what you're looking for..."
							type="text"
							bind:this={searchInput}
							bind:value={search}
						/>
						<kbd
							class="h-full p-2 my-auto text-gray-400 bg-gray-400 border-2 border-gray-400 rounded rounded-l-none border-opacity-20 bg-opacity-20"
							title="Press / to focus">/</kbd
						>
					</div>
				</BaseCard>
			</div>
			{#each posts as post}
				<div class="mb-2">
					<a href={`posts/${post.slug}`} class="text-gray-700 dark:text-gray-300">
						<BaseCard>
							<div class="flex flex-col justify-between sm:flex-row">
								<h2 class="text-xl font-bold">{post.title}</h2>
								<p>{formatDate(new Date(post.date))}</p>
							</div>
							<div class="mt-4">
								{post.description}
							</div>
						</BaseCard>
					</a>
				</div>
			{/each}
			{#if !posts.length}
				<div class="text-center">
					<BaseCard>No posts found matching your query.</BaseCard>
				</div>
			{/if}
		</div>
	</BaseContainer>
</div>
