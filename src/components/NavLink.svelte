<script>
	export let href;
	export let text;
	export let current;
</script>

<a
	{href}
	class="block p-2 mb-2 font-bold capitalize rounded sm:mb-0 first:mb-1 sm:first:mb-0 sm:ml-4 sm:first:ml-0 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700"
	class:text-blue-600={current}
	class:dark:text-blue-100={current}
	aria-current={current}
>
	{text}
</a>
