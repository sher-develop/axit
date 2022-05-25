//Create navigation button
const btn = document.querySelector('.nav-open');
const nav = document.querySelector('.nav-wrapper');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    nav.classList.toggle('active-nav');
});

const tabs = () => {
    const tabsBtn = document.querySelectorAll('.tabs-btn');
    const content = document.querySelectorAll('.tabs-modal');

    function hideAll() {
        for (let i = 0; i < tabsBtn.length; i++) {
            tabsBtn[i].classList.remove('active-tab');
            content[i].classList.remove('active-tab');
        }
    }

    for (let i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].addEventListener("click", () => {
            hideAll();
            tabsBtn[i].classList.add('active-tab');
            content[i].classList.add('active-tab');
        })
    }
};

tabs();


//Create scroll animation
const sr = new ScrollReveal({
    distance: '40px',
    duration: 1800,
    reset: true
});

sr.reveal(`.header-info, .header-form,
           .icon-animation, .awesome-wrapper__item,
           .pricing-item, .customer-wrapper__item,
           .btn-animation`, {
    origin: 'top',
    interval: 200
});

sr.reveal(`.social-media__item, .section-view__imgleft,
           .section-view__container, .section-center__title,
           .section-center__text, .contact-us__info`, {
    origin: 'left',
    interval: 100
});

sr.reveal(`.section-wrapper__item, .section-list__item,
           .section-line, .contact-us__text`, {
    origin: 'right',
    interval: 100
});