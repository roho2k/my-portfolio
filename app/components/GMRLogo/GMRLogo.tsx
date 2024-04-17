import classNames from 'classnames';

interface GMRLogoProps {
	className?: string;
}

export default function GMRLogo({ className }: GMRLogoProps) {
	return (
		<svg
			className={classNames('fill-none w-full', className)}
			viewBox='0 0 720 720'
		>
			<path
				fill='url(#gmr-a)'
				d='M0 0h720v720H0z'
			/>
			<path
				fill='#000'
				d='M277.292 359.874a25.812 25.812 0 0 1 30.224-26.328 25.83 25.83 0 0 1 13.45 6.807l-5.61 6.428a17.275 17.275 0 0 0-9.074-4.834 17.278 17.278 0 0 0-17.947 7.956 17.285 17.285 0 0 0-2.511 9.971c-.39 16.975 15.991 22.987 28.713 14.819v-8.865h-12.402v-8.551h20.929v21.529c-18.665 16.226-45.772 6.831-45.772-18.932ZM365.515 385.645h-6.396l-15.806-37.385v37.295h-8.526v-51.2h11.91l15.62 36.937 15.549-36.937h11.916v51.2h-8.526v-37.263l-15.741 37.353ZM442.724 350.012a15.63 15.63 0 0 0-15.632-15.625h-25.585v51.226h8.545v-19.969h9.934l12.018 19.963h10.445l-12.261-20.276a15.632 15.632 0 0 0 12.536-15.319Zm-8.551 0a7.183 7.183 0 0 1-7.183 7.183h-16.925v-14.366h16.925a7.184 7.184 0 0 1 7.183 7.183Z'
			/>
			<defs>
				<linearGradient
					id='gmr-a'
					x1='0'
					x2='720'
					y1='360'
					y2='360'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#BABCC6' />
					<stop
						offset='0'
						stopColor='#AFB0BA'
					/>
					<stop
						offset='.501'
						stopColor='#E9EBF8'
					/>
					<stop
						offset='1'
						stopColor='#F8F9FD'
					/>
				</linearGradient>
			</defs>
		</svg>
	);
}
