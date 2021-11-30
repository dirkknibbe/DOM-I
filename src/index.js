const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

//Nav links
const links = document.querySelectorAll("nav a")
console.log(links);

const navLinks = Array.from(links);
console.log(navLinks)

navLinks[0].textContent = siteContent['nav']['nav-item-1'] // Services
navLinks[1].textContent = siteContent['nav']['nav-item-2'] // Product
navLinks[2].textContent = siteContent['nav']['nav-item-3'] // Vision
navLinks[3].textContent = siteContent['nav']['nav-item-4'] // Features
navLinks[4].textContent = siteContent['nav']['nav-item-5'] // About
navLinks[5].textContent = siteContent['nav']['nav-item-6'] // Contact

links.forEach(n => n.className = 'italic');


// main content
//header image
const header = document.querySelector('header')
const logoNav = header.querySelector('img');
logoNav.src = "mocks/img/logo.png";

const domIsAwesome = document.querySelector('h1')
domIsAwesome.textContent = siteContent['cta']['h1']

//dom image
const domImagePlace = document.querySelector('.cta')
const domImage = domImagePlace.querySelector('img')
domImage.src = "mocks/img/cta.png";

//last image
const lastImagePlace = document.querySelector('.main-content')
const lastImage = lastImagePlace.querySelector('img')
lastImage.src = "mocks/img/accent.png";

const buttonText = document.querySelector('button')
buttonText.textContent = siteContent['cta']['button']



//titles array
const contentTitles = document.querySelectorAll('h4')
console.log(contentTitles)

const mainContentTitles = Array.from(contentTitles);
console.log(mainContentTitles)

//titles

mainContentTitles[0].textContent = siteContent['main-content']['features-h4']
mainContentTitles[1].textContent = siteContent['main-content']['about-h4'] 
mainContentTitles[2].textContent = siteContent['main-content']['services-h4'] 
mainContentTitles[3].textContent = siteContent['main-content']['product-h4'] 
mainContentTitles[4].textContent = siteContent['main-content']['vision-h4'] 
 
//text array
const contentText = document.querySelectorAll('.text-content p')
console.log(contentText)

const mainContentText = Array.from(contentText);
console.log(mainContentText)

//contents under each title

mainContentText[0].textContent = siteContent['main-content']['features-content']
mainContentText[1].textContent = siteContent['main-content']['about-content'] 
mainContentText[2].textContent = siteContent['main-content']['services-content'] 
mainContentText[3].textContent = siteContent['main-content']['product-content'] 
mainContentText[4].textContent = siteContent['main-content']['vision-content'] 


//contact title
const contactTitle = document.querySelectorAll('.contact h4')
console.log(contactTitle)

const contactTitleArray = Array.from(contactTitle);
contactTitle[0].textContent = siteContent['contact']['contact-h4'];

//contact details
const contactDetails = document.querySelectorAll('.contact p')


const contactDetailsArray = Array.from(contactDetails);
contactDetailsArray[0].textContent = siteContent['contact']['address'];
contactDetailsArray[1].textContent = siteContent['contact']['phone'];
contactDetailsArray[2].textContent = siteContent['contact']['email'];


const footerNav = document.querySelector('footer a');
footerNav.textContent = siteContent['footer']['copyright']

footerNav.className = 'bold';






