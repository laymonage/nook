<div
	class="rounded flex-col w-full p-8 shadow-md
bg-white dark:bg-gray-800 transition-colors ease duration-500"
>
	<div
		class="text-blue-800 dark:text-blue-200 md:text-5xl text-4xl
		mb-12 flex flex-col sm:flex-row items-baseline"
	>
		<slot name="header" />
		{#if $$slots.subtitle}
			<div class="md:text-3xl text-2xl ph:text-xl">
				<slot name="subtitle" />
			</div>
		{/if}
	</div>
	<slot />
</div>
