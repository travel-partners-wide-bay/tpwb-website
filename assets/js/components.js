// List of social media channels
const socialMediaChannels = [
	{ url: "https://facebook.com/travelpartnerswidebay", icon: "fa-brands fa-facebook-f fa-xl" },
	{ url: "https://instagram.com/travelpartnerswidebay", icon: "fa-brands fa-instagram fa-xl" },
	{ url: "https://twitter.com/travelpartnerswidebay", icon: "fa-brands fa-twitter fa-xl" },
	{ url: "https://linkedin.com/travelpartnerswidebay", icon: "fa-brands fa-linkedin fa-xl" },
];

const BUSINESS_NAME = "Travel Partners Wide Bay";
const CONTACT_PHONE = "0420 818 155";
const CONTACT_EMAIL = "paula.henry@travelpartners.com.au";
const AUTHOR = "AussieDev81";
const AUTHOR_URL = "https://aussiedev81.com";
const currentPage = window.location.pathname.split("/").pop().split(".")[0];

window.onload = () => {
    headerContent();// Add top social bar and main navbar
    navbarToggler();// Init navbar toggle button
	footerContent();// Add footer content
    // locations();
};


//============================== HEADER =========================================

const headerContent = () => {
	const headerElement = document.getElementsByTagName("header")[0];

    // Add social header and main navbar to the header element
    headerElement.innerHTML = socialHeaderBar();
    headerElement.innerHTML += mainNavbar();

	return headerElement;
};

const socialHeaderBar = () => {
	let content = `<div class="social-bar"><ul>`;

	// Add list items for all social media channels in the "socialMediaChannels" list
	socialMediaChannels.forEach((channel) => {
		content += `<li><a href="${channel.url}"><i class="${channel.icon}"></i></a></li>`;
	});
	content += `</ul></div>`;

	return content;
};

const mainNavbar = () => {
    console.log(currentPage)
    let content = `
        <nav class="navbar">
            <img class="brand-logo" src="./assets/img/logo-calendar.svg" />
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
                    <li><a class="${currentPage == "index" ? "active" : ""}" href="index.html">Home</a></li>
                    <li><a class="${currentPage == "about" ? "active" : ""}" href="about.html">About</a></li>
                    <li><a class="${currentPage == "services" ? "active" : ""}" href="services.html">Services</a></li>
                    <li><a class="${currentPage == "contact" ? "active" : ""}" href="contact.html">Contact</a></li>
                    <li><a class="${currentPage == "privacy" ? "active" : ""}" href="privacy.html">Privacy</a></li>
                </ul>
            </div>

        </nav>
    `;

    return content;
}

const navbarToggler = () => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
    });
}

//===============================================================================

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
            <li><a class="${currentPage === "index.html" ? "active" : ""}" href="index.html">Home</a></li>
            <li><a class="${currentPage === "about.html" ? "active" : ""}" href="about.html">About</a></li>
            <li><a class="${currentPage === "services.html" ? "active" : ""}" href="services.html">Services</a></li>
            <li><a class="${currentPage === "contact.html" ? "active" : ""}" href="contact.html">Contact</a></li>
            <li><a class="${currentPage === "privacy.html" ? "active" : ""}" href="privacy.html">Privacy</a></li>
        </ul>
    `;

const socialFooterLinks = () => {
        let links = `
    <!-- Social media links -->
    <ul id="social">
`;

        socialMediaChannels.forEach((channel) => {
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

//===============================================================================

function findByCityName(obj, cityName){
    return obj.City.includes(cityName);
}


const locations = async () => {
    
    const locations = await fetch("./assets/locations.json")
    .then((response) => response.json())
    .then((data) => {return data})
    .catch((err) => console.error(err));

    console.log(locations);
    let target = "Syd";
    // let locationsByCityName = (targetCity) => locations.filter((loc) => {
    //     return loc.City.includes(targetCity);
    // })

    let locationsByCityName = (targetCity) => {
        return locations.filter((loc) => loc.City.includes(targetCity))
    }
    
    console.log("Filtered", locationsByCityName(target));
}
