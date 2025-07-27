import './Services.css';

const services = [
	{
		title: 'Семейное право',
		desc: 'Разводы, алименты, раздел имущества и другие семейные споры.',
	},
	{
		title: 'Корпоративное право',
		desc: 'Регистрация фирм, сопровождение бизнеса, договорная работа.',
	},
	{
		title: 'Судебные споры',
		desc: 'Представительство в судах всех инстанций, досудебное урегулирование.',
	},
];

export default function Services() {
	return (
		<section id='services' className='services'>
			<h3 className='section-title'>Наши услуги</h3>
			<div className='service-list'>
				{services.map((service, i) => (
					<div key={i} className='service-item'>
						<h4 className='service-title'>{service.title}</h4>
						<p className='service-desc'>{service.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
