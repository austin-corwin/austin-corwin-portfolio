<script lang="ts">
	let { description, title, url }: { description: string; title: string; url: string } = $props();
	import image from '../../../static/images/evolvek9.png';
</script>

<div class="flex flex-col items-start overflow-hidden rounded-xl">
	<div
		class="rounded-l-xl rounded-r-xl rounded-t-xl rounded-bl-none rounded-br-none border-l-2 border-r-2 border-t-2 border-light p-2"
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
	<div class="relative">
		<div class="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-30"></div>
		<img src={image} alt="A preview thumbnail of evolvek9training.com" />
		<div class="absolute bottom-0 left-0 right-0 z-20 h-12 bg-transparent p-2 opacity-100">
			<h3 class="font-secondary text-lg font-semibold text-dark">{title}</h3>
		</div>
		<div class="absolute bottom-0 left-0 right-0 z-0 h-12 bg-light p-2 opacity-75"></div>
	</div>
</div>
