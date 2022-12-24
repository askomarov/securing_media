const closeAccordionItems = (accordion, itemClass, itemClosedClass) => {
  accordion.querySelectorAll(`.${itemClass}`).forEach((element, index) => {
    if (index !== 0) {
      element.classList.remove(itemClosedClass);
    }
  });
};

const initAccordion = () => {
  const accordion = document.querySelector(".accordion");
  if (accordion) {
    const togglerClass = "footer__title";
    const itemClass = "footer__title";
    const itemClosedClass = "is-open";

    closeAccordionItems(accordion, itemClass, itemClosedClass);

    accordion.addEventListener("click", (event) => {
      const toggler = event.target.closest(`.${togglerClass}`);

      if (toggler) {
        const item = toggler.closest(`.${itemClass}`);
        const isOpened = item.classList.contains(itemClosedClass);
        if (isOpened) {
          item.classList.remove(itemClosedClass);
        } else {
          item.classList.add(itemClosedClass);
        }
      }
    });
  }
};

export { initAccordion };
