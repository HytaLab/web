<script lang="ts">
	import './layout.css';

	import { favicon } from '$lib';
	// import { NavBar } from '$components';
	import { Footer } from '$components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="bg">
	<div
		class="mt-50 mr-[25%] ml-[25%] rounded-md border-3 border-white p-5 text-center backdrop-blur-[15px]"
	>
		{@render children()}
		<div class="mt-5">
			<Footer />
		</div>
	</div>
</div>
