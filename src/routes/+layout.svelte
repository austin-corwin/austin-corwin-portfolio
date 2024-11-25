<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<!-- <div class="flex w-full justify-center bg-gradient-to-r from-dark to-[#0f2b2e] text-light"> -->
<div
	class="flex w-full justify-center bg-gradient-to-tr from-dark via-dark to-[#0f2b2e] text-light"
>
	<!-- <div class="flex w-full justify-center bg-dark text-light"> -->
	<div class="container w-full">
		<div class="relative flex w-full justify-center p-3">
			<!-- <a href="/">Experience</a> -->
			<p class="font-lobster">Austin Corwin</p>
			<!-- <a href="/settings">Settings</a> -->
			<button class="absolute right-2 font-lobster">Resume</button>
		</div>
		{@render children()}
	</div>
</div>
