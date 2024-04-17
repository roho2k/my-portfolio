import classNames from 'classnames';
import { createContext, useContext, useState } from 'react';

interface BackgroundProps {
	children: React.ReactNode;
}

interface ContentProps {
	className?: string;
	children: React.ReactNode;
}

interface OverlayProps {
	className?: string;
	children: React.ReactNode;
}

const OverlayContext = createContext({ hovered: false });
function Overlay({ className = '', children }: OverlayProps) {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<button
			className={classNames('relative flex overflow-hidden', className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<OverlayContext.Provider value={{ hovered }}>
				{children}
			</OverlayContext.Provider>
		</button>
	);
}

function Background({ children }: BackgroundProps) {
	return <>{children}</>;
}

function Content({ className = '', children }: ContentProps) {
	const { hovered } = useContext(OverlayContext);
	return (
		<div
			className={classNames(
				'absolute backdrop-blur-sm w-full h-full overflow-y-scroll transition-all ease-out duration-500 bg-black bg-opacity-50 pt-5 pb-10 px-7',
				{ 'translate-y-0': hovered, 'translate-y-full': !hovered },
				className
			)}
		>
			{children}
		</div>
	);
}

Overlay.Background = Background;
Overlay.Content = Content;

export default Overlay;
