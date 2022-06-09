import './assets/css/style.css'
import './assets/css/fontawesome.css'
import './assets/vendors/css/glightbox.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { about } from './modules/home/about.js'
import { videos } from './modules/home/videos'
import { footer } from './modules/footer'
import { nav } from './modules/nav'
import { tech } from './modules/home/tech.js'
import favicon from './assets/images/GTS_favicon.png'
import { GBox } from './assets/vendors/js/glightbox.js'

library.add(fas, far, fab) 

dom.i2svg() 

const head = document.getElementsByTagName("head")[0]
const link = document.createElement("link")
link.rel ="shortcut icon"
link.href = favicon
head.appendChild(link)

nav()
about()
tech()
videos()
footer()

GBox()

const lightbox = GLightbox({
    href: "https://www.youtube.com/watch?v=Es2wZi-KWrQ",
    type: "video",
    source: "youtube", //vimeo, youtube or local
    width: 900,
    autoPlayVideos: "true",
  });

let images = Array.from(document.querySelectorAll("img"))
for (let i = 0; i < images.length; i++) {
  images[i].classList.add("lazyload")

}