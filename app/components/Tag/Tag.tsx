interface TagProp {
	children: React.ReactNode;
}

export default function Tag({ children }: TagProp) {
	return (
		<div className='font-semibold bg-faded-sea-green text-deep-sea-green rounded px-3 py-0.5'>
			{children}
		</div>
	);
}
