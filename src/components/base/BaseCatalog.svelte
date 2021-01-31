<script>
	export let items;
</script>

<ol>
	{#each items as item, index}
		<li>
			{#if index !== 0}
				<div class="w-full mx-auto border" />
			{/if}
			<slot {item} />
		</li>
	{/each}
</ol>
