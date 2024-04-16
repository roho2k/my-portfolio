import classNames from 'classnames';

interface CloseIconProps {
	className?: string;
}

export default function CloseIcon({ className = '' }: CloseIconProps) {
	return (
		<svg
			className={classNames(
				'w-8 h-8 text-deep-sea-green fill-none',
				className
			)}
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
			/>
			<path d='M18 6 6 18M6 6l12 12' />
		</svg>
	);
}
