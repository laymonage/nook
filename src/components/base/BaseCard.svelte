<div
	class="flex-col w-full p-8 transition-colors duration-500 bg-white rounded shadow-md dark:bg-gray-800 ease"
>
	<div
		class="flex flex-col items-baseline mb-14 text-4xl text-blue-800 dark:text-blue-200 md:text-5xl sm:flex-row"
	>
		<slot name="header" />
		{#if $$slots.subtitle}
			<div class="text-2xl md:text-3xl">
				<slot name="subtitle" />
			</div>
		{/if}
	</div>
	<slot />
</div>
