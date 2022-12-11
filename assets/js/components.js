
window.onload = () => {
    navbarContent();
    footerContent();
}

const currentPage = window.location.pathname.split("/").pop();


const navbarContent = () => {

    const navElement = document.getElementById("navbar");

    navElement.innerHTML = `
        <div id="logo">
            <img src="./assets/img/logo_1.jfif" width="80" height="auto" />
        </div>
        <span id="navbar-brand"><a href="index.html">Travel Partners Wide Bay</a></span>
        ${navigationMenu}
    `;
    return navElement;

}


const footerContent = () => {

	const footerElement = document.getElementById("footer")

	footerElement.innerHTML = logo;
	footerElement.innerHTML += navigationMenu;
    
    footerElement.innerHTML += contactInfo;
    footerElement.innerHTML += socialLinks;
	footerElement.innerHTML += copyright;
	footerElement.innerHTML += attribution;
	
	return footerElement;
}


const logo = `
    <div id="logo">
        <img src="./assets/img/logo_1.jfif" width="80" height="auto" />
    </div>
`;


const navigationMenu = `
        <ul id="menu">
            <li><a class="${currentPage === "index.html" ? "active" : ""}" href="index.html">Home</a></li>
            <li><a class="${currentPage === "about.html" ? "active" : ""}" href="about.html">About</a></li>
            <li><a class="${currentPage === "services.html" ? "active" : ""}" href="services.html">Services</a></li>
            <li><a class="${currentPage === "contact.html" ? "active" : ""}" href="contact.html">Contact</a></li>
            <li><a class="${currentPage === "privacy-policy.html" ? "active" : ""}" href="privacy-policy.html">Privacy</a></li>
        </ul>
    `;


const socialLinks = `
    <ul id="social">
        <li><a href="https://facebook.com/travelpartnerswidebay"><i class="fa-brands fa-facebook-f fa-xl"></i></a></li>
        <li><a href="https://instagram.com/travelpartnerswidebay"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
        <li><a href="https://twitter.com/travelpartnerswidebay"><i class="fa-brands fa-twitter fa-xl"></i></a></li>
        <li><a href="https://linkedin.com/travelpartnerswidebay"><i class="fa-brands fa-linkedin fa-xl"></i></a></li>
    </ul>
`;


const contactInfo = `
    <ul id="contact-info">
    <h3>Contact</h3>
        <li><a href="tel:123456789"><i class="fa-solid fa-phone fa-xl"></i>123456789</a></li>
        <li><a href="mailto:paula.henry@travelpartners.com.au"><i class="fa-regular fa-envelope fa-xl"></i>paula.henry@travelpartners.com.au</a></li>
    </ul>
`;


const copyright = `
    <div id="copyright">
        &copy; Travel Partners Wide Bay ${new Date().getFullYear()} - All Rights Reserved
    </div>
`;


const attribution = `
    <div id="attribution">
        Website by <a href="https://aussiedev81.com" target="_blank">AussieDev81</a>
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
    