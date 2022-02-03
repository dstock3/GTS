import { elementBuilder, buttonBuilder, descriptionBuilder, sectionBuilder } from "../functions.js";
import { vidData, descArray } from "../data.js";

const about = () => {
  const aboutSectionElements = sectionBuilder("about");
  const sectionAbout = aboutSectionElements[0];
  const aboutContainer = aboutSectionElements[1];
  const rowAbout = aboutSectionElements[2];

  rowAbout.classList.add("align-item-center", "text-white");
  const colAbout1 = elementBuilder("div", "col-md-6", rowAbout);
  colAbout1.classList.add("intros", "text-start");
  colAbout1.id = "intro-text"
  const aboutHead = elementBuilder("h1", "display-2", colAbout1);
  const headSpan = elementBuilder("span", "display-2--intro", aboutHead);
  headSpan.textContent = "Garage Talk Sports";
  const headSpan2 = elementBuilder("span", "display-2--description", aboutHead);
  headSpan2.classList.add("lh-base");
  descriptionBuilder(descArray, headSpan2)

  const touchAnchor = elementBuilder("a", "listen", colAbout1);
  touchAnchor.href = "https://soundcloud.com/andrew-miller-92566355"
  touchAnchor.target="_blank" 
  touchAnchor.rel="noopener noreferrer"

  const touchButtonArray = buttonBuilder("rounded-pill", "span", touchAnchor);
  const touchButton = touchButtonArray[0];
  touchButton.classList.add("listen-button")
  const touchText = document.createTextNode("Listen");
  touchButton.appendChild(touchText);
  touchButton.classList.add("btn-rounded");
  const touchSpan = touchButtonArray[1];
  const touchIcon = elementBuilder("i", "fas", touchSpan);
  touchIcon.classList.add("fa-arrow-right");
  touchSpan.id = "touch-span"

  /* VIDEO */
  const vidDiv = elementBuilder("div", "col-md-6", rowAbout);
  vidDiv.classList.add("intros", "text-end");
  const vidBox = elementBuilder("div", "video-box", vidDiv);
  const vidIllus = elementBuilder("img", "img-fluid", vidBox);
  vidIllus.alt = vidData.alt;
  vidIllus.src = vidData.source;
  
  const lightboxAnchor = elementBuilder("a", "glightbox", vidBox);
  lightboxAnchor.classList.add(
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle"
  );
  lightboxAnchor.href = "#";
  lightboxAnchor.id = "lightbox-anchor";
  const anchorSpan = elementBuilder("span", "span", lightboxAnchor);
  anchorSpan.id = "play-btn"
  const anchorIcon = elementBuilder("i", "fas", anchorSpan);
  anchorIcon.classList.add("fa-play-circle", "fa-5x");

}

export { about }