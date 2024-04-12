interface LinkIconProps {
	className?: string;
}

export default function LinkIcon({ className = '' }: LinkIconProps) {
	return (
		<svg
			className={`fill-none stroke-current stroke-[1.5px] w-5 h-5 ${className}}`}
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'
			/>
		</svg>
	);
}
