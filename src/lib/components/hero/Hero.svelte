<script>
	import homepageConfig from '../../../config/homepageConfig';
	const { hero } = homepageConfig;
	const { title, subtitle, content, cta } = hero;
</script>

<div class="flex flex-col items-start gap-4 lg:mt-24 2xl:mt-36">
	{#if subtitle}
		<p
			class="animate-text from-highlight to-highlight bg-gradient-to-r via-light bg-clip-text font-lobster font-extralight text-transparent lg:text-4xl"
		>
			{subtitle}
		</p>
	{/if}
	<div>
		<h1 class="font-lobster text-[3rem] font-bold lg:text-[6rem]">
			{#if title.text}
				<span class="font-secondary text-[1rem] font-extralight lg:text-4xl">{title.text}</span>
			{/if}
			{#if title.decoratedText}
				<span class="highlight-shadow text-highlight">{title.decoratedText}</span>
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
			class="transform-all hover:text-highlight hover:border-highlight rounded-xl border-2 border-light p-2 font-secondary text-light duration-300 ease-in-out lg:mt-20"
			href={cta.url}>{cta.text}</a
		>
	{/if}
</div>

<style>
	@media (min-width: 1024px) {
		.highlight-shadow {
			/* text-shadow: 0 0 10px #ef6f6c; */
			text-shadow: -6px -6px 0px #e0ddcf;
		}
	}
</style>
