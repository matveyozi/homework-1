
document.addEventListener('DOMContentLoaded', () => {

	/* class TeamCard {
		constructor(src, alt, name, vacancy, parentSelector) {
			this.src=src;
			this.alt=alt;
			this.name=name;
			this.vacancy=vacancy;
			this.parent=document.querySelector(parentSelector);
		}
		render() {
		const element=document.createElement('li');
			element.classList.add('team__item');
			element.innerHTML=`
			<img src=${this.src} alt=${this.alt} class="team__person" width="270" />
			<div>
			  <h3 class="team__name">${this.name}</h3>
			<p class="team__vacancy">${this.vacancy}</p>
			</div>
			`;
			this.parent.append(element);
		}
	
	}

	new TeamCard(
		"img/igor.jpg",
		"Igor",
		"Ігор Дем'яненко",
		"Product Designer",
		'.team__list'
	).render();
	new TeamCard(
		"img/olga.jpg",
		"Olga",
		"Ольга Рєпіна",
		"Frontend Developer",
		'.team__list'
	).render();
	new TeamCard(
		"img/mikola.jpg",
		"Mikola",
		"Микола Тарасов",
		"Marketing",
		'.team__list'
	).render();
	new TeamCard(
		"img/mihaylo.jpg",
		"Mihaylo",
		"Михайло Єрмаков",
		"UI Designer",
		'.team__list'
	).render(); */

	// Modal 

	const modalOpen = document.querySelector('[data-modal-open]'),
		modalClose = document.querySelector('[data-close]'),
		modal = document.querySelector('.modal');

	function openModal() {
		modal.classList.toggle('hide');
		document.body.style.overflow = 'hidden';
	}
	function closeModal() {
		modal.classList.toggle('hide');
		document.body.style.overflow = '';
	}
	
	modalOpen.addEventListener('click', openModal);
	modalClose.addEventListener('click', closeModal);
	
	// modal.addEventListener('click', (e) => {
	// 	if (e.target === modal || e.target.getAttribute('data-close') == '') {
	// 		closeModal();
	// 		console.log('done')
	// 	}
	// });
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && !modal.classList.contains('hide')) {
			closeModal();
		}
	})


});