<script>
	let scrollY = 0;
	$: showButton = scrollY > 256;
</script>

<svelte:window bind:scrollY />

<button
	type="button"
	class="fixed z-10 text-white transition duration-300 bg-blue-900 rounded-full shadow-lg bottom-3 right-3 button dark:bg-gray-700 focus:outline-none"
	class:button-hidden={!showButton}
>
	<svg
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="w-12 h-12 fill-current sm:w-16 sm:h-16"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<path
			d="M17 13.41l-4.29-4.24a1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42 1 1 0 001.41 0L12 11.29l3.54 3.54a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 00.05-1.42z"
		/>
	</svg>
</button>

<style>
	.button {
		transform: translate3d(0, 0, 0);
	}

	.button.button-hidden {
		box-shadow: none;
		transform: translate3d(0, 150%, 0);
	}
</style>
