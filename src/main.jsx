import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from './components/About/About.jsx';
import Advantages from './components/Advantages/Advantages.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import './main.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Header />
		<Hero />
		<About />
		<Services />
		<Advantages />
		<Contacts />
		<Footer />
	</StrictMode>,
);
