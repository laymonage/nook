<script>
	import { page } from '@sveltejs/kit/assets/runtime/app/stores.js';
	import Logo from '$components/icons/Logo.svelte';
	import Moon from '$components/icons/Moon.svelte';
	import Sun from '$components/icons/Sun.svelte';
	import Bars from '$components/icons/Bars.svelte';
	import Times from '$components/icons/Times.svelte';

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
	class="sm:flex sm:justify-between sm:items-center z-10 fixed w-full py-3
		bg-white dark:bg-gray-800 dark:text-blue-200
		transition duration-300 ease-out transform"
	class:shadow-md={!hide}
	class:translate-y-0={!hide}
	class:shadow-none={hide}
	class:-translate-y-full={hide}
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
			<button
				type="button"
				class="focus:outline-none
          focus:text-blue-600 hover:text-blue-600
					dark:focus:text-blue-100 dark:hover:text-blue-100
					fill-current w-6 h-6"
			>
				<Sun />
			</button>
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
	<div class="px-2 pt-2 sm:p-0 xs:mx-0 sm:mr-4 sm:flex sm:items-center" class:hidden={!open}>
		{#each links as link}
			<a
				href="/{link}"
				class="p-2 xs:mt-2 xs:first:mt-1 sm:ml-4 sm:first:ml-0 block rounded
					focus:outline-none focus:bg-gray-200 hover:bg-gray-200
					dark:focus:bg-blue-900 dark:hover:bg-blue-900 font-bold capitalize"
				class:text-blue-600={isCurrent(link)}
				class:dark:text-blue-100={isCurrent(link)}
				aria-current={isCurrent(link)}
			>
				{link}
			</a>
		{/each}
	</div>
</nav>
