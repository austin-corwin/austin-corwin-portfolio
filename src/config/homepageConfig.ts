import evolvek9 from '../static/images/evolvek9.png';
import liquidMiles from '../static/images/liquidmiles.png';
import austinPortfolio from '../static/images/austinPortfolio.png';

const homepageConfig = {
	title: 'Austin Corwin - Portfolio',
	description: 'Welcome to the portfolio of Austin Corwin, a passionate software developer.',
	hero: {
		id: 'hero',
		title: {
			text: 'my name is',
			decoratedText: 'Austin Corwin'
		},
		subtitle: 'oh hey there,',
		content:
			'experienced web and mobile software engineer, avid cyclist, beer drinker, and musician',
		cta: {
			text: 'Get in touch',
			url: 'mailto:austincorasdfadsfwin5@gmail.com'
		}
	},
	projects: {
		id: 'projects',
		title: 'Projects',
		recentProjects: [
			{
				title: 'Evolve K9',
				description:
					'Evolve K9 is a dog training business that I built a website for. The site is built with Next.js and Tailwind CSS. It features a contact form that sends an email to the business owner when filled out.',
				url: 'https://evolvek9.com',
				sourceUrl: 'github.com/austincorwin',
				image: {
					src: evolvek9,
					alt: 'Evolve K9'
				}
			},
			{
				title: 'Liquid Miles',
				description:
					'Liquid Miles is a mobile app that I built with React Native. It is a mileage tracking app that allows users to track their mileage for multiple vehicles. The app is available on the Google Play Store.',
				url: 'https://play.google.com/store/apps/details?id=com.liquidmiles',
				sourceUrl: 'github.com/austincorwin',
				image: {
					src: liquidMiles,
					alt: 'Evolve K9'
				}
			},
			{
				title: 'This Portfolio Site',
				description:
					'This site is built with SvelteKit and Tailwind CSS. It features a contact form that sends an email to me when filled out. The site is hosted on Vercel.',
				url: '/',
				sourceUrl: 'github.com/austincorwin',
				image: {
					src: austinPortfolio,
					alt: 'Evolve K9'
				}
			}
		]
	},
	about: {
		id: 'about',
		title: 'About Me',
		content:
			"I'm an experienced mobile and web software engineer with a passion for making things work. I'm also a musician, avid cyclist, and craft beer lover. I'm currently open to new opportunities in the software engineering world. I love to collaborate so hit me up if you'd like to work on a project! I'm an experienced mobile and web software engineer with a passion for making things work. I'm also a musician, avid cyclist, and craft beer lover. I'm currently open to new opportunities in the software engineering world. I love to collaborate so hit me up if you'd like to work on a project! I'm an experienced mobile and web software engineer with a passion for making things work. I'm also a musician, avid cyclist, and craft beer lover. I'm currently open to new opportunities in the software engineering world. I love to collaborate so hit me up if you'd like to work on a project! I'm an experienced mobile and web software engineer with a passion for making things work. I'm also a musician, avid cyclist, and craft beer lover. I'm currently open to new opportunities in the software engineering world. I love to collaborate so hit me up if you'd like to work on a project!",
		image: {
			src: 'https://via.placeholder.com/150',
			alt: 'Austin Corwin'
		}
	},
	skills: {
		id: 'skills',
		title: 'Skills',
		content: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'HTML']
	},
	resources: {
		id: 'resources',
		title: 'Resources',
		content: {
			email: 'austin.corwin@example.com',
			linkedIn: 'https://www.linkedin.com/in/austincorwin',
			github: 'https://github.com/austincorwin'
		}
	}
};

export default homepageConfig;
