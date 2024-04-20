import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { Link, json, useFetcher } from '@remix-run/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ErrorResponse, Resend } from 'resend';
import AboutBanner from '~/components/AboutBanner/AboutBanner';
import AmicisLogo from '~/components/AmicisLogo/AmicisLogo';
import BluonLogo from '~/components/BluonLogo/BluonLogo';
import ConfirmationModal from '~/components/ConfirmationModal/ConfirmationModal';
import DownArrowIcon from '~/components/DownArrowIcon/DownArrowIcon';
import GMRLogo from '~/components/GMRLogo/GMRLogo';
import GithubIcon from '~/components/GithubIcon/GithubIcon';
import HCKTechnologiesLogo from '~/components/HCKTechnologiesLogo/HCKTechnologiesLogo';
import LinkIcon from '~/components/LinkIcon/LinkIcon';
import Overlay from '~/components/Overlay/Overlay';
import ProjectBanner from '~/components/ProjectBanner/ProjectBanner';
import SectionHeader from '~/components/SectionHeader/SectionHeader';
import SendIcon from '~/components/SendIcon/SendIcon';
import Tag from '~/components/Tag/Tag';
import TechLogo from '~/components/TechLogo/TechLogo';

export const meta: MetaFunction = () => {
	return [
		{ title: "Rodney's Portfolio" },
		{ name: 'Rodney', content: "Welcome to Rodney's portfolio!" },
	];
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const name = String(formData.get('name'));
	const email = String(formData.get('email'));
	const message = String(formData.get('message'));

	const errors: { [key: string]: string | ErrorResponse } = {};

	if (!name) {
		errors.name = 'Name is required';
	}

	if (!email) {
		errors.email = 'Email is required';
	}

	if (!email.includes('@')) {
		errors.email = 'Invalid Email';
	}

	if (!message) {
		errors.message = 'Message is required';
	}

	if (Object.keys(errors).length > 0) {
		return json({ errors });
	}

	const { error } = await resend.emails.send({
		from: 'Roho2k <roho2k@roho.dev>',
		to: 'rodneyrhkk@gmail.com',
		subject: `${name} contacted you from my portfolio`,
		html: message,
		reply_to: email,
	});

	if (error != null) {
		errors.resendError = error;
		return json({ errors });
	}

	await resend.emails.send({
		from: 'Rodney Ho <no-reply@roho.dev>',
		to: email,
		subject: "I've received your message. Thanks!",
		html: '<p>Thanks for contacting me! I have received your message. Please allow me 48 business hours to get back to you.</p><p>Thanks, Rodney.</p><p>Please do not reply to this email. This is an automated message and any replies will not be sent to my inbox.</p>',
	});

	const data = Object.fromEntries(formData);
	return json({ data });
};

