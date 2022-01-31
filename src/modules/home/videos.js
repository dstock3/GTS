import { elementBuilder, carouselBuilder, sectionBuilder } from "../functions.js";
import { carouselVidArray } from "../data.js";

const videos = () => {
  //Basic elements
  const vidElements = sectionBuilder("videos");
  const vidSection = vidElements[0];
  const vidContainer = vidElements[1];
  const vidRow = vidElements[2];
  vidRow.classList.add("text-center", "text-dark");

  //Section Head
  const vidHead = elementBuilder("h1", "display-3", vidRow);
  vidHead.classList.add("fw-bold", "mt-4");
  vidHead.textContent = "Videos";

  //Videos
  const vidRow2 = elementBuilder("div", "row", vidContainer);
  vidRow2.classList.add("align-items-center");
  const carouselDiv = elementBuilder("div", "carousel", vidRow2);
  carouselDiv.classList.add("slide");
  carouselDiv.setAttribute("id", "carouselExampleCaptions");
  carouselDiv.setAttribute("data-bs-ride", "carousel");
  const carouselInnerDiv = elementBuilder("div", "carousel-inner", carouselDiv);
  const carouselElementArray = carouselBuilder(
    carouselVidArray,
    carouselInnerDiv
  );

  //Buttons
  const buttonDiv = elementBuilder("div", "text-center", vidRow2);
  buttonDiv.classList.add("button-container");
  const prevButton = elementBuilder("button", "btn", buttonDiv);
  prevButton.classList.add("btn-outline-dark", "fas", "fa-long-arrow-alt-left");
  prevButton.type = "button";
  prevButton.setAttribute("data-bs-target", "#carouselExampleCaptions");
  prevButton.setAttribute("data-bs-slide", "prev");
  prevButton.style.boxSizing = "unset"
  const nextButton = elementBuilder("button", "btn", buttonDiv);
  nextButton.classList.add("btn-outline-dark", "fas", "fa-long-arrow-alt-right");
  nextButton.type = "button";
  nextButton.setAttribute("data-bs-target", "#carouselExampleCaptions");
  nextButton.setAttribute("data-bs-slide", "next");
  nextButton.style.boxSizing = "unset"
}

export { videos }
