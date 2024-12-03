import evolvek9 from '../static/images/evolveK9Screen.png';
import liquidMiles from '../static/images/liquidMilesScreen.png';
import austinPortfolio from '../static/images/austinPortfolioScreen.png';

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
			'crafting code, tunes, and good times | experienced software engineer, music maker, and craft beer enthusiast',
		cta: {
			text: 'Get in touch',
			url: 'mailto:austincorwin5@gmail.com'
		}
	},
	projects: {
		id: 'projects',
		title: 'Projects',
		recentProjects: [
			{
				title: 'Evolve K9',
				description:
					'Evolve K9 is a dog training business that I built a website for. The site is built with Next.js and Tailwind CSS. It utilizes the Google Cloud Platform API to send an email to the business owner and log the record to a google sheet when filled out.',
				url: 'https://evolvek9training.com',
				sourceUrl: 'https://github.com/austincorwin',
				image: {
					src: evolvek9,
					alt: 'Evolve K9'
				}
			},
			{
				title: 'Liquid Miles',
				description:
					'Liquid Miles is an event that I created and annually host with my wife and all my crazy friends. The site was built early in my software career utilizing Nuxt.js and CSS hosted on Netlify. A Next.js re-work of this site is in progress.',
				url: 'https://liquidmiles.com',
				sourceUrl: 'https://github.com/austin-corwin/liquidmiles-dev',
				image: {
					src: liquidMiles,
					alt: 'Evolve K9'
				}
			},
			{
				title: 'This Portfolio Site',
				description:
					'This site is built with SvelteKit and Tailwind CSS. The site is hosted on Vercel. With a focus on performance and accessibility, I built this site to showcase my work and experience. I hope you enjoy!',
				sourceUrl: 'https://github.com/austin-corwin/austin-corwin-portfolio',
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
	experience: {
		id: 'experience',
		title: 'My Experience',
		content: [
			{
				titles: [
					'Software Engineer II - Manager/Tech Lead',
					'Software Engineer I',
					'Contract Software Engineer'
				],
				company: 'BrewLogix',
				dateRange: 'Mar 2022 - Oct 2024',
				description:
					'At BrewLogix, I tackled exciting challenges in software development, leadership, and team building while working on BreweryDB and MarketMyBrewery. Starting as a Software Engineer I and later growing into a tech lead and management role (Software Engineer II), I worked on various technical and strategic responsibilities. I led cross-functional teams to develop Next.js web applications and Expo mobile apps, ensuring device compatibility. Along the way, I collaborated with back-end teams, UI/UX designers, and stakeholders to plan and deliver features that blended functionality with flair. I also mentored junior developers, helping them grow into their roles while refining workflows to improve efficiency and code health. My efforts included managing app lifecycles, integrating error reporting systems, and optimizing the user experience across platforms.',
				details: [
					'One of my key achievements was unifying multiple applications into a single monorepo. This streamlined development experience not only saved time but also enhanced productivity, making the entire process more efficient and effective.',
					'Fostered growth among junior engineers by providing tailored professional development plans and establishing a developer testing platform',
					'Optimized workflows by implementing robust error reporting systems, enabling swift identification and resolution of platform-specific issues',
					'Unified multiple applications into a single monorepo for a streamlined development experience.',
					'Architected a cutting-edge interactive map feature using Mapbox and React, enhancing usability with precise, optimized data.',
					'Supported junior developers through mentorship and personalized growth plans while improving recruitment processes with a developer candidate testing platform.',
					'Deploying Android and iOS apps for BreweryDB was a task I undertook with utmost care and attention to detail. The flawless execution at every development lifecycle stage instilled a sense of reliability and trust in our work.',
					'By transitioning JavaScript to TypeScript and implementing Redux, I significantly improved code quality, reduced bugs, and enhanced scalability. This step forward in technology made our development process more advanced and efficient, instilling a sense of progress and advancement.'
				],
				achievements: []
			},
			{
				titles: ['Web Developer', 'Junior Web Developer', 'Digital Media Buyer'],
				company: 'Moxie Sozo',
				dateRange: 'Jul 2019 - Mar 2022',
				description:
					'My time at Moxie Sozo was a journey of growth, creativity, and technical mastery journey. Starting as a Junior Web Developer, I quickly became a trusted team member, building responsive custom websites and expanding my PHP, JavaScript, and WordPress skills. I took on increasing responsibilities, eventually leading efforts during a departmental transition. From crafting bespoke WordPress themes to managing offshore support, I ensured projects were completed smoothly, and clients received exceptional results. Testing for accessibility, performance, and quality was a cornerstone of my approach, and I loved collaborating with account managers to ensure clear communication and successful outcomes.',
				details: [
					`Delivering high-quality, custom WordPress websites across industries, from e-commerce to tourism, was a source of great accomplishment for me. It reassured me of my capabilities and the trust clients had in our team's work.`,
					'Played a pivotal leadership role during a transitional phase, effectively managing tasks and keeping projects on track without missing a beat, showcasing my strong leadership skills',
					'Conducted rigorous quality assurance testing to maintain high standards of accessibility and performance',
					'My collaboration with account managers was not just efficient, but also a testament to the strength of our teamwork. Together, we efficiently fulfilled client requests and maintained strong relationships'
				],
				achievements: []
			},
			{
				titles: ['Programmatic Specialist', 'Programmatic Campaign Assitant'],
				company: 'Coegi',
				dateRange: 'May 2017 - Aug 2019',
				description:
					'As a Programmatic Specialist, I mastered the art and science of running digital advertising campaigns that delivered real results. My role involved managing end-to-end programmatic media buying campaigns, from strategizing and setting them up to optimizing performance and reporting to clients. I loved diving into the data to uncover insights that could fine-tune performance and exceed client expectations. Balancing creativity and analytics, I ensured campaigns met KPIs and told a compelling story through carefully managed metrics.',
				details: [
					`Successfully managed programmatic media buying campaigns across various platforms, achieving above-benchmark click-through rates and ROI, a feat that I take great pride in`,
					'Streamlined reporting processes to deliver clear, actionable insights to clients, fostering a culture of trust and transparency',
					'By analyzing performance data, A/B testing creative elements, and fine-tuning targeting strategies, I have consistently delivered measurable improvements in conversion rates, demonstrating my ability to deliver tangible results',
					'Cultivated strong client relationships by clearly communicating performance metrics and aligning campaigns with their strategic goals'
				],
				achievements: []
			},
			{
				titles: [],
				company: 'University of Missouri, Columbia',
				dateRange: 'Aug 2014 - May 2018',
				description: '',
				details: [],
				achievements: [
					'Bachelor of Science in Business Administration, Marketing',
					'Minor in Information Technology'
				]
			}
		]
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