export default function Index() {
	const fetcher = useFetcher();
	const [open, setOpen] = useState(false);

	const [welcomeRef, welcomeInView] = useInView({
		threshold: 0.4,
	});
	const [aboutRef, aboutInView] = useInView({
		threshold: 0.2,
		rootMargin: '-60px',
	});
	const [experienceRef, experienceInView] = useInView({
		threshold: 0.4,
		rootMargin: '-60px',
	});
	const [projectsRef, projectsInView] = useInView({
		threshold: 0.2,
		rootMargin: '-60px',
	});
	const [contactRef, contactInView] = useInView({
		threshold: 0.2,
		rootMargin: '-60px',
	});

	const [welcomeHeaderRef, welcomeHeaderInView] = useInView({
		threshold: 0.2,
		rootMargin: '-60px',
	});

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(
		function openModal() {
			if (fetcher.state === 'idle' && !!fetcher.data) {
				handleOpen();
			}

			return;
		},
		[fetcher.state, fetcher.data]
	);

	return (
		<div
			id='top'
			className='font-nunito-sans text-white bg-cloud-gray'
		>
			{/* NavBar Desktop*/}
			<div className='hidden sm:flex bg-deep-sea-green font-bold px-10 py-[6px] sticky top-0 drop-shadow-figma z-20'>
				<div className='flex flex-auto'>
					<Link
						to='#top'
						className={classNames(
							'p-3 hover:bg-deep-sea-green-hover rounded-md',
							{
								'text-deep-sea-green bg-white hover:bg-white hover:bg-opacity-80':
									welcomeInView,
							}
						)}
					>
						Home
					</Link>
				</div>

				<div className='flex justify-center'>
					<Link
						to='#about'
						className={classNames(
							'p-3 hover:bg-deep-sea-green-hover rounded-md',
							{
								'text-deep-sea-green bg-white hover:bg-white hover:bg-opacity-80':
									aboutInView && !welcomeInView,
							}
						)}
					>
						About
					</Link>
					<Link
						to='#experience'
						className={classNames(
							'p-3 hover:bg-deep-sea-green-hover rounded-md',
							{
								'text-deep-sea-green bg-white hover:bg-white hover:bg-opacity-80':
									experienceInView && !aboutInView,
							}
						)}
					>
						Experience
					</Link>
					<Link
						to='#projects'
						className={classNames(
							'p-3 hover:bg-deep-sea-green-hover rounded-md',
							{
								'text-deep-sea-green bg-white hover:bg-white hover:bg-opacity-80':
									projectsInView && !experienceInView,
							}
						)}
					>
						Projects
					</Link>
					<Link
						to='#contact'
						className={classNames(
							'p-3 hover:bg-deep-sea-green-hover rounded-md',
							{
								'text-deep-sea-green bg-white hover:bg-white hover:bg-opacity-80':
									contactInView && !projectsInView,
							}
						)}
					>
						Contact
					</Link>
				</div>
			</div>

			{/* Welcome Screen */}
			<div
				className='flex flex-col h-screen w-full bg-gradient-to-b from-deep-sea-green to-pastel-green'
				id='welcome'
				ref={welcomeRef}
			>
				<section className='relative'>
					<img
						className='absolute top-0 mix-blend-difference'
						src='/assets/waves/wave-1.svg'
						alt='wave-1'
					/>
					<img
						className='absolute top-0 mix-blend-difference'
						src='/assets/waves/wave-2.svg'
						alt='wave-2'
					/>
					<img
						className='absolute top-0 mix-blend-color-dodge'
						src='/assets/waves/wave-3.svg'
						alt='wave-3'
					/>
					<img
						className='absolute top-0'
						src='/assets/waves/wave-4.svg'
						alt='wave-4'
					/>
				</section>
				<div className='flex flex-auto justify-center items-center px-10'>
					<div
						className='flex flex-col gap-10 drop-shadow-figma'
						ref={welcomeHeaderRef}
					>
						<div className='flex flex-col gap-4 text-center md:text-left'>
							<h1
								className={classNames(
									'font-bold text-2xl md:text-4xl lg:text-6xl',
									{
										'animate-fade-right':
											welcomeHeaderInView,
									}
								)}
							>
								Hello I&apos;m
								<span className='text-plum'> Rodney</span>.
							</h1>
							<h1
								className={classNames(
									'font-bold text-2xl md:text-4xl lg:text-6xl',
									{ 'animate-fade-left': welcomeHeaderInView }
								)}
							>
								I&apos;m a full stack web developer.
							</h1>
						</div>

						<Link
							to='#about'
							className={classNames(
								'flex bg-plum w-fit px-4 py-2 md:px-8 md:py-3.5 rounded self-center gap-3 text-nowrap items-center',
								{ 'animate-fade-up': welcomeHeaderInView }
							)}
						>
							<p className='font-bold text-md md:text-2xl lg:text-4xl'>
								View Portfolio
							</p>
							<DownArrowIcon className='w-5 h-5 md:w-10 md:h-10' />
						</Link>
					</div>
				</div>
			</div>
			{/* End Welcome Screen */}

			{/* Content */}
			{/* About */}
			<div className='bg-cloud-gray max-w-screen-xl mx-auto'>
				<div
					id='about'
					className='px-10 py-10 min-h-screen'
					ref={aboutRef}
				>
					<SectionHeader>About Me</SectionHeader>
					<div className='flex justify-center md:pt-10 lg:pt-20'>
						<AboutBanner>
							<div className='flex flex-col gap-5 lg:max-w-xl'>
								<div className='flex justify-center items-center'>
									<img
										className='w-[150px] h-[150px]'
										src='/assets/images/about/persona.svg'
										alt='persona'
									/>
								</div>
								<div className='flex flex-col font-semibold text-sm md:text-base bg-deep-sea-green rounded py-3 px-5 '>
									<p className='pb-5'>
										<span className='text-xl md:text-4xl'>
											H
										</span>
										ey! I&apos;m Rodney, a full stack
										developer with expertise in web
										development. My experience spans
										creating interactive user interfaces
										using React, designing RESTful APIs with
										NodeJS and Express, and managing SQL and
										NoSQL databases like PostgreSQL and
										MongoDB.
									</p>

									<p className='pb-5'>
										I have a strong passion for building
										robust and clean software. My focus on
										best practices and continuous learning
										ensures that the software I build not
										only meets current requirements but also
										adapts seamlessly to future challenges.
									</p>

									<p className='pb-3'>
										When I&apos;m not at my computer I like
										to spend my time reading, keeping fit,
										and playing with my cats.
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-10 lg:gap-0'>
								<div className='flex flex-auto items-end gap-10'>
									<TechLogo
										src='/assets/images/about/nodejs.svg'
										alt='nodejs-logo'
									>
										NodeJs
									</TechLogo>
									<TechLogo
										src='/assets/images/about/react.svg'
										alt='react-logo'
									>
										React
									</TechLogo>
									<TechLogo
										src='/assets/images/about/typescript.svg'
										alt='typescript-logo'
									>
										TypeScript
									</TechLogo>
								</div>
								<div className='flex flex-auto items-end gap-10'>
									<TechLogo
										src='/assets/images/about/remix.svg'
										alt='remix-logo'
									>
										Remix
									</TechLogo>
									<TechLogo
										src='/assets/images/about/supabase.svg'
										alt='supabase-logo'
									>
										Supabase
									</TechLogo>
									<TechLogo
										src='/assets/images/about/prisma.svg'
										alt='prisma-logo'
									>
										Prisma
									</TechLogo>
								</div>
								<div className='flex flex-auto items-end gap-10'>
									<TechLogo
										src='/assets/images/about/javascript.svg'
										alt='javascript-logo'
									>
										Javascript
									</TechLogo>
									<TechLogo
										src='/assets/images/about/html.svg'
										alt='html-logo'
									>
										HTML
									</TechLogo>
									<TechLogo
										src='/assets/images/about/css.svg'
										alt='css-logo'
									>
										CSS
									</TechLogo>
								</div>
							</div>
						</AboutBanner>
					</div>
				</div>
				{/* Experience */}
				<div
					id='experience'
					className='flex flex-col py-10 min-h-screen'
					ref={experienceRef}
				>
					<SectionHeader>Experience</SectionHeader>
					<div className='flex flex-col w-full pb-10 px-10 drop-shadow-figma'>
						<div className='flex flex-col items-center md:flex-row md:justify-center w-full'>
							<Overlay className='w-full max-w-64 md:max-w-96'>
								<Overlay.Background>
									<BluonLogo />
								</Overlay.Background>
								<Overlay.Content className='scrollbar scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-corner-rounded-lg scrollbar-track-slate-400 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600'>
									<div className='text-left '>
										<h1 className='font-semibold text-2xl leading-10'>
											Full Stack Developer
										</h1>
										<p className='text-blue-500 font-bold text-lg'>
											@Bluon
										</p>
										<p className='text-dark-gray text-sm leading-8'>
											Dec 2021 - Aug 2023
										</p>
										<ul className='flex flex-col gap-5 list-disc list-inside pt-3 font-semibold'>
											<li>
												Spearheaded the implementation
												of Bluon Distributor Software
												Systems, congregating 55% of all
												U.S. HVAC technicians to connect
												to our app using React, Redux,
												TypeScript, Tailwind, and PHP
												Laravel.
											</li>
											<li>
												Responsible for seamlessly
												integrating and connecting all
												products to Stripe API for
												payment processing using React,
												Nodejs, TypeScript and Tailwind.
											</li>
											<li>
												Leveraged React, Redux,
												TypeScript, Tailwind for robust
												state management to craft a
												dynamic shopping cart that made
												adding and removing items or
												customizing items simple.
											</li>
											<li>
												Implemented forms that
												automatically validated user
												input in the frontend and
												backend using React, React Hook
												Forms API, Yup, TypeScript,
												Tailwind, and NodeJs
											</li>
											<li>
												Employed GCP Serverless Cloud
												Functions and NodeJs to swiftly
												deploy endpoints for adding
												entries and generating
												prize-winning opportunities in
												spin wheel contests.
											</li>
											<li>
												Engineered a responsive and
												randomized spin wheel across all
												devices, delivering an authentic
												gambling experience using React,
												TypeScript, and Tailwind.
											</li>
											<li>
												Orchestrated seamless data
												tracking by integrating HubSpot,
												BigQuery, DBT and various
												technologies to monitor prize
												winners, entrants, and total
												winnings using Nodejs.
											</li>
										</ul>
									</div>
								</Overlay.Content>
							</Overlay>

							<Overlay className='w-full max-w-64 md:max-w-96'>
								<Overlay.Background>
									<HCKTechnologiesLogo />
								</Overlay.Background>
								<Overlay.Content className='scrollbar scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-corner-rounded-lg scrollbar-track-slate-400 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600'>
									<div className='text-left'>
										<h1 className='font-semibold text-2xl leading-10'>
											Full Stack Developer - Contractor
										</h1>
										<p className='text-red-500 font-bold text-lg'>
											@HCK Technologies
										</p>
										<p className='text-dark-gray text-sm leading-8'>
											Dec 2020 - Dec 2021
										</p>
										<ul className='flex flex-col gap-5 list-disc list-inside pt-3 font-semibold'>
											<li>
												Championed the development and
												upkeep of a comprehensive
												ecommerce application utilizing
												cutting-edge MERN stack
												technologies, microservices
												architecture, Docker,
												Kubernetes, GraphQL, and Apollo.
											</li>
											<li>
												Overhauled a legacy order
												management system into a modern
												web-based platform, enhancing
												UI/UX friendliness and
												optimizing application speed;
												this included utilization of
												React, React Redux, Redux Thunk,
												Node, and MongoDB for seamless
												transformation.
											</li>
											<li>
												Tasked with successfully
												integrating payment systems into
												multiple applications using
												React, TypeScript, and Stripe,
												ensuring secure and efficient
												transaction processing.
											</li>
										</ul>
									</div>
								</Overlay.Content>
							</Overlay>
						</div>
						<div className='flex flex-col items-center md:flex-row md:justify-center w-full'>
							<Overlay className='w-full max-w-64 md:max-w-96'>
								<Overlay.Background>
									<AmicisLogo />
								</Overlay.Background>
								<Overlay.Content className='scrollbar scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-corner-rounded-lg scrollbar-track-slate-400 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600'>
									<div className='text-left'>
										<h1 className='font-semibold text-2xl leading-10'>
											Software Engineer
										</h1>
										<p className='text-orange-400 font-bold text-lg'>
											@Amicis
										</p>
										<p className='text-dark-gray text-sm leading-8'>
											Jan 2019 - Dec 2020
										</p>
										<ul className='flex flex-col gap-5 list-disc list-inside pt-3 font-semibold'>
											<li>
												Headed the initiative to
												implement and design a new
												customer checkout process
												tailored for both desktop and
												mobile viewing, enhancing user
												experience and accessibility
												using Dynamic 365, KnockoutJs
												and C#.
											</li>
											<li>
												Streamlined the user interface
												of the point-of-sale system,
												significantly reducing user
												interaction complexity,
												minimizing fatigue, and
												eliminating unnecessary
												repetition using Dynamic 365,
												KnockoutJs and C#.
											</li>
											<li>
												Developed an API to facilitate
												seamless communication between
												eCommerce and point of sale
												applications, ascertaining
												consistent data exchange and
												optimal operations using C#.
											</li>
										</ul>
									</div>
								</Overlay.Content>
							</Overlay>

							<Overlay className='w-full max-w-64 md:max-w-96'>
								<Overlay.Background>
									<GMRLogo />
								</Overlay.Background>
								<Overlay.Content className='scrollbar scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-corner-rounded-lg scrollbar-track-slate-400 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600'>
									<div className='text-left'>
										<h1 className='font-semibold text-2xl leading-10'>
											Software Engineer Intern
										</h1>
										<p className='text-black font-bold text-lg'>
											@GMR Marketing
										</p>
										<p className='text-dark-gray text-sm leading-8'>
											June 2015 - Sept 2015
										</p>
										<ul className='flex flex-col gap-5 list-disc list-inside pt-3 font-semibold'>
											<li>
												Enhanced SSRS reports by
												rewriting queries to incorporate
												additional data, leveraging MS
												SQL Server&apos;s capabilities.
											</li>
											<li>
												Built and managed a web
												application utilizing ASP.NET
												MVC framework and C#, ensuring
												smooth functionality and user
												experience.
											</li>
											<li>
												Introduced user-friendly input
												forms within the application,
												enabling users to conveniently
												submit feedback and suggestions
												using ASP.NET MVC framework.
											</li>
											<li>
												Strengthened the robustness of
												business logic through the
												creation of comprehensive unit
												tests, thereby increasing code
												coverage and ensuring
												reliability using C#.
											</li>
										</ul>
									</div>
								</Overlay.Content>
							</Overlay>
						</div>
					</div>
				</div>
				{/* Projects */}
				<div
					id='projects'
					className='py-10 min-h-screen'
					ref={projectsRef}
				>
					<SectionHeader>Projects</SectionHeader>
					<div className='mx-10 md:pt-10 lg:pt-20'>
						<ProjectBanner className='justify-center'>
							<ProjectBanner.LeftPanel className='lg:max-w-lg'>
								<div className='flex justify-center'>
									<img
										className='rounded'
										src='/assets/images/projects/project-1.svg'
										alt='project-1'
									/>
								</div>

								<div className='flex gap-5 justify-center'>
									<a
										className='flex gap-3 px-3 py-1.5 items-center font-semibold bg-deep-sea-green rounded'
										href='https://github.com/roho2k/my-portfolio'
										target='_blank'
										rel='noopener noreferrer'
									>
										Github
										<GithubIcon />
									</a>
									<a
										className='flex gap-3 px-3 py-1.5 font-semibold text-deep-sea-green-hover bg-deep-sea-green bg-opacity-20 rounded'
										href='https://www.roho.dev/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Link
										<LinkIcon />
									</a>
								</div>
							</ProjectBanner.LeftPanel>

							<ProjectBanner.RightPanel className='text-deep-sea-green lg:max-w-md'>
								<div className=''>
									<h2 className='font-bold text-xl md:text-2xl lg:text-4xl'>
										Portfolio 2024
									</h2>
									<p className='border-b-2 border-faded-sea-green font-semibold text-xs md:text-sm lg:text-base py-2'>
										By Me
									</p>
									<p className='font-semibold text-sm md:text-base lg:text-lg pt-3'>
										A project on my portfolio designed in
										Figma and built using React, Remix
										Framework, and Tailwind.
										{/* Check out in detail how I
										approached this project in the link
										button above! */}
									</p>
									<div className='flex flex-wrap gap-3 pt-5 lg:text-lg'>
										<Tag>React</Tag>
										<Tag>Remix</Tag>
										<Tag>Tailwind</Tag>
										<Tag>Figma</Tag>
									</div>
								</div>
							</ProjectBanner.RightPanel>
						</ProjectBanner>
					</div>
				</div>

				{/* Contact */}
				<div
					id='contact'
					className='pb-10 min-h-screen'
					ref={contactRef}
				>
					<SectionHeader>Contact</SectionHeader>
					<div className='m-10 mt-0'>
						<div className='flex flex-col justify-center bg-deep-sea-green mx-auto p-5 rounded max-w-screen-sm'>
							<fetcher.Form
								className='flex flex-col gap-3'
								method='post'
							>
								<input
									className='bg-faded-sea-green placeholder:text-[#1a7468] placeholder:font-normal text-deep-sea-green rounded font-semibold py-1 px-3 focus-visible:outline-none'
									name='name'
									placeholder='Name'
									type='text'
									required
								/>

								<input
									className='bg-faded-sea-green placeholder:text-[#1a7468] placeholder:font-normal text-deep-sea-green rounded font-semibold py-1 px-3 focus-visible:outline-none'
									name='email'
									placeholder='Email'
									type='email'
									required
								/>

								<textarea
									className='bg-faded-sea-green placeholder:text-[#1a7468] placeholder:font-normal text-deep-sea-green rounded font-semibold py-3 px-3 focus-visible:outline-none'
									name='message'
									placeholder='Send me a message!'
									rows={6}
									required
								/>
								<div className='flex justify-end text-deep-sea-green'>
									<button
										className='flex gap-2 bg-faded-sea-green px-3 py-1.5 rounded font-semibold'
										type='submit'
									>
										Send
										<SendIcon />
									</button>
								</div>
							</fetcher.Form>
						</div>
					</div>
					<ConfirmationModal
						open={open}
						onClose={handleClose}
					/>
				</div>
			</div>
		</div>
	);
}
