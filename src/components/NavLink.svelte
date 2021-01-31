<script>
	export let href;
	export let text;
	export let current;
</script>

<a
	{href}
	class="p-2 mb-2 sm:mb-0 first:mb-1 sm:first:mb-0 sm:ml-4 sm:first:ml-0
	block rounded focus:outline-none focus:bg-gray-200 hover:bg-gray-200
	dark:focus:bg-blue-900 dark:hover:bg-blue-900 font-bold capitalize"
	class:text-blue-600={current}
	class:dark:text-blue-100={current}
	aria-current={current}
>
	{text}
</a>
