import './Reviews.css';

const reviews = [
	{
		quote:
			'Очень благодарен за помощь в разводе. Всё прошло быстро и спокойно. Рекомендую!',
		author: 'Алексей П.',
	},
	{
		quote:
			'Юристы помогли решить сложный спор с контрагентом. Профессионально и чётко!',
		author: 'Мария К.',
	},
];

export default function Reviews() {
	return (
		<section id='reviews' className='reviews'>
			<h3 className='section-title'>Отзывы клиентов</h3>
			{reviews.map((r, i) => (
				<blockquote key={i} className='review'>
					<p className='review-quote'>«{r.quote}»</p>
					<cite className='review-author'>— {r.author}</cite>
				</blockquote>
			))}
		</section>
	);
}
