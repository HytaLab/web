<script>
	let { mobile = false } = $props();
</script>

{#if mobile}
	<li><a href="/">Item 1</a></li>
	<li>
		<a href="/">Parent</a>
		<ul class="p-2">
			<li><a href="/">Submenu 1</a></li>
			<li><a href="/">Submenu 2</a></li>
		</ul>
	</li>
	<li><a href="/">Item 3</a></li>
{:else}
	<li><a href="/">Item 1</a></li>
	<li>
		<details>
			<summary>Parent</summary>
			<ul class="p-2">
				<li><a href="/">Submenu 1</a></li>
				<li><a href="/">Submenu 2</a></li>
			</ul>
		</details>
	</li>
	<li><a href="/">Item 3</a></li>
{/if}
