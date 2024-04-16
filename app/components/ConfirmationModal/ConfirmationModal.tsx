import { KeyboardEvent } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import CloseIcon from '../CloseIcon/CloseIcon';

interface ConfirmationModalProps {
	open: boolean;
	onClose: () => void;
}

export default function ConfirmationModal({
	open,
	onClose: handleClose,
}: ConfirmationModalProps) {
	const handleOnKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Escape') handleClose();

		return;
	};

	if (!open) {
		return <></>;
	}

	return (
		<div
			className='fixed w-full h-full top-0 left-0 z-30 bg-black bg-opacity-30 backdrop-blur-sm cursor-default'
			onClick={handleClose}
			onKeyDown={handleOnKeyDown}
			role='button'
			tabIndex={0}
		>
			<div className='flex justify-center items-center h-full'>
				<div className='relative bg-cloud-gray rounded p-10 m-10'>
					<button
						className='absolute right-0 mr-10'
						onClick={handleClose}
					>
						<CloseIcon />
					</button>

					<SectionHeader>Confirmation</SectionHeader>
					<p className='text-deep-sea-green font-semibold'>
						This is confirmation that your message was sent
						successfully. You may close this and return to what you
						were doing.
					</p>
					<div className='flex justify-center mt-10'>
						<button
							className='flex gap-2 bg-deep-sea-green px-3 py-1.5 rounded font-semibold'
							onClick={handleClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
