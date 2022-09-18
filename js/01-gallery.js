import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = galleryItems.map((picture) => {
  return /*html*/ `<div class="gallery__item">
  <a class="gallery__link" href="${picture.original}" onclick="event.preventDefault()">
    <img class="gallery__image" src="${picture.preview}" data-source="${picture.original}" alt="${picture.description}" />
  </a>
</div>`;
});

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup.join(""));

let modal;

function clickWatch() {
  document.addEventListener("keydown", EscListener);
}

gallery.addEventListener("click", (event) => {
  const img = event.target;
  const src = img.dataset.source;
  const alt = img.alt;
  modal = basicLightbox.create(/*html*/ `
    <img src="${src}" alt="${alt}" />
`);
  modal.show();
  clickWatch();
});

function clickUnwatch() {
  document.removeEventListener("keydown", EscListener);
}

function EscListener(event) {
  if (event.key === "Escape") {
    modal.close();
    clickUnwatch();
  }
}
