<script>
	import BaseCard from '$components/base/BaseCard.svelte';
	import BaseCatalog from '$components/base/BaseCatalog.svelte';
	import BaseContainer from '$components/base/BaseContainer.svelte';
	import ShowcaseItem from '$components/ShowcaseItem.svelte';

	import projects from '$data/projects';
</script>

<div class="my-32 mx-auto">
	<BaseContainer>
		{#each projects as group}
			<div class="md:w-11/12 lg:w-11/12 xl:w-9/12 mt-16 first:mt-0 mx-auto">
				<BaseCard>
					<slot slot="header">{group.type} Projects</slot>
					<BaseCatalog items={group.data} let:item>
						<ShowcaseItem {item} />
					</BaseCatalog>
				</BaseCard>
			</div>
		{/each}
	</BaseContainer>
</div>
