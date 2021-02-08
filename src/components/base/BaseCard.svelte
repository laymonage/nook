<div
	class="flex-col w-full p-6 transition-colors duration-500 bg-white rounded shadow-md sm:p-8 dark:bg-gray-800 ease"
>
	{#if $$slots.header}
		<div
			class="flex flex-col items-baseline text-4xl text-blue-800 mb-14 dark:text-blue-200 md:text-5xl sm:flex-row"
		>
			<slot name="header" />
			{#if $$slots.subtitle}
				<div class="text-2xl md:text-3xl">
					<slot name="subtitle" />
				</div>
			{/if}
		</div>
	{/if}
	<slot />
</div>
