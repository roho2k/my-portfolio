interface TechLogoProps {
	children: React.ReactNode;
	className?: string;
	width?: string;
	height?: string;
	src: string;
	alt: string;
	imgWidth?: string;
	imgHeight?: string;
}

export default function TechLogo({
	children,
	className,
	width = '16',
	height = '16',
	src,
	alt,
	imgWidth = '10',
	imgHeight = '10',
}: TechLogoProps) {
	return (
		<div
			className={`flex flex-1 flex-col items-center w-${width} h-${height} ${className} `}
		>
			<img
				className={`w-${imgWidth} h-${imgHeight}`}
				src={src}
				alt={alt}
			/>
			<p className='text-center text-deep-sea-green font-semibold'>
				{children}
			</p>
		</div>
	);
}
