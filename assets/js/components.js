const DEV_MODE_ACTIVE = true;

const BUSINESS_NAME = "Travel Partners Wide Bay";
const CONTACT_PHONE = "0420 818 155";
const CONTACT_EMAIL = "paula.henry@travelpartners.com.au";
const AUTHOR = "AussieDev81";
const AUTHOR_URL = "https://aussiedev81.com";
const NAVBAR_LOGO = "./assets/img/logo-calendar.svg";
const CURRENT_PAGE = window.location.pathname.split("/").pop().split(".")[0];
const SOCIAL_MEDIA_CHANNELS = [
	{ url: "https://facebook.com/travelpartnerswidebay", icon: "fa-brands fa-facebook-f fa-xl" },
	{ url: "https://instagram.com/travelpartnerswidebay", icon: "fa-brands fa-instagram fa-xl" },
	{ url: "https://twitter.com/travelpartnerswidebay", icon: "fa-brands fa-twitter fa-xl" },
	{ url: "https://linkedin.com/travelpartnerswidebay", icon: "fa-brands fa-linkedin fa-xl" },
];
const HOME = `~/${DEV_MODE_ACTIVE ? "index.html" : ""}`;
const ABOUT = `~/about${DEV_MODE_ACTIVE ? ".html" : ""}`;
const SERVICES = `~/services${DEV_MODE_ACTIVE ? ".html" : ""}`;
const CONTACT = `~/contact${DEV_MODE_ACTIVE ? ".html" : ""}`;
const PRIVACY = `~/privacy${DEV_MODE_ACTIVE ? ".html" : ""}`;
const HUMM90_AFFILIATE_LINK = "https://apply.flexicards.com.au/PromotionSelector?seller=E1351&ifol=False&Welcome=0&sid=553087ce-7582-49f3-b084-81e44c69f5b8";

window.onload = () => {
	socialBanner();
	topNavbar();
	navbarToggler(); // Init navbar toggle button
	footerContent(); // Add footer content
    scrollUpButton();
};


//============================== SOCIAL BANNER   =========================================
const socialBanner = () => {
	const socialBannerElement = document.getElementsByClassName("social-banner")[0];
	let socialBannerContent = `<ul>`;

	// Add list items for all social media channels in the "socialMediaChannels" list
	SOCIAL_MEDIA_CHANNELS.forEach((channel) => {
		socialBannerContent += `<li><a href="${channel.url}"><i class="${channel.icon}"></i></a></li>`;
	});
	socialBannerContent += `</ul>`;

	socialBannerElement.innerHTML = socialBannerContent;
};

//============================== NAVBAR =========================================
const topNavbar = () => {
	console.log(CURRENT_PAGE);
	const topNavbarElement = document.getElementsByClassName("navbar")[0];

	let topNavbarContent = `
            <a href="${HOME}"><img class="brand-logo" src="${NAVBAR_LOGO}" /></a>
            <div class="brand-title">${BUSINESS_NAME}</div>

            <!-- Toggle button for mobile devices -->
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>

            <!-- Navigation menu links -->
            <div class="navbar-links">
                <ul>
                    <li><a class="${CURRENT_PAGE == "index" ? "active" : ""}" href="${HOME}">Home</a></li>
                    <li><a class="${CURRENT_PAGE == "about" ? "active" : ""}" href="${ABOUT}">About</a></li>
                    <li><a class="${CURRENT_PAGE == "services" ? "active" : ""}" href="${SERVICES}">Services</a></li>
                    <li><a class="${CURRENT_PAGE == "contact" ? "active" : ""}" href="${CONTACT}">Contact</a></li>
                    <li><a class="${CURRENT_PAGE == "privacy" ? "active" : ""}" href="${PRIVACY}">Privacy</a></li>
                </ul>
            </div>

    `;

	topNavbarElement.innerHTML = topNavbarContent;
};

