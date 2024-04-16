import { Popover } from '@headlessui/react';
import type { MetaFunction } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import AboutBanner from '~/components/AboutBanner/AboutBanner';
import DownArrowIcon from '~/components/DownArrowIcon/DownArrowIcon';
import GithubIcon from '~/components/GithubIcon/GithubIcon';
import LinkIcon from '~/components/LinkIcon/LinkIcon';
import ProjectBanner from '~/components/ProjectBanner/ProjectBanner';
import SectionHeader from '~/components/SectionHeader/SectionHeader';
import SendIcon from '~/components/SendIcon/SendIcon';
import Tag from '~/components/Tag/Tag';
import TechLogo from '~/components/TechLogo/TechLogo';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<div
			id='welcome-screen'
			className='font-nunito-sans text-white bg-cloud-gray'
		>
			{/* Navbar Mobile */}
			<Popover className='sticky top-0 sm:hidden bg-deep-sea-green drop-shadow-figma z-20'>
				<div className='flex items-center py-1 px-5 '>
					<h1 className='text-white font-bold'>Rodney Ho</h1>
					<div className='flex flex-auto justify-end'>
						<Popover.Button className='outline-none'>
							<div className='relative group'>
								<div className='relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all ring-0'>
									<div className='flex flex-col justify-between w-[15px] h-[15px]'>
										<div className='bg-white h-[2px] w-5'></div>
										<div className='bg-white h-[2px] w-5'></div>
										<div className='bg-white h-[2px] w-5'></div>
									</div>
								</div>
							</div>
						</Popover.Button>
					</div>
				</div>
				<Popover.Panel className='absolute w-full bg-cloud-gray outline-none'>
					<Popover.Button className='h-0 w-0'>
						<div className='absolute h-screen w-screen backdrop-blur-sm -z-10 outline-none'></div>
					</Popover.Button>

					<div className='flex flex-col gap-4 p-5 pt-0'>
						<Link
							to='#welcome-screen'
							className='p-3 rounded font-semibold text-white bg-deep-sea-green'
						>
							<Popover.Button className='w-full'>
								Home
							</Popover.Button>
						</Link>

						<Link
							to='#about'
							className='p-3 rounded font-semibold text-white bg-deep-sea-green'
						>
							<Popover.Button className='w-full'>
								About
							</Popover.Button>
						</Link>

						<Link
							to='#experience'
							className='p-3 rounded font-semibold text-white bg-deep-sea-green'
						>
							<Popover.Button className='w-full'>
								Experience
							</Popover.Button>
						</Link>

						<Link
							to='#projects'
							className='p-3 rounded font-semibold text-white bg-deep-sea-green'
						>
							<Popover.Button className='w-full'>
								Projects
							</Popover.Button>
						</Link>

						<Link
							to='#contact'
							className='p-3 rounded font-semibold text-white bg-deep-sea-green'
						>
							<Popover.Button className='w-full'>
								Contact
							</Popover.Button>
						</Link>
					</div>
				</Popover.Panel>
			</Popover>

			{/* NavBar Desktop*/}
			<div className='hidden sm:flex bg-deep-sea-green font-bold px-10 sticky top-0 drop-shadow-figma z-20'>
				<div className='flex flex-auto'>
					<Link
						to='#welcome-screen'
						className='p-3 hover:bg-deep-sea-green-hover'
					>
						Home
					</Link>
				</div>

				<div className='flex justify-center'>
					<Link
						to='#about'
						className='p-3 hover:bg-deep-sea-green-hover'
					>
						About
					</Link>
					<Link
						to='#experience'
						className='p-3 hover:bg-deep-sea-green-hover'
					>
						Experience
					</Link>
					<Link
						to='#projects'
						className='p-3 hover:bg-deep-sea-green-hover'
					>
						Projects
					</Link>
					<Link
						to='#contact'
						className='p-3 hover:bg-deep-sea-green-hover'
					>
						Contact
					</Link>
				</div>
			</div>

			{/* Welcome Screen */}
			<div className='flex flex-col h-screen w-full bg-gradient-to-b from-deep-sea-green to-pastel-green'>
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
				<div className='flex flex-auto justify-center items-center px-7'>
					<div className='flex flex-col gap-10 drop-shadow-figma'>
						<div className='flex flex-col gap-6 text-center md:text-left'>
							<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
								Hello I&apos;m
								<span className='text-plum'> Rodney</span>.
							</h1>
							<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
								I&apos;m a full stack web developer.
							</h1>
						</div>

						<Link
							to='#about'
							className='flex bg-plum w-fit px-4 py-2 md:px-8 md:py-3.5 rounded self-center gap-3 text-nowrap items-center'
						>
							<p className='font-bold text-md md:text-2xl lg:text-4xl'>
								View Portfolio
							</p>
							<DownArrowIcon />
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
					className='px-10 py-10'
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
					className='flex flex-col py-10'
				>
					<SectionHeader>Experience</SectionHeader>
					<div className='flex flex-auto justify-center items-center w-full pb-10 px-10 drop-shadow-figma'>
						<div className='flex flex-col'>
							<img
								src='/assets/images/experience/logo-1.svg'
								alt='logo-1'
							/>
							<img
								src='/assets/images/experience/logo-2.svg'
								alt='logo-2'
							/>
							<img
								src='/assets/images/experience/logo-3.svg'
								alt='logo-3'
							/>
							<img
								src='/assets/images/experience/logo-4.svg'
								alt='logo-4'
							/>
						</div>
					</div>
				</div>
				{/* Projects */}
				<div
					id='projects'
					className='py-10 h-screen'
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
									<div className='flex gap-3 px-3 py-1.5 items-center font-semibold bg-deep-sea-green rounded'>
										Github
										<GithubIcon />
									</div>
									<div className='flex gap-3 px-3 py-1.5 font-semibold text-deep-sea-green-hover bg-deep-sea-green bg-opacity-20 rounded'>
										Link
										<LinkIcon />
									</div>
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
					className='pb-10'
				>
					<SectionHeader>Contacts</SectionHeader>
					<div className='m-10 mt-0'>
						<div className='flex flex-col justify-center gap-5 bg-deep-sea-green mx-auto p-5 rounded max-w-screen-sm'>
							<Form
								className='flex flex-col gap-3'
								method='post'
							>
								<input
									className='bg-faded-sea-green placeholder:text-[#1a7468] placeholder:font-normal text-deep-sea-green rounded font-semibold py-1 px-3 focus-visible:outline-none'
									name='name'
									placeholder='Name'
									type='text'
								/>
								<input
									className='bg-faded-sea-green placeholder:text-[#1a7468] placeholder:font-normal text-deep-sea-green rounded font-semibold py-1 px-3 focus-visible:outline-none'
									name='email'
									placeholder='Email'
									type='email'
								/>
								<textarea
									className='bg-faded-sea-green placeholder:text-[#1a7468] placeholder:font-normal text-deep-sea-green rounded font-semibold py-3 px-3 focus-visible:outline-none'
									name='message'
									placeholder='Send me a message!'
									rows={6}
								/>
							</Form>
							<div className='flex justify-end text-deep-sea-green'>
								<button
									className='flex gap-2 bg-faded-sea-green px-3 py-1.5 rounded font-semibold'
									type='submit'
								>
									Send
									<SendIcon />
								</button>
							</div>
						</div>
					</div>

					{/* <div className='flex flex-col bg-deep-sea-green mx-5 p-5 rounded'>
						<div className='flex flex-col gap-3 pb-6'>
							<h1 className='font-extrabold text-4xl'>
								Contact Me
							</h1>
							<p className='font-semibold text-sm'>
								Send me a message! My email is{' '}
								<a
									href='mailto: rodneyrhkk@gmail.com'
									className='underline'
								>
									rodneyrhkk@gmail.com
								</a>
								.
							</p>
						</div>
						<div className='flex justify-end text-deep-sea-green'>
							<a
								href='mailto: rodneyrhkk@gmail.com'
								className='flex gap-2 bg-faded-sea-green px-3 py-1.5 rounded font-semibold'
							>
								Send
								<SendIcon />
							</a>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
