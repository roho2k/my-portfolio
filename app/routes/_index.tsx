import { Popover } from '@headlessui/react';
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import SectionHeader from '~/components/SectionHeader/SectionHeader';
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
								Hello I'm
								<span className='text-plum'> Rodney</span>.
							</h1>
							<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
								I'm a full stack web developer.
							</h1>
						</div>

						<Link
							to='#about'
							className='flex bg-plum w-fit px-4 py-2 md:px-8 md:py-3.5 rounded self-center gap-3 text-nowrap items-center'
						>
							<p className='font-bold text-md md:text-2xl lg:text-4xl'>
								View Portfolio
							</p>
							<svg
								className='h-6 w-6 md:h-8 md:w-8 '
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line
									x1='12'
									y1='5'
									x2='12'
									y2='19'
								/>
								<polyline points='19 12 12 19 5 12' />
							</svg>
						</Link>
					</div>
				</div>
			</div>
			{/* End Welcome Screen */}

			{/* Content */}
			<div className='bg-cloud-gray'>
				<div
					id='about'
					className='px-10 py-10'
				>
					<SectionHeader>About Me</SectionHeader>

					<div className='flex flex-col gap-10'>
						<div className='flex flex-col gap-5'>
							<div className='flex justify-center items-center'>
								<img
									className='w-[150px] h-[150px]'
									src='/assets/images/about/persona.svg'
									alt='persona'
								/>
							</div>
							<div className='flex flex-col bg-deep-sea-green rounded py-3 px-5 '>
								<p className='font-semibold text-sm pb-5'>
									<span className='text-xl'>H</span>ey! I'm
									Rodney, a full stack developer with
									expertise in web development. My experience
									spans creating interactive user interfaces
									using React, designing RESTful APIs with
									NodeJS and Express, and managing SQL and
									NoSQL databases like PostgreSQL and MongoDB.
								</p>

								<p className='font-semibold text-sm pb-5'>
									I have a strong passion for building robust
									and clean software. My focus on best
									practices and continuous learning ensures
									that the software I build not only meets
									current requirements but also adapts
									seamlessly to future challenges.
								</p>

								<p className='font-semibold text-sm pb-3'>
									When I'm not at my computer I like to spend
									my time reading, keeping fit, and playing
									with my cats.
								</p>
							</div>
						</div>
						<div className='flex flex-col gap-10'>
							<div className='flex flex-auto items-center gap-10'>
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
							<div className='flex flex-auto items-center gap-10'>
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
							<div className='flex flex-auto items-center gap-10'>
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
					</div>
				</div>
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
				<div
					id='projects'
					className='py-10'
				>
					<SectionHeader>Projects</SectionHeader>
					<div className='mx-5'>
						<div className='flex flex-col gap-5'>
							<div className='flex flex-col gap-5'>
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
										<img
											className='h-5'
											src='/assets/images/github-logo.svg'
											alt='github-logo'
										/>
									</div>
									<div className='flex gap-3 px-3 py-1.5 font-semibold text-deep-sea-green-hover bg-deep-sea-green bg-opacity-20 rounded'>
										Link
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className='text-deep-sea-green'>
								<div className=''>
									<h2 className='font-bold text-xl'>
										Portfolio 2024
									</h2>
									<p className='border-b-2 border-faded-sea-green font-semibold text-xs py-2'>
										By Me
									</p>
									<p className='font-semibold text-sm pt-3'>
										A project on my portfolio designed in
										Figma and built using React, Remix
										Framework, and Tailwind.
										{/* Check out in detail how I
										approached this project in the link
										button above! */}
									</p>
									<div className='flex flex-wrap gap-3 pt-5'>
										<div className='font-semibold bg-faded-sea-green text-deep-sea-green rounded px-3 py-0.5'>
											React
										</div>
										<div className='font-semibold bg-faded-sea-green text-deep-sea-green rounded px-3 py-0.5'>
											Remix
										</div>
										<div className='font-semibold bg-faded-sea-green text-deep-sea-green rounded px-3 py-0.5'>
											Tailwind
										</div>
										<div className='font-semibold bg-faded-sea-green text-deep-sea-green rounded px-3 py-0.5'>
											Figma
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id='contact'
					className='flex justify-center items-center pb-10'
				>
					<div className='flex flex-col bg-deep-sea-green mx-5 p-5 rounded'>
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
								className='flex gap-2 bg-pastel-green px-3 py-1.5 rounded font-semibold'
							>
								Send
								<svg
									className='h-6 w-6'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									strokeWidth='1'
									stroke='currentColor'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									{' '}
									<path
										stroke='none'
										d='M0 0h24v24H0z'
									/>{' '}
									<line
										x1='10'
										y1='14'
										x2='21'
										y2='3'
									/>{' '}
									<path d='M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
