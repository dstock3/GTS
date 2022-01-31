import { sectionBuilder, elementBuilder } from "./functions.js";
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
  soundcloudIcon.target="_blank" 
  soundcloudIcon.rel="noopener noreferrer"

  const spotifyAnchor = elementBuilder("a", "social-media-links", socialIcons);
  spotifyAnchor.href = "https://open.spotify.com/show/3pJSKX8ymOpTZ1erLjRuzJ";
  spotifyAnchor.target="_blank" 
  spotifyAnchor.rel="noopener noreferrer"
  const spotifyIcon = elementBuilder("i", "fab", spotifyAnchor);
  spotifyIcon.classList.add("fa-spotify", "fa-2x");

  const twitterAnchor = elementBuilder("a", "social-media-links", socialIcons);
  twitterAnchor.href = "https://twitter.com/gtspodcast1";
  twitterAnchor.target="_blank" 
  twitterAnchor.rel="noopener noreferrer"
  const twitterIcon = elementBuilder("i", "fab", twitterAnchor);
  twitterIcon.classList.add("fa-twitter", "fa-2x");

  const facebookAnchor = elementBuilder("a", "social-media-links", socialIcons);
  facebookAnchor.href = "https://www.facebook.com/pages/category/Sports/Garage-Talk-Sports-110950621066022/";
  facebookAnchor.target="_blank" 
  facebookAnchor.rel="noopener noreferrer"
  const facebookIcon = elementBuilder("i", "fab", facebookAnchor);
  facebookIcon.classList.add("fa-facebook", "fa-2x");

  const youtubeAnchor = elementBuilder("a", "social-media-links", socialIcons);
  youtubeAnchor.href = "https://www.youtube.com/channel/UC8-PDeILSrtgQlKsZcrY-LQ";
  youtubeAnchor.target="_blank" 
  youtubeAnchor.rel="noopener noreferrer"
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
  copyrightContent.innerHTML = `Copyright &COPY; ${date.getFullYear()} by Garage Talk Sports.`;
}

export { footer }