//======================== NAVBAR TOGGLER =======================================
const navbarToggler = () => {
	const toggleButton = document.getElementsByClassName("toggle-button")[0];
	const navbarLinks = document.getElementsByClassName("navbar-links")[0];

	toggleButton.addEventListener("click", () => {
		navbarLinks.classList.toggle("active");
	});
};


//============================== CONTACT PAGE INFO =========================================

const contactPageInfo = () => {
	const contactInfoDiv = document.getElementsByClassName("contact-page-info")[0];
    contactInfoDiv.innerHTML = footerContactInfo;
};

//============================== FOOTER =========================================

const footerContent = () => {
	const footerElement = document.getElementsByTagName("footer")[0];

	footerElement.innerHTML = footerLogo;
	footerElement.innerHTML += footerNavMenu;
	footerElement.innerHTML += footerContactInfo;
	footerElement.innerHTML += copyright;
	footerElement.innerHTML += attribution;

	return footerElement;
};

const footerLogo = `
    <div id="logo">
    <a href="index.html">
        <img src="./assets/img/logo-calendar.svg" width="100%" height="auto" />
    </a>
    </div>
`;

const footerNavMenu = `
    <!-- Footer menu links -->
    <ul id="nav-menu">
        <li><a class="${CURRENT_PAGE === "index.html" ? "active" : ""}" href="index.html">Home</a></li>
        <li><a class="${CURRENT_PAGE === "about.html" ? "active" : ""}" href="about.html">About</a></li>
        <li><a class="${CURRENT_PAGE === "services.html" ? "active" : ""}" href="services.html">Services</a></li>
        <li><a class="${CURRENT_PAGE === "contact.html" ? "active" : ""}" href="contact.html">Contact</a></li>
        <li><a class="${CURRENT_PAGE === "privacy.html" ? "active" : ""}" href="privacy.html">Privacy</a></li>
    </ul>
`;

const socialFooterLinks = () => {
	let links = `
        <!-- Social media links -->
        <ul id="social">
    `;

	SOCIAL_MEDIA_CHANNELS.forEach((channel) => {
		links += `<li><a href="${channel.url}"><i class="${channel.icon}"></i></a></li>`;
	});

	links += `</ul>`;
	return links;
};

const footerContactInfo = `
    <!-- Contact information -->
    <ul id="contact-info">
    <h3>Contact</h3>
        <li><a href="tel:${CONTACT_PHONE}"><i class="fa-solid fa-phone fa-xl"></i>${CONTACT_PHONE}</a></li>
        <li><a href="mailto:${CONTACT_EMAIL}"><i class="fa-regular fa-envelope fa-xl"></i>${CONTACT_EMAIL}</a></li>
        ${socialFooterLinks()}
    </ul>
`;

const copyright = `
    <!-- Copyright notice -->
    <div id="copyright">
        &copy; ${BUSINESS_NAME} ${new Date().getFullYear()} - All Rights Reserved
    </div>
`;

const attribution = `
    <!-- Website author attribution - Do not remove -->
    <div id="attribution">
        Website by <a href="${AUTHOR_URL}" target="_blank">${AUTHOR}</a>
    </div>
`;


//============================== SCROLL TO TOP OF PAGE BUTTON =========================================
const scrollUpButton = () => {
    document.body.innerHTML += `
        <button id="scroll-top-btn" title="Go to top" onclick="scrollUp()">
			<i class="fa-solid fa-jet-fighter-up fa-xl"></i>
		</button>
    `;
}

//Independent browser scroll limits
window.onscroll = () => {
	const scrollLimit = 150;
	let scrollBtn = document.getElementById("scroll-top-btn");
	let chromiumTop = document.documentElement.scrollTop;
	let safariTop = document.body.scrollTop;
	scrollBtn.style.display = chromiumTop > scrollLimit || safariTop > scrollLimit ? "block" : "none";
};

//Enable smooth scrolling
const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });