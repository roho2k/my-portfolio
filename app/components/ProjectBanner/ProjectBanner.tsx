import { forwardRef } from 'react';

interface BaseProps {
	children: React.ReactNode;
	className?: string;
}

interface ProjectBannerProps extends BaseProps {}

interface LeftPanelProps extends BaseProps {}

interface RightPanelProps extends BaseProps {}

function ProjectBanner({ children, className = '' }: ProjectBannerProps) {
	return (
		<div
			className={`flex flex-col md:flex-row md:items-start gap-10 lg:gap-20 justify-center ${className}`}
		>
			{children}
		</div>
	);
}

const LeftPanel = forwardRef(function LeftPanel(
	{ children, className = '' }: LeftPanelProps,
	ref: React.LegacyRef<HTMLDivElement> | undefined
) {
	return (
		<div
			ref={ref}
			className={`flex flex-col gap-5 md:basis-1/2 ${className}`}
		>
			{children}
		</div>
	);
});

const RightPanel = forwardRef(function RightPanel(
	{ children, className = '' }: RightPanelProps,
	ref: React.LegacyRef<HTMLDivElement> | undefined
) {
	return (
		<div
			ref={ref}
			className={`flex flex-col gap-5 md:basis-1/2 ${className}`}
		>
			{children}
		</div>
	);
});

ProjectBanner.LeftPanel = LeftPanel;
ProjectBanner.RightPanel = RightPanel;

export default ProjectBanner;
