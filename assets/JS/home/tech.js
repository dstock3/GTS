const techElements = sectionBuilder("tech");
const sectionTech = techElements[0];
const techContainer = techElements[1];
const rowTech = techElements[2];
rowTech.classList.add("text-center");
const techHead = elementBuilder("h4", "fw-bold", rowTech);
techHead.classList.add("lead", "mb-3", "mt-3", "pt-3");
techHead.innerHTML = "Technologies";
const techLine = elementBuilder("div", "heading-line", rowTech);
techLine.classList.add("mb-5");

const techContainer2 = elementBuilder("div", "tech-container", sectionTech);
const rowTech2 = elementBuilder("div", "row", techContainer2);
rowTech2.classList.add("tech-row", "mb-5", "pb-4");

const techImageArray = techBuilder(techArray);
