<script>
	// import Projects from "$lib/components/projects/Projects.svelte";
	import About from '$lib/components/about/About.svelte';
	import Experience from '$lib/components/experience/Experience.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';
	import Skills from '$lib/components/skills/Skills.svelte';
</script>

<div class="container flex flex-col items-start gap-12 p-4 text-light">
	<Hero />
	<!-- <div class="mt-8 font-tertiary">
		Fun facts: I've ridden over xxx miles on my Bike I have 4 singles released on spotify. Maybe use
		spotify api here
	</div> -->

	<!-- <Projects /> -->
	<Projects />
	<About />
	<Experience />
	<Skills />

	<!-- About section including an updated photo of me -->
	<!-- Projects section (Evolve K9, this portfolio site, Liquid Miles? ) -->
	<!-- Row of resource links (Resume, email, linkedin, github)  -->
</div>
