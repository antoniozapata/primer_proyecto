const navSlide = () => {
    const burger = document.querySelector(".toggler");
    const nav = document.querySelector(".btn-list");

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
    });
};

navSlide();