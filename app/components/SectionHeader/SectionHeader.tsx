interface SectionHeaderProps {
	children?: React.ReactNode | string;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
	return (
		<div className='flex flex-col items-center py-5'>
			<h1 className='relative flex justify-center w-fit text-3xl md:text-4xl lg:text-6xl text-deep-sea-green font-extrabold z-10'>
				{children}
				<div className='absolute h-[35%] w-5/6 bg-faded-sea-green -right-2 bottom-[2px] md:bottom-0 lg:-bottom-[2px] -z-10'></div>
			</h1>
		</div>
	);
}
