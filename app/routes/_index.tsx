import type { MetaFunction } from '@remix-run/node';
// import { Wave1, Wave2, Wave3, Wave4 } from '~/components/icons';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<div className='flex h-screen'>
			<div className='position: relative w-full flex-auto bg-gradient-to-b from-deep-sea-green to-pastel-green'>
				<img
					className='position: absolute mix-blend-difference'
					src='/wave-1.svg'
					alt='wave'
				/>
				<img
					className='position: absolute mix-blend-difference'
					src='/wave-2.svg'
					alt='wave'
				/>
				<img
					className='position: absolute mix-blend-color-dodge'
					src='/wave-3.svg'
					alt='wave'
				/>
				<img
					className='position: absolute'
					src='/wave-4.svg'
					alt='wave'
				/>
			</div>
		</div>
	);
}
