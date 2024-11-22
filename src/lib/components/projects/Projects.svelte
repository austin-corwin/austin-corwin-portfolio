<script>
	import ProjectCard from './ProjectCard.svelte';
	import evolvek9 from '../../../static/images/evolvek9.png';
	import liquidMiles from '../../../static/images/liquidMiles.png';
	import austinPortfolio from '../../../static/images/austinPortfolio.png';

	let projects = [
		{
			title: 'Evolve K9',
			description:
				'Evolve K9 is a dog training business that I built a website for. The site is built with Next.js and Tailwind CSS. It features a contact form that sends an email to the business owner when filled out.',
			url: 'https://evolvek9.com',
			imgSrc: evolvek9
		},
		{
			title: 'Liquid Miles',
			description:
				'Liquid Miles is a mobile app that I built with React Native. It is a mileage tracking app that allows users to track their mileage for multiple vehicles. The app is available on the Google Play Store.',
			url: 'https://play.google.com/store/apps/details?id=com.liquidmiles',
			imgSrc: liquidMiles
		},
		{
			title: 'This Portfolio Site',
			description:
				'This site is built with SvelteKit and Tailwind CSS. It features a contact form that sends an email to me when filled out. The site is hosted on Vercel.',
			url: '/',
			imgSrc: austinPortfolio
		}
	];
</script>

<div class="w-full">
	<h2 class="font-lobster text-3xl font-semibold lg:text-5xl">Projects</h2>
	<div class="mt-4 flex flex-col items-start gap-6 lg:grid lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
