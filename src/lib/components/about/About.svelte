<script>
	import homepageConfig from '../../../config/homepageConfig';
	import austinPortrait from '../../../static/images/austinPortrait.jpg';
	const { about } = homepageConfig;
	const { title, content, image } = about;
</script>

<div class="about flex w-full flex-col items-start">
	{#if title}
		<h2 class="font-lobster text-3xl font-semibold lg:text-5xl">{title}</h2>
	{/if}
	<div class="flex w-full flex-col items-start gap-4 pt-6">
		{#if image.src && image.alt}
			<div class="flex w-full justify-center lg:mt-4">
				<div class="relative h-[300px] w-[250px]">
					<div
						class="placeholder-for-image relative z-10 flex h-[300px] w-[250px] -rotate-1 justify-center bg-light p-2"
					>
						<div class="h-[200px] w-full overflow-hidden bg-dark">
							<img
								src={austinPortrait}
								alt="Austin holding a guitar and smiling on a stage"
								class="relative z-10 h-full w-full object-cover"
							/>
						</div>
					</div>

					<div
						class="absolute bottom-0 left-0 right-0 top-0 z-0 h-[300px] w-[250px] -translate-x-2 -translate-y-2 bg-highlight"
					></div>
				</div>
			</div>
		{/if}
		{#if content}
			<div
				class="flex flex-col items-start gap-4 font-secondary font-extralight lg:mt-4 lg:text-lg"
			>
				{@html content}
			</div>
		{/if}
	</div>
</div>
