window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-md', 'border-b');
    } else {
        navbar.classList.remove('shadow-md', 'border-b');
    }
});


