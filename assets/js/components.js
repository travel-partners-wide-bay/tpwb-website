
const BUSINESS_NAME = "Travel Partners Wide Bay";
const CONTACT_PHONE = "0420 818 155";
const CONTACT_EMAIL = "paula.henry@travelpartners.com.au";
const AUTHOR = "AussieDev81";
const AUTHOR_URL = "https://aussiedev81.com";
const NAVBAR_LOGO = "./assets/img/logo-calendar.svg";
const SOCIAL_MEDIA_CHANNELS = [
	{ url: "https://www.facebook.com/profile.php?id=100083352670350", icon: "fa-brands fa-facebook-f fa-xl", name: "Facebook" },
	{ url: "https://www.instagram.com/travel_partners_wide_bay/", icon: "fa-brands fa-instagram fa-xl", name: "Instagram" },
	// { url: "https://twitter.com/travelpartnerswidebay", icon: "fa-brands fa-twitter fa-xl", name: "Twitter" },
	// { url: "https://linkedin.com/travelpartnerswidebay", icon: "fa-brands fa-linkedin fa-xl", name: "LinedIn" },
];
const HUMM90_AFFILIATE_LINK = "https://apply.flexicards.com.au/PromotionSelector?seller=E1351&ifol=False&Welcome=0&sid=553087ce-7582-49f3-b084-81e44c69f5b8";

const SITE_PAGES = [
    {name: "Home", path: "./"},
    {name: "About", path: "about.html"},
    {name: "Services", path: "services.html"},
    {name: "Contact", path: "contact.html"},
    // {name: "Privacy", path: "privacy.html"},
]



/**
 * Get the name of the page being viewed
 * @returns The name of the current page ("Home" for index.html) minus the ".html" file extension
 */
let currentPage = () => {
	let name = location.pathname.split("/").pop();

	if(name == "") name = "Home"
	else if(name.includes(".html")) name = name.replace(".html", "");

	return name;
}


/**
 * Capitalize the first letter in a word
 * @param {*} word The word to be capitalized
 * @returns A word with the first letter in uppercase, and the remainder of the word in its original form
 */
const capitalizeWord = (word) => {
	return word[0].toUpperCase() + word.substring(1);
};


/**
 * Rewrite the page title dynamically
 */
document.getElementsByTagName("title")[0].innerHTML = ` ${capitalizeWord(currentPage())} - ${BUSINESS_NAME}`;


/**
 * 
 * @returns 
 */
const socialBanner = () => {
	let socialBannerContent = `<ul>`;

	// Add list items for all social media channels in the "socialMediaChannels" list
	SOCIAL_MEDIA_CHANNELS.forEach((channel) => {
		socialBannerContent += `<li><a href="${channel.url}"><i class="${channel.icon}" aria-label="${channel.name}"></i></a></li>`;
	});
	socialBannerContent += `</ul>`;

	return socialBannerContent;
};


/**
 * 
 * @param {*} targetPage 
 * @returns 
 */
const navbar = (targetPage = currentPage()) => {
	
	let navbarContent = `
        <a href="/"><img class="brand-logo" src="${NAVBAR_LOGO}" /></a>
		<a href="/"<div class="brand-title">${BUSINESS_NAME}</div></a>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>`;

    SITE_PAGES.forEach((page) => {
        navbarContent += `<li>
        <a href="${page.path}"
        class="nav-item ${page.name.toUpperCase() === targetPage.toUpperCase() ? 'active' : ''}">
        ${page.name}
        </a>
    </li>`;
    })

    navbarContent += `
            </ul>
        </div>
    `;

	return navbarContent;
};



/**
 * Activates the navbar toggle button for mobile views 
 */
const navbarToggler = () => {
	const toggleButton = document.getElementsByClassName("toggle-button")[0];
	const navbarLinks = document.getElementsByClassName("navbar-links")[0];

	toggleButton.addEventListener("click", () => {
		navbarLinks.classList.toggle("active");
	});
};



/**
 * 
 * @returns The info used in the center white section of the contact page
 */
const contactPageInfo = () => {

    let content = `
        <!-- Contact information -->
        <ul id="contact-info">
        <h3>Contact</h3>
            <li><a href="tel:${CONTACT_PHONE}"><i class="fa-solid fa-phone fa-xl"></i>${CONTACT_PHONE}</a></li>
            <li><a href="mailto:${CONTACT_EMAIL}"><i class="fa-regular fa-envelope fa-xl"></i>${CONTACT_EMAIL}</a></li>
            
            <!-- Social media links -->
            <ul id="social">`;
        SOCIAL_MEDIA_CHANNELS.forEach((channel) => {
            content += `<li><a href="${channel.url}"><i class="${channel.icon}" aria-label="${channel.name}"></i></a></li>`;
        });
        content += `
        </ul>`;

    return content;
};



/**
 * 
 * @returns The footer section including logo, menu, and contact info including social icons
 */
const footer = () => {
	let footerContent = `
		<footer>
			<div id="logo"><a href="/"><img src="${NAVBAR_LOGO}" width="auto" height="180"></a></div>
			<!-- Footer menu links -->
			<ul id="nav-menu">`;
	SITE_PAGES.forEach((page) => {
		footerContent += `<li><a href="${page.path}">${page.name}</a></li>`;
	});
	footerContent += `
			</ul>

			<!-- Contact information -->
			<ul id="contact-info">
			<h3>Contact</h3>
				<li><a href="tel:${CONTACT_PHONE}"><i class="fa-solid fa-phone fa-xl"></i>${CONTACT_PHONE}</a></li>
				<li><a href="mailto:${CONTACT_EMAIL}"><i class="fa-regular fa-envelope fa-xl"></i>${CONTACT_EMAIL}</a></li>
				<!-- Social media links -->
				<ul id="social">`;
	SOCIAL_MEDIA_CHANNELS.forEach((social) => {
		footerContent += `<li><a href="${social.url}" class="${social.icon}" aria-label="${social.name}" target="_blank"></a></li>`;
	});
	footerContent += `
			    </ul>
            </ul>
			<!-- Copyright notice -->
			<div id="copyright">
				© ${BUSINESS_NAME} - ${new Date().getFullYear()} - All Rights Reserved
			</div>
			<!-- Website author attribution - Do not remove -->
			<div id="attribution">
				Website by <a href="${AUTHOR_URL}" target="_blank">${AUTHOR}</a>
			</div>
		</footer>`;

	return footerContent;
};



/**
 * The "Scroll to top" button that shows once the user scrolls beyond the scroll limit
 */
window.onload = () => {
	let scrollBtn = document.createElement("button");
	scrollBtn.id = "scroll-top-btn";
	scrollBtn.title = "Go to top";
	scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
	scrollBtn.innerHTML = '<i class="fa-solid fa-jet-fighter-up fa-xl"></i>';
	document.body.appendChild(scrollBtn);

	//Independent browser scroll limits
	window.onscroll = () => {
		const scrollLimit = 150;
		let chromiumTop = document.documentElement.scrollTop;
		let safariTop = document.body.scrollTop;
		scrollBtn.style.display = chromiumTop > scrollLimit || safariTop > scrollLimit ? "block" : "none";
	};
}
