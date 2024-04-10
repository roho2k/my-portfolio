import { Menu } from '@headlessui/react';
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<div className='font-nunito text-white bg-cloud-gray'>
			{/* Welcome Screen */}
			<div
				id='welcome-screen'
				className='flex flex-col h-screen w-full bg-gradient-to-b from-deep-sea-green to-pastel-green'
			>
				<section>
					<img
						className='absolute top-0 mix-blend-difference'
						src='/wave-1.svg'
						alt='wave'
					/>
					<img
						className='absolute top-0 mix-blend-difference'
						src='/wave-2.svg'
						alt='wave'
					/>
					<img
						className='absolute top-0 mix-blend-color-dodge'
						src='/wave-3.svg'
						alt='wave'
					/>
					<img
						className='absolute top-0'
						src='/wave-4.svg'
						alt='wave'
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

			{/* Navbar Mobile */}
			<Menu>
				<div className='sticky top-0 backdrop-blur sm:hidden z-10'>
					{/* Hamburger Menu */}
					<Menu.Button>
						<div className='relative group'>
							<div className='relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all ring-0'>
								<div className='flex flex-col justify-between w-[15px] h-[15px]'>
									<div className='bg-deep-sea-green h-[2px] w-5'></div>
									<div className='bg-deep-sea-green h-[2px] w-5'></div>
									<div className='bg-deep-sea-green h-[2px] w-5'></div>
								</div>
							</div>
						</div>
					</Menu.Button>

					<Menu.Items className='absolute top-0 flex flex-col w-2/3 py-3 px-1 gap-2 drop-shadow-figma bg-cloud-gray rounded'>
						<Menu.Item>
							<div className='flex justify-end'>
								<button className='py-1 px-2'>
									<svg
										className='h-6 w-6 text-deep-sea-green cursor-pointer'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										></path>
									</svg>
								</button>
							</div>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#welcome-screen'
								className='p-3 my-1 mx-2 rounded text-deep-sea-green bg-deep-sea-green bg-opacity-10'
							>
								Home
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#about'
								className='p-3 my-1 mx-2 rounded text-deep-sea-green bg-deep-sea-green bg-opacity-10'
							>
								About
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#experience'
								className='p-3 my-1 mx-2 rounded text-deep-sea-green bg-deep-sea-green bg-opacity-10'
							>
								Experience
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#projects'
								className='p-3 my-1 mx-2 rounded text-deep-sea-green bg-deep-sea-green bg-opacity-10'
							>
								Projects
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to='#contact'
								className='p-3 my-1 mx-2 rounded text-deep-sea-green bg-deep-sea-green bg-opacity-10'
							>
								Contact
							</Link>
						</Menu.Item>
					</Menu.Items>
				</div>
			</Menu>
			{/* NavBar Desktop*/}
			<div className='hidden sm:flex bg-deep-sea-green font-bold px-10 sticky top-0'>
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
			{/* Content */}
			<div className='bg-cloud-gray'>
				<div
					id='about'
					className='h-screen px-10'
				>
					<h1 className='flex justify-center text-2xl text-deep-sea-green font-extrabold'>
						About Me
					</h1>
					<div className='flex flex-col'>
						<div className=''></div>
						<div className='flex bg-deep-sea-green rounded py-3 px-5 font-bold text-sm'>
							Description
						</div>
					</div>
				</div>
				<div
					id='experience'
					className='flex flex-col h-screen'
				>
					<div className='flex flex-1 items-center bg-deep-sea-green gap-2 text-sm py-5 px-5'>
						<h1 className='flex flex-1 font-bold text-2xl'>
							Experience
						</h1>
						<span className='font-thin text-7xl text-deep-sea-green-hover'>
							|
						</span>
						<p className='flex-auto font-bold'>
							I have 5+ years of work experience and counting.
							Here are some companies I have had the privilege to
							work at.
						</p>
					</div>
					<div className='flex flex-auto justify-center items-center w-full py-10 px-10'>
						<div className='flex flex-col'>
							<img
								src='/assets/images/logo-8.svg'
								alt='logo-8'
							/>
							<img
								src='/assets/images/logo-9.svg'
								alt='logo-9'
							/>
							<img
								src='/assets/images/logo-10.svg'
								alt='logo-10'
							/>
							<img
								src='/assets/images/logo-11.svg'
								alt='logo-11'
							/>
						</div>
					</div>
				</div>
				<div
					id='projects'
					className='h-screen'
				>
					<div className='flex bg-gradient-to-r from-bright-yellow via-plum to-sea-green justify-center items-center p-7 text-nowrap'>
						<div className='text-center bg-black bg-opacity-30 py-5 px-12'>
							<h1 className='font-extrabold text-2xl'>
								Projects
							</h1>
							<p className='hidden sm:block'>
								Here are some of my personal projects!
							</p>
						</div>
					</div>
				</div>
				<div
					id='contact'
					className='h-screen'
				>
					Contact
				</div>
			</div>
		</div>
	);
}
