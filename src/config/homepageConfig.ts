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
		content: `<p>Hi there! I’m Austin Corwin, a software engineer with over 4 years of experience building complex software applications and solving technical puzzles that make my inner problem-solver do a happy dance. Originally from the Midwest, I’m now living the Colorado dream, complete with bikes, fly rods, and hiking boots. If it involves fresh air, high peaks, a winding trail, or a humbling journey, count me in!</p>

		<p>When I’m not coding, I’m chasing adventures on two wheels. I’ve conquered epic rides like the Double Bypass (yes, that’s 65+ miles and over 6,000 feet of elevation gain), sprint triathlons, criterium races, and even a cross-state ride on Missouri’s Katy Trail. Cycling and endurance sports are my way of pushing limits and proving to myself that there’s always room to grow.</p>

		<p>Speaking of growth, I’m passionate about learning—both personally and professionally. I geek out over understanding the “why” and “how” behind the things that make our world tick. Software engineering is a perfect fit because the learning never stops, and I love the idea that there’s no ceiling to what I can discover and create.</p>

		<p>When it’s time to unplug, I turn to music. I’ve been playing drums for 18 years and guitar for 7, and I have a handful of singles on Spotify that I’m pretty proud of. Music is where my heart gets to play, and whether I’m performing or creating, it’s my favorite way to connect with people.</p>

		<p>I’m also a huge foodie and self-proclaimed craft beer and whiskey enthusiast. To me, life is better when you savor it, whether that’s through delicious meals, travels to explore the stunning U.S. National Parks or moments spent with my incredible wife, our dog, and my close-knit family. They’re my ultimate support system and the reason behind everything I do.</p>

		<p>Oh, and a little throwback to my Mizzou days: I was actively involved in community service organizations like Mizzou Alternative Breaks and Caring for Columbia, and I even helped lead Columbia’s largest single-day service event. Service is still very important to me, and giving back has always been a part of my journey.</p>

		<p>So that’s me in a nutshell—an adventurer, coder, musician, and lifelong learner who’s all about enjoying the ride and making meaningful connections along the way. Let’s build something amazing together!</p>`,
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
					'At BrewLogix, I tackled exciting challenges in software development, leadership, and team building while working on <a class="text-highlight hover:underline" href="https://www.brewerydb.com/">BreweryDB</a> and <a class="text-highlight hover:underline" href="https://www.marketmybrewery.com/">MarketMyBrewery</a>. Starting as a Software Engineer I and later growing into a tech lead and management role (Software Engineer II), I worked on various technical and strategic responsibilities. I led cross-functional teams to develop Next.js web applications and Expo mobile apps, ensuring device compatibility. Along the way, I collaborated with back-end teams, UI/UX designers, and stakeholders to plan and deliver features that blended functionality with flair. I also mentored junior developers, helping them grow into their roles while refining workflows to improve efficiency and code health. My efforts included managing app lifecycles, integrating error reporting systems, and optimizing the user experience across platforms.',
				details: [
					'Unified multiple applications into a single co-located monorepo application called the <a class="text-highlight hover:underline" href="https://app.brewlogix.com">BrewLogix App</a>. This streamlined development experience not only saved time but also enhanced productivity, making the entire process more efficient and effective.',
					'Fostered growth among junior engineers by providing tailored professional development plans and establishing a developer testing platform',
					'Optimized workflows by implementing robust error reporting systems, enabling swift identification and resolution of platform-specific issues',
					'Architected a cutting-edge <a class="text-highlight hover:underline" href="https://www.brewerydb.com/map?option=breweries-for-you">interactive map feature</a> using Mapbox and React, enhancing usability with precise, optimized data.',
					'Supported junior developers through mentorship and personalized growth plans while improving recruitment processes with a developer candidate testing platform.',
					'Deploying <a class="text-highlight hover:underline" href="https://play.google.com/store/search?q=brewerydb&c=apps&hl=en_US">Android</a> and <a class="text-highlight hover:underline" href="https://apps.apple.com/us/app/brewerydb/id6449491682">iOS</a> apps for BreweryDB was a task I undertook with utmost care and attention to detail. The flawless execution at every development lifecycle stage instilled a sense of reliability and trust in our work.',
					'By transitioning JavaScript to TypeScript and implementing Redux, I significantly improved code quality, reduced bugs, and enhanced scalability. This step forward in technology made our development process more advanced and efficient, instilling a sense of progress and advancement.'
				],
				achievements: []
			},
			{
				titles: ['Web Developer', 'Junior Web Developer', 'Digital Media Buyer'],
				company: 'Moxie Sozo',
				dateRange: 'Jul 2019 - Mar 2022',
				description:
					'My time at <a class="text-highlight hover:underline" href="https://moxiesozo.com/">Moxie Sozo</a> was a journey of growth, creativity, and technical mastery journey. Starting as a Junior Web Developer, I quickly became a trusted team member, building responsive custom websites and expanding my PHP, JavaScript, and WordPress skills. I took on increasing responsibilities, eventually leading efforts during a departmental transition. From crafting bespoke WordPress themes to managing offshore support, I ensured projects were completed smoothly, and clients received exceptional results. Testing for accessibility, performance, and quality was a cornerstone of my approach, and I loved collaborating with account managers to ensure clear communication and successful outcomes.',
				details: [
					`Delivered high-quality custom Shopify and WordPress websites across industries, from e-commerce to tourism, was a source of great accomplishment for me. It reassured me of my capabilities and the trust clients had in our team's work.`,
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
