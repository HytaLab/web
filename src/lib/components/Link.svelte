<script>
	let { to, children } = $props();
</script>

<a class="" href={to} target="_blank" rel="noopener noreferrer">{@render children()}</a>
