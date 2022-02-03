import { elementBuilder } from "./functions.js";
import logo from '../assets/images/GTS_logo_shadow.webp'

const body = document.getElementsByTagName("body")[0];

const nav = () => {
  const nav = elementBuilder("nav", "navbar", body);
  const containerDiv = elementBuilder("div", "container", nav);
  const logoAnchor = elementBuilder("a", "navbar-brand", containerDiv);
  logoAnchor.href = "#";
  const logoImage = elementBuilder("img", "logo", logoAnchor);
  logoImage.alt = "Garage Talk Sports logo"
  logoImage.src = logo;

  nav.classList.add(
    "navbar-expand-lg",
    "navbar-light",
    "menu",
    "shadow",
    "fixed-top"
  );

}

export { body, nav }
