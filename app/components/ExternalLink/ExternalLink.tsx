interface ExternalLinkProps {
	children: React.ReactNode;
	className?: string;
	href: string;
}

export default function ExternalLink({
	children,
	className,
	href,
}: ExternalLinkProps) {
	return (
		<a
			className={className}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			{children}
		</a>
	);
}
