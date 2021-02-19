<script>
	import { md } from '$utils/markdown';
	export let item;
</script>

<div class="flex flex-col items-start justify-between my-12 md:flex-row md:items-center">
	<div class="w-7/12 p-4 mx-auto sm:w-8/12 md:w-5/12 lg:w-3/12">
		<a href={item.url}>
			<img
				class="rounded"
				src={item.image.src}
				alt={item.title}
				class:dark:bg-white={item.image.lowContrast}
			/>
		</a>
	</div>
	<div class="mt-4 md:w-7/12 lg:w-9/12 md:mt-0 md:ml-8">
		<h3 class="text-3xl md:text-4xl">
			<a href={item.url} class="dark:text-blue-200">
				<strong>{item.title}</strong>
			</a>
		</h3>
		<div class="mt-2 md:text-base lg:text-lg">
			<div>{@html md(item.description)}</div>
			{#if item.details && item.details.children}
				<ul class="mt-2 ml-8 text-base list-disc">
					{#each item.details.children as child}
						<li>{@html md(child)}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
