import './Header.css';

export default function Header() {
	return (
		<header className='header'>
			<div className='header-container'>
				<h1 className='logo'>Марина Насонова</h1>
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
