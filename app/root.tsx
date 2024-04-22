import { type LinksFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css?url';
import MobileNavBar from './components/MobileNavBar/MobileNavBar';
import { createContext, useState } from 'react';
import NavBar from './components/NavBar/NavBar';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
];

export interface SectionsInViewInterface {
	welcomeInView: boolean;
	aboutInView: boolean;
	experienceInView: boolean;
	projectsInView: boolean;
	contactInView: boolean;
}

interface LayoutContextType {
	setSectionsInView: React.Dispatch<
		React.SetStateAction<SectionsInViewInterface>
	>;
}

export const LayoutContext = createContext<LayoutContextType>({
	setSectionsInView: () => {},
});

export function Layout({ children }: { children: React.ReactNode }) {
	const [sectionsInView, setSectionsInView] = useState({
		welcomeInView: true,
		aboutInView: false,
		experienceInView: false,
		projectsInView: false,
		contactInView: false,
	});

	return (
		<html
			className='scroll-smooth'
			lang='en'
		>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<Meta />
				<Links />
			</head>
			<body id='top'>
				<MobileNavBar />
				<NavBar {...sectionsInView} />
				<LayoutContext.Provider value={{ setSectionsInView }}>
					{children}
				</LayoutContext.Provider>

				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
