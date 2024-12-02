<script>
	import DecoratedExperienceBlock from './DecoratedExperienceBlock.svelte';
	import homepageConfig from '../../../config/homepageConfig';
	const { experience } = homepageConfig;
	const { title, content } = experience;
</script>

<div>
	{#if title}
		<h2 class="font-lobster text-3xl font-semibold lg:text-5xl">{title}</h2>
	{/if}
	{#if content}
		<div class="ml-8 mt-4 flex flex-col items-start gap-4">
			{#each content as contentBlock}
				<DecoratedExperienceBlock {...contentBlock} />
			{/each}
		</div>
	{/if}
</div>
