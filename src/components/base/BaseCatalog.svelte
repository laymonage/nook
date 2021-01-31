<script>
	export let items;
</script>

<ol>
	{#each items as item, index}
		<li>
			{#if index !== 0}
				<div class="w-full border mx-auto" />
			{/if}
			<slot {item} />
		</li>
	{/each}
</ol>
