import './Header.css';
import React from 'react';
import img from '/img/icons/femida_icon.svg'; // Предположим, что у вас есть логотип в этой папке

export default function Header() {
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='logo-container'>
					<img className='logo' src={img} alt='' />
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
