import './Hero.css';

export default function Hero() {
	return (
		<section className='hero'>
			<h2 className='hero-title'>Надёжная юридическая помощь</h2>
			<p className='hero-subtitle'>
				Более 10 лет успешной практики в решении правовых вопросов
			</p>
			<a href='#contacts' className='hero-button'>
				Записаться на консультацию
			</a>
		</section>
	);
}
