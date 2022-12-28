//Фильтрация в портфолио

let portfolio__item = document.querySelectorAll('.portfolio__item');
let portfolio_active = document.querySelector('.portfolio_active');
let block_item = document.querySelectorAll('.block-item');

let active = [];
for (let i = 0; i < portfolio__item.length; i++) {
    active.push(portfolio__item[i])
}

document.querySelector('.portfolio__list').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    
    let filterClass = event.target.dataset['filter'];
    
    block_item.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== '0') {
            elem.classList.add('hide')
        }
    });


    portfolio__item.forEach( clas => {
        clas.classList.remove('portfolio_active')
        if (!active[filterClass].classList.contains('portfolio_active')) {
            active[filterClass].classList.add('portfolio_active')
    }
    });
});
