import gtsMain from '../assets/images/GTS_shadow.png'

//Nav Info

const about = {
  name: "About",
  link: "index.html#about",
};

const videos = {
  name: "Videos",
  link: "index.html#videos",
};

const links = [about, videos];

//Video Illus
const vidData = {
  source: gtsMain,
  alt: "GTS Logo"

}

const desc = `We're three friends that hangout in a`
const desc2 = `garage talking sports. Give us a listen!`

const descArray = [desc, desc2]

//PodArray

const soundcloud = {
  source: "fa-soundcloud",
  title: "SoundCloud",
  alt: `SoundCloud logo`,
  id: `soundcloud`,
  link: "https://soundcloud.com/andrew-miller-92566355"
};

const spotify = {
  source: "fa-spotify",
  title: "Spotify",
  alt: `Spotify logo`,
  id: `spotify`,
  link: "https://open.spotify.com/show/3pJSKX8ymOpTZ1erLjRuzJ"
};

const youtube = {
  source: "fa-youtube",
  title: "YouTube",
  alt: `YouTube logo`,
  id: `youtube`,
  link: "https://www.youtube.com/channel/UC8-PDeILSrtgQlKsZcrY-LQ"
  
}

const techArray = [soundcloud, spotify, youtube]

//Video Carousel

const vidOne = {
  title: `GTS Episode 45`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/f04iCnYJuKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week we recap NFL divisional round, Preview the championship games and big moves with Coaches going on around the league.`,
};

const vidTwo = {
  title: `GTS Episode 44`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wUobcylSX74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week We recap Super Wild Card Weekend, Our predictions for the Divisional Round, coaching moves around the league and of course Bears watch 2022.`,
};

const vidThree = {
  title: `GTS Episode 43`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4JcnJLNMxpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week we recap  College Football National Championship, Week 18 of the NFL, we preview Super Wildcard Weekend, and Black Monday.`,
};

const vidFour = {
  title: `GTS Episode 41`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Nyq-nR939X4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week we recap big moments in week 16 of the NFL, College football playoffs match ups, Bobby's bets and much more.`,
};

const vidFive = {
  title: `GTS Episode 40`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SQAknZn4vDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week we recap week 15 in the NFL, Bobby's bets, our takes on the refs and much more.`,
};

const vidSix = {
  title: `GTS Episode 39`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/EhatkM36BFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week we recap week 14 of the NFL, College football big news, Bobby's bets and a new segment.`,
};

const vidSeven = {
  title: `GTS Episode 38`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MF5M21vL4hY title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This week we recap week 13 of the NFL, College football championship weekend, MLB lockout and of course Bobby's bet.`,
};



const carouselVidArray = [vidOne, vidTwo, vidThree, vidFour, vidFive, vidSix, vidSeven];

export { links, descArray, vidData, techArray, carouselVidArray }