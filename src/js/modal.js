const modal = document.getElementById("modal");

const modalOpen = () => {
  console.log("test");
  modal.classList.add("modal--show");
  modal.children[0].classList.add("modal__container--show");
};

const modalClose = () => {
  modal.children[0].classList.remove("modal__container--show");
  modal.classList.remove("modal--show");
};

export { modalOpen, modalClose };
