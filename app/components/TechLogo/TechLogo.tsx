import classNames from 'classnames';

interface TechLogoProps {
	children: React.ReactNode;
	className?: string;
	classNameImg?: string;
	src: string;
	alt: string;
}

export default function TechLogo({
	children,
	className = '',
	classNameImg = '',
	src,
	alt,
}: TechLogoProps) {
	return (
		<div
			className={classNames(
				'flex flex-1 flex-col items-center w-16 h-16',
				className
			)}
		>
			<img
				className={classNames('w-10 h-10', classNameImg)}
				src={src}
				alt={alt}
			/>
			<p className='text-center text-deep-sea-green font-semibold'>
				{children}
			</p>
		</div>
	);
}
