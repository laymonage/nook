<script>
	import marked from 'marked';
	export let item;
</script>

<div class="flex flex-col md:flex-row justify-between items-start md:items-center my-12">
	<div class="p-4 w-7/12 sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto">
		<a href={item.url}>
			<img
				class="rounded"
				src={item.image.src}
				alt={item.title}
				class:dark:bg-white={item.image.lowContrast}
			/>
		</a>
	</div>
	<div class="md:w-7/12 lg:w-9/12 mt-4 md:mt-0 md:ml-8">
		<h3 class="text-3xl md:text-4xl">
			<a href={item.url} class="dark:text-blue-200">
				<strong>{item.title}</strong>
			</a>
		</h3>
		<div class="mt-2 md:text-base lg:text-lg">
			<div>{@html marked(item.description)}</div>
			{#if item.details && item.details.children}
				<ul class="mt-2 ml-8 text-base list-disc">
					{#each item.details.children as child}
						<li>{@html marked(child)}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
