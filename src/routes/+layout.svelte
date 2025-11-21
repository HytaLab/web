<script lang="ts">
	import './layout.css';
	import { favicon } from '$lib';
	import { NavBar } from '$components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div>
	<NavBar />
</div>

{@render children()}
