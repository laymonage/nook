<script>
	import './_global.css';
	import Nav from '$components/Nav.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
</svelte:head>

<Nav />

<main class="flex w-full min-h-screen items-center
	text-gray-700 dark:text-gray-300">
	<slot />
</main>

<style>
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
		transition-duration: 0.5s;
		transition-timing-function: ease;
	}

	:global(.dark main::before) {
		background-color: #111827;
	}
</style>
