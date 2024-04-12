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
			className={`flex flex-col md:flex-row md:items-start gap-5 lg:gap-20 ${className}`}
		>
			{children}
		</div>
	);
}

function LeftPanel({ children, className = '' }: LeftPanelProps) {
	return (
		<div className={`flex flex-col gap-5 md:basis-1/2 ${className}`}>
			{children}
		</div>
	);
}

function RightPanel({ children, className = '' }: RightPanelProps) {
	return (
		<div className={`flex flex-col gap-5 md:basis-1/2 ${className}`}>
			{children}
		</div>
	);
}

ProjectBanner.LeftPanel = LeftPanel;
ProjectBanner.RightPanel = RightPanel;

export default ProjectBanner;
