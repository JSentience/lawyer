import './Advantages.css';

export default function Advantages() {
	const advantages = [
		'Более 10 лет опыта',
		'Индивидуальный подход',
		'Прозрачные условия',
		'100% конфиденциальность',
	];

	return (
		<section id='advantages' className='advantages'>
			<h3 className='section-title'>Почему выбирают нас</h3>
			<ul className='advantage-list'>
				{advantages.map((item, index) => (
					<li key={index} className='advantage-item'>
						{item}
					</li>
				))}
			</ul>
		</section>
	);
}
