<script>
	let { mobile = false } = $props();
</script>

{#if mobile}
	<li><a href="/">Home</a></li>
	<li>
		<p>Projects</p>
		<ul class="p-2">
			<li><a href="/">HytaLib</a></li>
			<li><a href="/">Item 2</a></li>
			<li><a href="/">Item 3</a></li>
		</ul>
	</li>
	<li><a href="/">Services</a></li>
	<li><a href="/">Contact</a></li>
	<li>
		<p>Company</p>
		<ul class="p-2">
			<li><a href="/">About</a></li>
			<li><a href="/">Careers</a></li>
			<li><a href="/">Code of Conduct</a></li>
		</ul>
	</li>
{:else}
	<li><a href="/">Home</a></li>
	<li>
		<details>
			<summary>Projects</summary>
			<ul class="p-2">
				<li><a href="/">HytaLib</a></li>
				<li><a href="/">Item 2</a></li>
				<li><a href="/">Item 3</a></li>
			</ul>
		</details>
	</li>
	<li><a href="/">Services</a></li>
	<li><a href="/">Contact</a></li>
	<li>
		<details>
			<summary>Company</summary>
			<ul class="p-2">
				<li><a href="/">About</a></li>
				<li><a href="/">Careers</a></li>
				<li><a href="/">Code of Conduct</a></li>
			</ul>
		</details>
	</li>
{/if}