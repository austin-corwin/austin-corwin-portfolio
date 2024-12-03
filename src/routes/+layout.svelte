<script lang="ts">
	import '../app.css';
	import resume from '../static/documents/Austin_Corwin_Resume.pdf';
	let { children } = $props();
</script>

<!-- <div class="flex w-full justify-center bg-gradient-to-r from-dark to-[#0f2b2e] text-light"> -->
<!-- <div
	class="flex w-full justify-center bg-gradient-to-tr from-dark via-dark to-[#0f2b2e] text-light"
> -->
<div
	class={`flex w-full justify-center bg-dark bg-staticTexture bg-no-repeat text-light bg-blend-multiply`}
>
	<div class="container w-full">
		<div class="relative flex w-full justify-center p-3">
			<!-- <a href="/">Experience</a> -->
			<p class="font-lobster">Austin Corwin</p>
			<!-- <a href="/settings">Settings</a> -->
			<a
				href={resume}
				class="absolute right-2 font-lobster transition-all duration-300 ease-in-out hover:text-highlight"
				>Resume</a
			>
		</div>
		{@render children()}
	</div>
</div>
