<script lang="ts">
</script>

<div
	class="rounded bg-white dark:bg-gray-800 shadow-md flex-col
  w-full md:w-11/12 lg:w-8/12 xl:w-7/12 mx-auto p-8"
>
	<div
		class="text-blue-800 dark:text-blue-200 md:text-5xl text-4xl
		mb-12 flex flex-col sm:flex-row items-baseline"
	>
		<slot name="header" />
		<div v-if="$slots.subtitle" class="md:text-3xl text-2xl ph:text-xl">
			<slot name="subtitle" />
		</div>
	</div>
	<slot />
</div>
