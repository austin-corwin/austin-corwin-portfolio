<script>
	import homepageConfig from '../../../config/homepageConfig';
	const { hero } = homepageConfig;
	const { title, subtitle, content, cta } = hero;
</script>

<div class="flex flex-col items-start gap-4">
	{#if subtitle}
		<p
			class="animate-text bg-gradient-to-r from-highlight via-light to-highlight bg-clip-text font-lobster font-extralight text-transparent lg:text-4xl"
		>
			{subtitle}
		</p>
	{/if}
	<div>
		<h1 class="font-lobster text-[2.5rem] font-bold lg:text-[6rem]">
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
	<!-- Keep this in case I want to switch content  -->
	<!-- <h2 class="font-kanit font-semibold">Bike Writer 🚲 and Code Rider 👨‍💻</h2> -->

	{#if cta.text && cta.url}
		<a
			class="transform-all mt-6 rounded-xl border-2 border-light p-2 font-secondary text-xs text-light duration-300 ease-in-out hover:border-highlight hover:text-highlight md:text-base lg:mt-20"
			href={cta.url}>{cta.text}</a
		>
	{/if}
</div>

<style>
	@media (min-width: 1024px) {
		.highlight-shadow {
			text-shadow: -6px -6px 0px #e0ddcf;
		}
	}
</style>
