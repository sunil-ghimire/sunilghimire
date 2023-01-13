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
var testiSwiper = new Swiper('.testimonial__container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});


/*=============== contact form =============== */
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const Message = document.getElementById('message');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        Message.value === '') {

        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Please fill in all fields';
    } else {
        //serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_paca217',
            'template_tiocjpn',
            '#contact-form',
            'vxDcl4UI2jbOQBn6f'
        )
            .then(() => {
                contactMessage.classList.add('color-light');
                contactMessage.textContent = "Message sent successfully";
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);
            })
    }
};

contactForm.addEventListener('submit', sendEmail);