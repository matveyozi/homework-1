
document.addEventListener('DOMContentLoaded', () => {

	class TeamCard {
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
	).render();

});