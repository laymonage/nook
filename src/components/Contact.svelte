<script>
	import { md } from '$utils/markdown';
	import BaseCard from './base/BaseCard.svelte';

	import data from '$data/profile';
</script>

<div class="w-11/12 mx-auto sm:w-10/12 lg:w-7/12 xl:w-6/12">
	<BaseCard>
		<slot slot="header">
			<strong>{data.alias}</strong>
		</slot>

		<slot slot="subtitle">
			<span class="mr-1 text-gray-500 sm:ml-4"> is </span>
			<span>{data.name}</span>
		</slot>

		<div class="mb-8 text-xl text-left md:text-2xl">
			{@html md(data.description)}
		</div>
		<div class="flex items-center">
			{#each data.links as link}
				<a
					target="_blank"
					rel="noreferrer noopener nofollow"
					href={link.url}
					class="w-8 h-8 p-1 ml-3 rounded fill-current first:ml-0 focus:outline-none focus:bg-blue-100 focus:text-blue-700 hover:bg-blue-100 hover:text-blue-700 dark:text-blue-200 dark:focus:bg-gray-700 dark:focus:text-blue-100 dark:hover:bg-gray-700 dark:hover:text-blue-100"
				>
					<svelte:component this={link.icon} />
				</a>
			{/each}
		</div>
	</BaseCard>
</div>
