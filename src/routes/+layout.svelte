<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="flex w-full justify-between">
	<a href="/">Home</a>
	<div>Austin Corwin</div>
	<a href="/settings">Settings</a>
</nav>
{@render children()}
