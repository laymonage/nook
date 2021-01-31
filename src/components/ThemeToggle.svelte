<script>
	import { onMount } from 'svelte';
	import Sun from '$components/icons/Sun.svelte';
	import Moon from '$components/icons/Moon.svelte';

	const themeIcons = {
		light: Sun,
		dark: Moon,
	};
	const themes = Object.keys(themeIcons);
	let current = 'light';

	async function toggle() {
		const { classList } = document.querySelector('html');
		const currentIndex = themes.findIndex((theme) => theme === current);
		localStorage.theme = current = themes[currentIndex + 1] ?? themes[0];
		classList.remove(...themes);
		classList.add(current);
	}

	onMount(async () => {
		const prefersDark = window && matchMedia('(prefers-color-scheme: dark)');
		const preferred = prefersDark && prefersDark.matches ? 'dark' : 'light';
		current = (localStorage && localStorage.theme) || preferred;
	});
</script>

<button
	type="button"
	class="w-6 h-6 fill-current focus:outline-none focus:text-blue-600 hover:text-blue-600 dark:focus:text-blue-100 dark:hover:text-blue-100"
	aria-label="Theme"
	on:click={toggle}
>
	<svelte:component this={themeIcons[current]} />
</button>
