import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
	children?: React.ReactNode | string;
	animateTrigger?: boolean;
}

export default function SectionHeader({
	children,
	animateTrigger = true,
}: SectionHeaderProps) {
	const { ref, inView } = useInView();

	return (
		<div
			className='flex flex-col items-center py-5'
			ref={ref}
		>
			<h1 className='relative flex justify-center w-fit text-3xl md:text-4xl lg:text-6xl text-deep-sea-green font-extrabold z-10 overflow-hidden'>
				{children}
				<div className='absolute h-[35%] w-5/6 bg-faded-sea-green -right-2 bottom-[2px] md:bottom-0 lg:-bottom-[2px] -z-10'></div>

				{animateTrigger && (
					<div
						className={classNames(
							'absolute inset-0 bg-deep-sea-green',
							{ 'block animate-slide-out': inView }
						)}
					></div>
				)}
			</h1>
		</div>
	);
}
