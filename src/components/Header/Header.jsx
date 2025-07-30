import './Header.css';
import React from 'react';
import Icon from './femidaImg.jsx';

export default function Header() {
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='logo-container'>
					<Icon />
					<h1 className='logo-text'>
						Юрист <br />
						Насонова <br /> Марина
					</h1>
				</div>
				<nav className='nav'>
					<a href='#about'>О нас</a>
					<a href='#services'>Услуги</a>
					<a href='#advantages'>Преимущества</a>
					<a href='#reviews'>Отзывы</a>
					<a href='#contacts'>Контакты</a>
				</nav>
			</div>
		</header>
	);
}
