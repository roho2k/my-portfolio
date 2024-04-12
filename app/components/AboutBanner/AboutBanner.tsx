interface AboutBannerProps {
	children: React.ReactNode;
	className?: string;
}

export default function AboutBanner({ children, className }: AboutBannerProps) {
	return <div className={`flex flex-col gap-5 ${className}`}>{children}</div>;
}
