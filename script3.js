//Навигация

let navigation__item = document.querySelectorAll('.navigation__item');
let navigation_active = document.querySelector('.navigation_active');

let activeNav = [];
for (let i = 0; i < navigation__item.length; i++) {
    activeNav.push(navigation__item[i])
}

document.querySelector('.navigation__list').addEventListener('click', event => {
    if (event.target.tagName !== 'A') return false;

    let filterActive = event.target.dataset['active'];

    navigation__item.forEach( clas => {
        clas.classList.remove('navigation_active')
        if (!activeNav[filterActive].classList.contains('navigation_active')) {
            activeNav[filterActive].classList.add('navigation_active')
        }
    });
});
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
    console.log(scrollDistance)

    navigation__item.forEach( clas => {
        clas.classList.remove('navigation_active')
        if (scrollDistance >= 0 && scrollDistance < 1000) {
            if (!activeNav[0].classList.contains('navigation_active')) {
                activeNav[0].classList.add('navigation_active')
            }
        }

        if (scrollDistance >= 1000 && scrollDistance <= 1819) {
            if (!activeNav[1].classList.contains('navigation_active')) {
                activeNav[1].classList.add('navigation_active')
            }
        }

        if (scrollDistance > 1819 && scrollDistance <= 2600) {
            if (!activeNav[2].classList.contains('navigation_active')) {
                activeNav[2].classList.add('navigation_active')
            }
        }
        if (scrollDistance >= 2601) {
            if (!activeNav[3].classList.contains('navigation_active')) {
                activeNav[3].classList.add('navigation_active')
            }
        }
    });
});