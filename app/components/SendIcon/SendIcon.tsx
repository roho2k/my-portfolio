import classNames from 'classnames';

interface SendIconProps {
	className?: string;
}

export default function SendIcon({ className }: SendIconProps) {
	return (
		<svg
			className={classNames(
				'w-6 h-6 fill-none stroke-current stroke-2',
				className
			)}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
			/>
			<path d='M10 14 21 3M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3' />
		</svg>
	);
}
