import { forwardRef } from 'react';

interface AboutBannerProps {
	children: React.ReactNode;
	className?: string;
}

interface LeftPanelProps {
	children: React.ReactNode;
	className?: string;
}

interface RightPanelProps {
	children: React.ReactNode;
	className?: string;
}

function AboutBanner({ children, className = '' }: AboutBannerProps) {
	return (
		<div className={`flex flex-col gap-10 lg:flex-row ${className}`}>
			{children}
		</div>
	);
}

const LeftPanel = forwardRef(function LeftPanel(
	{ children, className }: LeftPanelProps,
	ref: React.LegacyRef<HTMLDivElement> | undefined
) {
	return (
		<div
			ref={ref}
			className={className}
		>
			{children}
		</div>
	);
});

const RightPanel = forwardRef(function RightPanel(
	{ children, className }: RightPanelProps,
	ref: React.LegacyRef<HTMLDivElement> | undefined
) {
	return (
		<div
			ref={ref}
			className={className}
		>
			{children}
		</div>
	);
});

AboutBanner.LeftPanel = LeftPanel;
AboutBanner.RightPanel = RightPanel;

export default AboutBanner;
