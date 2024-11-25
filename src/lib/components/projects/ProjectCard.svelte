<script lang="ts">
	let {
		description,
		title,
		url,
		imgSrc
	}: { description: string; title: string; url: string; imgSrc: string } = $props();
</script>

<div class="flex flex-col items-start overflow-hidden rounded-xl">
	<div
		class="rounded-l-xl rounded-r-xl rounded-t-xl rounded-bl-none rounded-br-none border-l-2 border-r-2 border-t-2 border-light p-2 lg:hidden"
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
	<div class="group/content relative">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 z-20 rounded-l-xl rounded-r-xl rounded-t-xl rounded-bl-none rounded-br-none border-l-2 border-r-2 border-t-2 border-light bg-dark p-2 opacity-0 group-hover/content:flex group-hover/content:opacity-100 group-hover/content:transition-all group-hover/content:duration-500 group-hover/content:ease-in-out lg:flex-col lg:rounded-b-xl lg:border-b-2 lg:bg-opacity-90 lg:opacity-0"
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
		<img class="z-0" src={imgSrc} alt="A preview thumbnail of evolvek9training.com" />
	</div>
</div>
