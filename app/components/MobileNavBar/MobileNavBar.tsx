import { useNavigate } from '@remix-run/react';
import { Squash as Hamburger } from 'hamburger-react';
import { KeyboardEvent, useState } from 'react';

function Dialog({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default function MobileNavBar() {
	const [isOpen, setOpen] = useState(false);
	const navigate = useNavigate();
	const handleClose = () => setOpen(false);
	const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) =>
		e.key == 'Escape' && handleClose();
	const handleNavigate = (href: string) => {
		navigate(href);
		handleClose();
	};

	return (
		<>
			<nav className='fixed w-full flex items-center px-5 sm:hidden bg-deep-sea-green text-white z-30'>
				<h1 className='flex-auto font-bold'>Rodney Ho</h1>
				<Hamburger
					size={20}
					rounded
					toggled={isOpen}
					toggle={setOpen}
				/>
			</nav>

			{/* Dialog */}
			{isOpen && (
				<Dialog>
					<div
						className='fixed inset-0 backdrop-blur-sm z-20'
						onClick={handleClose}
						onTouchStart={handleClose}
						onKeyDown={handleOnKeyDown}
						role='button'
						tabIndex={0}
					></div>
					<section className='fixed top-12 z-30 flex flex-col w-full bg-white text-deep-sea-green font-bold animate-fade'>
						<button
							className='p-5'
							onClick={() => handleNavigate('#top')}
						>
							Home
						</button>
						<button
							className='p-5'
							onClick={() => handleNavigate('#about')}
						>
							About
						</button>
						<button
							className='p-5'
							onClick={() => handleNavigate('#experience')}
						>
							Experience
						</button>
						<button
							className='p-5'
							onClick={() => handleNavigate('#projects')}
						>
							Projects
						</button>
						<button
							className='p-5'
							onClick={() => handleNavigate('#contact')}
						>
							Contact
						</button>
					</section>
				</Dialog>
			)}
		</>
	);
}
