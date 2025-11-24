<script lang="ts">
	import './layout.css';
	import { favicon } from '$lib';
	import { NavBar } from '$components';
	import { Footer } from '$components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="bg">
	<div>
		<NavBar />
	</div>

	<div class="glass-blur p-5 mt-50 mr-[25%] ml-[25%] text-center border-r-8">
		{@render children()}
		<div class="mt-5">
			<Footer />
		</div>
	</div>
</div>
