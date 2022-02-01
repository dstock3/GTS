import { elementBuilder, techBuilder, sectionBuilder } from "../functions.js";
import { techArray } from '../data.js'

const tech = () => {
    const techElements = sectionBuilder("tech");
    const sectionTech = techElements[0];
    const techContainer = techElements[1];
    const rowTech = techElements[2];

    rowTech.classList.add("tech-row");
    
    const techImageArray = techBuilder(rowTech, techArray);
}

export { tech }

