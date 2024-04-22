import ExternalLink from '../ExternalLink/ExternalLink';
import GithubIcon from '../GithubIcon/GithubIcon';
import LinkedInLogo from '../LinkedInLogo/LinkedInLogo';

export default function Footer() {
	return (
		<div className='flex justify-center items-center bg-deep-sea-green p-10 '>
			<div className='flex flex-col gap-5'>
				<div className='flex justify-center gap-7'>
					<ExternalLink href='https://github.com/roho2k'>
						<GithubIcon className='w-7 h-7 hover:scale-125 transition-all duration-300 cursor-pointer' />
					</ExternalLink>

					<ExternalLink href='https://www.linkedin.com/in/rodney-ho-211705168/'>
						<LinkedInLogo className='w-7 h-7 hover:scale-125 transition-all duration-300 cursor-pointer ' />
					</ExternalLink>
				</div>
				<p className='text-white font-semibold'>
					Designed & Built by Rodney Ho &copy; 2024
				</p>
			</div>
		</div>
	);
}
