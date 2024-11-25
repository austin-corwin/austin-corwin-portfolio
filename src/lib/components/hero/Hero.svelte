<script>
	import homepageConfig from '../../../config/homepageConfig';
	const { hero } = homepageConfig;
	const { title, subtitle, content, cta } = hero;
</script>

<div class="flex flex-col items-start gap-4 lg:mt-24">
	{#if subtitle}
		<p class="font-secondary font-extralight lg:text-4xl">{subtitle}</p>
	{/if}
	<div>
		<h1 class="font-lobster text-[3rem] font-bold lg:text-[6rem]">
			{#if title.text}
				<span class="font-secondary text-[1rem] font-extralight lg:text-4xl">{title.text}</span>
			{/if}
			{#if title.decoratedText}
				<span class="text-highlight">{title.decoratedText}</span>
			{/if}
		</h1>
		{#if content}
			<p class="font-secondary font-extralight lg:text-4xl">
				{content}
			</p>
		{/if}
	</div>

	<!-- <h2 class="font-kanit font-semibold">Bike Writer 🚲 and Code Rider 👨‍💻</h2> -->
	{#if cta.text && cta.url}
		<a
			href={cta.url}
			class="hover:animate-text rounded-xl border-2 border-light p-2 font-secondary text-light
        hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500
        hover:to-indigo-500 hover:bg-clip-text hover:text-transparent">{cta.text}</a
		>
	{/if}
</div>

<style>
	/* .highlight-shadow {
		text-shadow: 0 0 10px #c5fffd;
	} */
</style>
