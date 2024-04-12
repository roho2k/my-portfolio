import classNames from 'classnames';

interface DownArrowIconProps {
	className?: string;
}
export default function DownArrowIcon({ className }: DownArrowIconProps) {
	return (
		<svg
			className={classNames(
				'fill-none stroke-current stroke-2 w-10 h-10',
				className
			)}
			viewBox='0 0 24 24'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M12 5v14M19 12l-7 7-7-7' />
		</svg>
	);
}
