function scrollTOSomewhere(elements) {

  elements.forEach(element => {

    element.addEventListener("click", (e) => {

      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      });

    });

  });

}
