<script lang="ts">
	import BaseCard from './base/BaseCard.svelte';
	import GitHub from './icons/GitHub.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import Twitter from './icons/Twitter.svelte';

	const data = {
		alias: 'laymonage',
		name: 'Sage M. Abdullah',
		description: 'I build up and break down stuff in the open.',
		metaDescription: 'laymonage is Sage M. Abdullah. I build up and break down stuff in the open.',
		links: [
			{
				url: 'https://github.com/laymonage',
				icon: GitHub,
			},
			{
				url: 'https://linkedin.com/in/laymonage',
				icon: LinkedIn,
			},
			{
				url: 'https://twitter.com/laymonage',
				icon: Twitter,
			},
		],
	};
</script>

<div class="sm:w-10/12 lg:w-7/12 xl:w-6/12 mx-auto">
	<BaseCard>
		<slot slot="header">
			<strong>{data.alias}</strong>
		</slot>

		<slot slot="subtitle">
			<span class="text-gray-500 sm:ml-4 mr-1"> is </span>
			<span>{data.name}</span>
		</slot>

		<div class="text-left md:text-2xl text-xl ph:text-lg mb-8">
			{data.description}
		</div>
		<div class="flex items-center">
			{#each data.links as link}
				<a
					href={link.url}
					class="ml-3 first:ml-0 p-1 rounded
					focus:outline-none focus:bg-gray-200 focus:text-blue-600
					hover:bg-gray-200 hover:text-blue-600 dark:text-blue-200
					dark:focus:bg-blue-900 dark:focus:text-blue-100
					dark:hover:bg-blue-900 dark:hover:text-blue-100
					fill-current w-8 h-8"
				>
					<svelte:component this={link.icon} />
				</a>
			{/each}
		</div>
	</BaseCard>
</div>
