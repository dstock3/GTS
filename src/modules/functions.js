import { body } from './nav.js'

function elementBuilder(elType, className, parent) {
  const newElement = document.createElement(elType);
  newElement.classList.add(className);
  parent.appendChild(newElement);
  return newElement;
}

function linkBuilder(linkArray, ulVar, className, openNewTab) {
  let linkElementArray = [];
  for (let i = 0; i < linkArray.length; i++) {
    let linkLi = elementBuilder("li", className, ulVar);
    let linkAnchor = elementBuilder("a", "nav-link", linkLi);
    linkAnchor.textContent = linkArray[i].name;
    linkAnchor.href = linkArray[i].link;
    if (openNewTab === true) {
      linkAnchor.rel = "noreferrer noopener";
      linkAnchor.target = "blank";
    }
    linkElementArray.push(linkAnchor);
  }
  return linkElementArray;
}

function sectionBuilder(sectionName) {
  let section = elementBuilder("section", sectionName, body);
  section.setAttribute("id", sectionName);
  let sectionContainer = elementBuilder("div", "container", section);
  let sectionRow = elementBuilder("div", "row", sectionContainer);
  let sectionElements = [section, sectionContainer, sectionRow];
  return sectionElements;
}

function buttonBuilder(buttonClass, spanClass, parent) {
  let button = elementBuilder("button", buttonClass, parent);
  button.type = "button";
  let span = elementBuilder("span", spanClass, button);
  let buttonBuild = [button, span];
  return buttonBuild;
}

function buttonBuilderJr(buttonArray, parent) {
  let buttonElementArray = [];
  for (let i = 0; i < buttonArray.length; i++) {
    let projectButton = elementBuilder("button", "btn", parent);
    projectButton.type = "button";
    projectButton.classList.add("btn-outline-primary", "m-1");
    projectButton.textContent = buttonArray[i];
    buttonElementArray.push(projectButton);
  }
  return buttonElementArray;
}

function descriptionBuilder(descArray, parent) {
  let description = elementBuilder("article", "color-bg-subtle", parent);
  description.classList.add("rounded-bottom-1", "py-2");
  for (let i = 0; i < descArray.length; i++) {
    let descItem = descArray[i]
    let flexDiv = elementBuilder("div", "d-flex", description);
    flexDiv.classList.add("flex-items-center", "desc-div")
    let span = elementBuilder("span", "desc-span", flexDiv)
    span.classList.add("pl-0")
    let pre = elementBuilder("pre", "lh-condensed-ultra", flexDiv)
    pre.textContent =  descItem

  }

}

function allButtonListener(button, projectArray, projBodyRow) {
  button.addEventListener("click", () => {
    projectColRemover();
    return projectIterator(projectArray, projBodyRow);
  });
}

//Technologies Builder

function techBuilder(rowTech, techArray) {
  let imageElementArray = [];
  for (let i = 0; i < techArray.length; i++) {
    let techCol = elementBuilder("div", "tech-item", rowTech);
    techCol.classList.add("col-lg-2",  "col-md-4");
    let techDiv = elementBuilder("div", "tech__logo-box", techCol);
    let techImage = elementBuilder("img", "img-fluid", techDiv);
    techImage.setAttribute("src", `${techArray[i].source}`);
    techImage.setAttribute("alt", `${techArray[i].alt}`);
    techImage.setAttribute("id", `${techArray[i].id}`);
    imageElementArray.push(techImage);
    let techDes = elementBuilder("div", "tech-des", techCol);
    techDes.innerHTML = techArray[i].title;
  }

  return imageElementArray;
}

//Video Carousel

function carouselBuilder(carouselArray, parent) {
  let carouselElementArray = [];
  for (let i = 0; i < carouselArray.length; i++) {
    let carousel = elementBuilder("div", "carousel-item", parent);
    if (i === 0) {
      carousel.classList.add("active");
    }
    let vidCard = elementBuilder("div", "videos__vid", carousel);
    vidCard.classList.add("mx-auto");
    let vidTitle = elementBuilder("h2", "vid-title", vidCard);
    vidTitle.innerHTML = carouselArray[i].title;
    let vidContainer2 = elementBuilder("div", "vid-container", vidCard);
    vidContainer2.innerHTML = carouselArray[i].iframe;
    let vidDescription = elementBuilder("p", "text-start", vidCard);
    vidDescription.innerHTML = carouselArray[i].description;
    let carouselIndexArray = [
      carousel,
      vidCard,
      vidTitle,
      vidContainer2,
      vidDescription,
    ];
    carouselElementArray.push(carouselIndexArray);
  }
  return carouselElementArray;
}

export { elementBuilder, linkBuilder, sectionBuilder, buttonBuilder, buttonBuilderJr, descriptionBuilder, techBuilder, carouselBuilder }