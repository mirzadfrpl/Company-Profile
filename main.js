window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-md', 'border-b');
    } else {
        navbar.classList.remove('shadow-md', 'border-b');
    }
});

let intro = document.querySelector(".intro");
      let logo = document.querySelector(".logo-header");
      let logoSpan = document.querySelectorAll(".logo");
      window.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.add("active");
            }, (idx + 1) * 400);
          });

          setTimeout(() => {
            logoSpan.forEach((span, idx) => {
              setTimeout(() => {
                span.classList.remove("active");
                span.classList.add("fade");
              }, (idx + 1) * 50);
            });
          }, 2000);
          setTimeout(() => {
            intro.style.top = "-100vh";
          }, 2300);
        });
      });


