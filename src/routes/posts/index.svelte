<script context="module">
	export async function load({ fetch }) {
		const posts = fetch('posts.json').then((r) => r.json());
		return { props: { posts: (await posts).content } };
	}
</script>

<script>
	import BaseCard from '$components/base/BaseCard.svelte';
	import BaseContainer from '$components/base/BaseContainer.svelte';

	import { formatDate } from '$utils/string';

	export let posts;
</script>

<div class="mx-auto my-8 sm:my-32">
	<BaseContainer>
		<div class="mx-auto mt-16 md:w-11/12 lg:w-11/12 xl:w-9/12 first:mt-0">
			{#each posts as post}
				<div class="mt-2 first:mt-0">
					<a href={`posts/${post.slug}`} class="text-gray-700 dark:text-gray-300">
						<BaseCard>
							<div class="flex justify-between">
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
		</div>
	</BaseContainer>
</div>
