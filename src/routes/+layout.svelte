<script lang="ts">
	import '../app.css';
	import resume from '../static/documents/Austin_Corwin_Resume.pdf';
	let { children } = $props();
</script>

<div class={`bg-static flex w-full justify-center bg-dark text-light`}>
	<div class="container w-full">
		<div class="relative flex w-full justify-center p-3">
			<p class="font-lobster">Austin Corwin</p>
			<a
				href={resume}
				class="absolute right-2 font-lobster transition-all duration-300 ease-in-out hover:text-highlight"
				>Resume</a
			>
		</div>
		{@render children()}
	</div>
</div>

<style>
	.bg-static {
		background-image: url('/src/static/images/staticTexture.png');
		z-index: 1;
		position: relative;
	}
	.bg-static:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #131a1c;
		z-index: -1;
		opacity: 0.97;
	}
</style>
