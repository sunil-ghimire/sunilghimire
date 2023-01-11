/*=============== Active Link =============== */
const linkWork = document.querySelector('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}
// linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300,
    }
});

/*=============== Testimonials Swiper =============== */
