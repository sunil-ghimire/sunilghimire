/*=============== Show Menu =============== */

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */

/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form');
contactName = document.getElementById('contact-name');
contactEmail = document.getElementById('contact-email');
Message = document.getElementById('message');
contactMessage = document.getElementById('contact-message');

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

/*=============== Style Switcher =============== */
