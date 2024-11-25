<script>
	import ProjectCard from './ProjectCard.svelte';
	import homepageConfig from '../../../config/homepageConfig';
	const { projects } = homepageConfig;
	const { recentProjects } = projects;
</script>

<div class="w-full">
	{#if projects.title}
		<h2 class="font-lobster text-3xl font-semibold lg:text-5xl">{projects.title}</h2>
	{/if}
	<div class="mt-4 flex flex-col items-start gap-6 lg:grid lg:grid-cols-3">
		{#each recentProjects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
