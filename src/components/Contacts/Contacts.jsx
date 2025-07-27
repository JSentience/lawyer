import { useRef, useState } from 'react';
import './Contacts.css';

export default function Contacts() {
	const formRef = useRef();
	const [status, setStatus] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();

		const form = formRef.current;
		const formData = new FormData(form);

		try {
			await fetch('https://formsubmit.co/ajax/serega2387@gmail.com', {
				method: 'POST',
				body: formData,
			});

			form.reset();
			setStatus('success');
		} catch (error) {
			console.error('Ошибка при отправке формы:', error);
			setStatus('error');
		}
	};

	return (
		<section id='contacts' className='contacts'>
			<h3 className='section-title'>Контакты</h3>
			<form ref={formRef} onSubmit={handleSubmit} className='contact-form'>
				<input type='hidden' name='_captcha' value='false' />
				<input name='name' placeholder='Ваше имя' required />
				<input name='email' type='email' placeholder='Ваш email' required />
				<textarea name='message' placeholder='Ваш вопрос' rows='4' required />
				<button type='submit'>Отправить сообщение</button>
			</form>

			{status === 'success' && (
				<p className='form-status success'>✅ Сообщение отправлено!</p>
			)}
			{status === 'error' && (
				<p className='form-status error'>❌ Ошибка. Попробуйте позже.</p>
			)}
		</section>
	);
}
