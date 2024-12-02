<script lang="ts">
	let {
		description,
		title,
		url,
		image,
		sourceUrl
	}: {
		description: string;
		title: string;
		url?: string;
		image: { src: string; alt: string };
		sourceUrl: string;
	} = $props();
</script>

<div class="flex flex-col items-start rounded-xl">
	<!-- Start: Content is hidden on larger screens  -->
	<div
		class="rounded-l-xl rounded-r-xl rounded-t-xl rounded-bl-none rounded-br-none border-l-2 border-r-2 border-t-2 border-light p-2 lg:hidden"
	>
		{#if title}
			<h3 class="font-secondary text-lg font-semibold">{title}</h3>
		{/if}
		{#if description}
			<p class="font-secondary font-extralight">
				{description}
			</p>
		{/if}
		<div class="flex gap-2">
			{#if url}
				<a href={url} target="_blank" rel="noopener noreferrer" class="font-tertiary underline">
					Website
				</a>
			{/if}
			{#if sourceUrl}
				<a
					href={sourceUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="font-tertiary underline"
				>
					Source
				</a>
			{/if}
		</div>
	</div>
	<!-- End: Content is hidden on larger screens -->

	<!-- We want this below -->
	<!-- <div class="group/content relative">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 z-20 translate-x-2 translate-y-2 rounded-l-xl rounded-r-xl rounded-t-xl rounded-bl-none rounded-br-none border-l-2 border-r-2 border-t-2 border-light bg-dark p-2 opacity-0 group-hover/content:flex group-hover/content:opacity-100 lg:flex-col lg:rounded-b-xl lg:border-b-2 lg:bg-opacity-100 lg:opacity-0"
		>
			<h3 class="font-secondary text-lg font-semibold">{title}</h3>
			<p class="font-secondary font-extralight">
				{description}
			</p>
			<div class="flex gap-2">
				<a href={url} target="_blank" rel="noopener noreferrer" class="font-tertiary underline">
					Website
				</a>
				<a href={url} target="_blank" rel="noopener noreferrer" class="font-tertiary underline">
					Source
				</a>
			</div>
		</div>
		<div class=" h-full w-full overflow-hidden rounded-xl">
			<div
				class="group-hover/content:bg-highlight absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl"
			></div>
			<img class="z-0" src={imgSrc} alt="A preview thumbnail of evolvek9training.com" />
		</div>
	</div> -->
	<!-- down to here  -->
	<!-- Alternate option:  -->
	<div class="group/content relative">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 z-20 translate-x-3 translate-y-3 rounded-l-xl rounded-r-xl rounded-t-xl rounded-bl-none rounded-br-none border-l-2 border-r-2 border-t-2 border-dark bg-highlight p-2 text-dark opacity-0 lg:flex-col lg:rounded-b-xl lg:border-b-2 lg:bg-opacity-100 lg:opacity-0 group-hover/content:lg:flex group-hover/content:lg:opacity-100"
		>
			{#if title}
				<h3 class="font-secondary text-lg font-bold">{title}</h3>
			{/if}
			{#if description}
				<p class="font-secondary">
					{description}
				</p>
			{/if}
			<div class="flex gap-2">
				{#if url}
					<a href={url} target="_blank" rel="noopener noreferrer" class="font-tertiary underline">
						Website
					</a>
				{/if}
				{#if sourceUrl}
					<a
						href={sourceUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="font-tertiary underline"
					>
						Source
					</a>
				{/if}
			</div>
		</div>
		<div
			class=" h-full w-full overflow-hidden rounded-xl rounded-tl-none rounded-tr-none lg:rounded-tl-xl lg:rounded-tr-xl"
		>
			<div
				class="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl group-hover/content:lg:bg-light"
			></div>
			{#if image.src && image.alt}
				<img class="z-0" src={image.src} alt={image.alt} />
			{/if}
		</div>
	</div>
</div>
