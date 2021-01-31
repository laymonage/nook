<script>
	import { page } from '@sveltejs/kit/assets/runtime/app/stores.js';
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
	class="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center
		z-10 fixed w-full py-3 bg-white dark:bg-gray-800 dark:text-blue-200
		transition duration-500 ease transform sm:top-0 sm:bottom-auto bottom-0"
	class:shadow-md={!hide}
	class:translate-y-full={hide}
	class:sm:-translate-y-full={hide}
>
	<div class="mx-4 flex items-center justify-between flex-grow">
		<a
			href="/"
			tabindex="-1"
			class="focus:outline-none w-10 h-10 text-blue-700 dark:text-blue-100 fill-current"
			aria-current={isCurrent('')}
			aria-label="Home"
		>
			<Logo />
		</a>
		<div class="flex items-center justify-between
				text-blue-700 dark:text-blue-200">
			<ThemeToggle />
			<button
				type="button"
				class="sm:hidden ml-4 focus:outline-none
          focus:text-blue-600 hover:text-blue-600
					dark:focus:text-blue-100 dark:hover:text-blue-100
					fill-current w-8 h-8"
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
