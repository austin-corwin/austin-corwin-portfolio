<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-dark text-light">
	<div class="grid w-full justify-center p-3">
		<!-- <a href="/">Experience</a> -->
		<p class="font-lobster">Austin Corwin</p>
		<!-- <a href="/settings">Settings</a> -->
		<button class="absolute right-2 font-lobster">Resume</button>
	</div>
	{@render children()}
</div>
