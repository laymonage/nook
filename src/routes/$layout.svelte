<script>
	import './_global.css';
	import Nav from '$components/Nav.svelte';
</script>

<Nav />

<main
	class="flex w-full min-h-screen items-center
	text-gray-700 dark:text-gray-300
	transition duration-300 ease-out"
>
	<slot />
</main>

<style>
	main {
		font-family: -apple-system, BlinkMacSystemFont, Lato, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main::before {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: ghostwhite;
		background-image: url('/bg.svg');
		background-position: center;
		background-size: cover;
		content: '';
		z-index: -1;
		will-change: transform;
	}
</style>
