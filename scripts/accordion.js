const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {

        document.querySelectorAll('.accordion_body').forEach(body => {
            body.classList.remove('active2');
        });

        const body = accordion.querySelector('.accordion_body');
        body.classList.add('active2');
    });
});
