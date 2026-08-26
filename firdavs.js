
const navigationLinks =
    document.querySelectorAll(
        '.navigation a[href^="#"]'
    );

navigationLinks.forEach((link) => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

        const targetId =
            link.getAttribute('href');

        const target =
            document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});



const form =
    document.getElementById('contactForm');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const button =
        form.querySelector('button');

    button.textContent =
        'MESSAGE SENT ✓';

    button.style.background =
        '#2d8a4e';

    form.reset();

    setTimeout(() => {

        button.textContent =
            'SEND MESSAGE';

        button.style.background =
            '#000';

    }, 3000);

});


