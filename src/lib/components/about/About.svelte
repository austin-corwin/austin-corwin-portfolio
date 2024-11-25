<script>
	import homepageConfig from '../../../config/homepageConfig';
	const { about } = homepageConfig;
	const { title, content, image } = about;
</script>

<div class="about flex w-full flex-col items-start">
	{#if title}
		<h2 class="font-lobster text-3xl font-semibold lg:text-5xl">{title}</h2>
	{/if}
	<div class="flex w-full flex-col items-start gap-4">
		{#if content}
			<div class="flex flex-col items-start gap-4">
				<p class="font-secondary font-extralight lg:text-lg">
					I'm an experienced mobile and web software engineer with a passion for making things work.
					I'm also a musician, avid cyclist, and craft beer lover. I'm currently open to new
					opportunities in the software engineering world. I love to collaborate so hit me up if
					you'd like to work on a project! I'm an experienced mobile and web software engineer with
					a passion for making things work. I'm also a musician, avid cyclist, and craft beer lover.
					I'm currently open to new opportunities in the software engineering world. I love to
					collaborate so hit me up if you'd like to work on a project! I'm an experienced mobile and
					web software engineer with a passion for making things work. I'm also a musician, avid
					cyclist, and craft beer lover. I'm currently open to new opportunities in the software
					engineering world. I love to collaborate so hit me up if you'd like to work on a project!
					I'm an experienced mobile and web software engineer with a passion for making things work.
					I'm also a musician, avid cyclist, and craft beer lover. I'm currently open to new
					opportunities in the software engineering world. I love to collaborate so hit me up if
					you'd like to work on a project!
				</p>
			</div>
		{/if}
		{#if image.src && image.alt}
			<div class="flex w-full justify-center">
				<!-- <div class="bg-highlight h-[300px] w-[250px]"></div> -->
				<div class="relative h-[300px] w-[250px]">
					<img
						src="https://via.placeholder.com/150"
						alt="Austin Corwin"
						class=" relative z-10 h-full w-full -rotate-1"
					/>
					<div
						class="bg-highlight absolute bottom-0 left-0 right-0 top-0 z-0 h-[300px] w-[250px] -translate-x-2 -translate-y-2"
					></div>
				</div>
			</div>
		{/if}
	</div>
</div>
