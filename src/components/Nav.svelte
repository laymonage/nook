<script>
	import { page } from '$app/stores';
	import Logo from '$components/icons/Logo.svelte';
	import Bars from '$components/icons/Bars.svelte';
	import Times from '$components/icons/Times.svelte';
	import NavLink from '$components/NavLink.svelte';
	import ThemeToggle from '$components/ThemeToggle.svelte';

	export let hideOffset = 60;

	let scrollY = 0;
	let lastScroll = 0;
	let hide = false;
	let open = false;
	const links = ['projects'];

	$: current = $page.path.substr(1);
	$: isCurrent = (link) => (link === current ? 'page' : undefined);

	$: if (Math.abs(scrollY - lastScroll) >= hideOffset) {
		hide = scrollY >= lastScroll;
		lastScroll = scrollY;
	}
</script>

<svelte:window bind:scrollY />

<nav
	role="navigation"
	class="fixed bottom-0 z-10 flex flex-col-reverse w-full py-3 transition duration-500 transform bg-white sm:flex-row sm:justify-between sm:items-center dark:bg-gray-800 dark:text-blue-200 ease sm:top-0 sm:bottom-auto"
	class:shadow-md={!hide}
	class:translate-y-full={hide}
	class:sm:-translate-y-full={hide}
>
	<div class="flex items-center justify-between flex-grow mx-4">
		<a
			href="/"
			tabindex="-1"
			class="w-10 h-10 text-blue-700 fill-current focus:outline-none dark:text-blue-100"
			aria-current={isCurrent('')}
			aria-label="Home"
		>
			<Logo />
		</a>
		<div class="flex items-center justify-between text-blue-700 dark:text-blue-200">
			<ThemeToggle />
			<button
				type="button"
				class="w-8 h-8 ml-4 fill-current sm:hidden focus:outline-none focus:text-blue-600 hover:text-blue-600 dark:focus:text-blue-100 dark:hover:text-blue-100"
				on:click={() => (open = !open)}
			>
				<svelte:component this={open ? Times : Bars} />
			</button>
		</div>
	</div>
	<div class="px-2 pb-2 sm:p-0 sm:mr-4 sm:flex sm:items-center" class:hidden={!open}>
		{#each links as link}
			<NavLink href="/{link}" text={link} current={isCurrent(link)} />
		{/each}
	</div>
</nav>
