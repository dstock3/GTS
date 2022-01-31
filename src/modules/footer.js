import { sectionBuilder, contactBoxBuilder, elementBuilder } from "./functions.js";
import { contactBoxArray } from "./data.js";
import { body } from "./nav.js";

const footer = () => {
  //FOOTER
  const footerElements = sectionBuilder("footer");
  const footerSection = footerElements[0];
  const footerSectionContainer = footerElements[1];
  const footerRow = footerElements[2];
  //contactBoxBuilder(contactBoxArray, footerRow);

  const social = elementBuilder("div", "footer-sm", footerRow);
  const socialContainer = elementBuilder("div", "container", social);
  const socialRow = elementBuilder("div", "row", socialContainer);
  socialRow.classList.add("py-4", "text-center", "text-white");
  const socialCol = elementBuilder("div", "col-lg-5", socialRow);
  socialCol.classList.add("col-md-5", "mb-3", "mb-0");
  socialCol.innerHTML = "Connect with Us on Social Media";
  const socialIcons = elementBuilder("div", "col-lg-6", socialRow);
  socialIcons.id = "social-media"

  const soundcloudAnchor = elementBuilder("a", "social-media-links", socialIcons);
  soundcloudAnchor.href = "https://soundcloud.com/andrew-miller-92566355"; 
  const soundcloudIcon = elementBuilder("i", "fab", soundcloudAnchor);
  soundcloudIcon.classList.add("fa-soundcloud", "fa-2x");

  const twitterAnchor = elementBuilder("a", "social-media-links", socialIcons);
  twitterAnchor.href = "https://twitter.com/gtspodcast1"; 
  const twitterIcon = elementBuilder("i", "fab", twitterAnchor);
  twitterIcon.classList.add("fa-twitter", "fa-2x");

  const facebookAnchor = elementBuilder("a", "social-media-links", socialIcons);
  facebookAnchor.href = "https://www.facebook.com/pages/category/Sports/Garage-Talk-Sports-110950621066022/"; 
  const facebookIcon = elementBuilder("i", "fab", facebookAnchor);
  facebookIcon.classList.add("fa-facebook", "fa-2x");

  const youtubeAnchor = elementBuilder("a", "social-media-links", socialIcons);
  youtubeAnchor.href = "https://www.youtube.com/channel/UC8-PDeILSrtgQlKsZcrY-LQ"; 
  const youtubeIcon = elementBuilder("i", "fab", youtubeAnchor);
  youtubeIcon.classList.add("fa-youtube", "fa-2x");
  
  const copyrightDiv = elementBuilder("div", "footer-bottom", body);
  copyrightDiv.classList.add("pt-5", "pb-5");
  const copyrightContainer = elementBuilder("div", "container", copyrightDiv);
  const copyrightRow = elementBuilder("div", "row", copyrightContainer);
  copyrightRow.classList.add("text-center", "text-white");
  const copyrightCol = elementBuilder("div", "col-12", copyrightRow);
  const copyrightContent = elementBuilder(
    "div",
    "footer-bottom__copyright",
    copyrightCol
  );
  const date = new Date();
  copyrightContent.innerHTML = `Copyright &COPY; ${date.getFullYear()} by GTS Sports.`;

  //BACK TO TOP BUTTON

  const topButtonAnchor = elementBuilder("a", "shadow", body);
  topButtonAnchor.id = "back-to-top-button" 
  topButtonAnchor.classList.add("btn-primary", "rounded-circle", "back-to-top");
  topButtonAnchor.href = "#";
  const topButtonIcon = elementBuilder("i", "fas", topButtonAnchor);
  topButtonIcon.classList.add("fa-chevron-up");
}

export { footer }
