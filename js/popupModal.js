var link1 = document.querySelector("a.wallet__rec-1");
var link2 = document.querySelector("a.wallet__rec-2");
var link3 = document.querySelector("a.wallet__rec-3");

var popup = document.querySelector(".modal");

var close = popup.querySelector(".modal__close");


link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
});

link3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
});
