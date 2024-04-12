interface SectionHeaderProps {
	children?: React.ReactNode | string;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
	return (
		<div className='flex flex-col items-center py-5'>
			<h1 className='relative flex justify-center w-fit text-2xl text-deep-sea-green font-extrabold z-10'>
				{children}
				<div className='absolute h-[35%] w-5/6 bg-faded-sea-green left-6 bottom-0 -z-10'></div>
			</h1>
		</div>
	);
}
