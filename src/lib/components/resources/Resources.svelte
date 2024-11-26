<script>
	import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
	import EmailIcon from '$lib/icons/EmailIcon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
	import resume from '../../../static/documents/Austin_Corwin_Resume.pdf';
	let iconComponents = [
		{
			component: EmailIcon,
			fill: '#ef6f6c',
			url: 'mailto:austincorwin5@gmail.com',
			ariaLabel: 'Link to send me an email'
		},
		{
			component: GithubIcon,
			fill: '#ef6f6c',
			url: 'https://github.com/austin-corwin',
			ariaLabel: 'Link to view my projects on github'
		},
		{
			component: LinkedInIcon,
			fill: '#ef6f6c',
			url: 'https://www.linkedin.com/in/austin-corwin-85aa06126/',
			ariaLabel: 'Link to view my professional profile on linkedin'
		},
		{
			component: DownloadIcon,
			fill: '#ef6f6c',
			url: resume,
			ariaLabel: 'Link to download my resume'
		}
	];
</script>

<div class="my-16 flex w-full justify-center space-x-8 lg:my-48 lg:space-x-16">
	{#each iconComponents as { component: Icon, fill, url, ariaLabel }}
		<a
			href={url}
			aria-label={ariaLabel}
			class="text-highlight flex max-w-12 justify-center lg:max-w-24"
		>
			<Icon {fill} />
		</a>
	{/each}
</div>
