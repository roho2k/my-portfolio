import { Link } from '@remix-run/react';
import classNames from 'classnames';
import { SectionsInViewInterface } from '~/root';

interface NavBarProps extends SectionsInViewInterface {}

export default function NavBar({
	welcomeInView,
	aboutInView,
	experienceInView,
	projectsInView,
	contactInView,
}: NavBarProps) {
	return (
		<div className='hidden sm:flex text-white bg-deep-sea-green font-bold px-10 py-[6px] sticky top-0 drop-shadow-figma z-20'>
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
	);
}
