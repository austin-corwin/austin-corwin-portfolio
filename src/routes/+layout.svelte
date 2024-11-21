<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-dark text-light h-screen">
	<div class="grid w-full justify-center p-3">
		<!-- <a href="/">Experience</a> -->
		<p class="font-lobster">Austin Corwin</p>
		<!-- <a href="/settings">Settings</a> -->
		<button class="font-lobster absolute right-2">Resume</button>
	</div>
	{@render children()}
</div>
