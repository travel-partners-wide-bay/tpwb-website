
const toggleQuoteRequest = () => {
	const quoteRequestForm = document.getElementById("quote-request");
	//Access the current display value for the quote form
	let currentDisplay = getComputedStyle(quoteRequestForm).getPropertyValue("display");
	//Display the form if hidden, else hide if currently displayed
	quoteRequestForm.style.display = currentDisplay == "none" ? "block" : "none";
};

const submitEnquiryForm = (form) => {
	//Todo: Compile and email quote request to Paula
	const quoteRequest = {
		numAdults: form["adults"].value,
		numChildren: form["children"].value,
		departureLocation: form["departure"].value,
		arrivalLocation: form["arrival"].value,
		fromDate: form["from"].value,
		toDate: form["to"].value,
		name: form["name"].value,
		phone: form["phone"].value,
		email: form["email"].value,
	};
	console.log(quoteRequest);

	//Todo: Alert the user that a request has been sent, and to expect a followup call or email
	alert("This feature is not active yet");
};


const quoteFormElement = () => {
	return `
	<h2 class="quote-title">Request a Quote</h2>

            <form id="quote-form">
                
                <div class="passengers">   
                    <span>Passengers</span>
                    <div class="form-group">
                        <label for="adults">Adults</label>
                        <input type="number" min="0" max="10" value="0" id="adults">
                    </div>
                    <div class="form-group">
                        <label for="children">Children</label>
                        <input type="number" min="0" max="10" value="0" id="children">
                    </div>
                </div>

                <div class="locations">
                    <span>Departure &rarr; Destination</span>
                    <div class="form-group">
                        <label for="departure">Departure</label>
                        <input type="text" id="departure">
                    </div>
                    <div class="form-group">
                        <label for="arrival">Arrival</label>
                        <input type="text" id="arrival">
                    </div>
                </div>

                <div class="date-range">
                    <span>Date Range</span>
                    <div class="form-group">
                        <label for="from">From</label>
                        <input type="date" id="from">
                    </div>
                    <div class="form-group">
                        <label for="to">To</label>
                        <input type="date" id="to">
                    </div>
                </div>

                <div class="contact-details">
                    <Span>Contact Details</Span>
                    <label for="name">Name:</label>
                    <input type="text" id="name">
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" size="15">
                    <label for="email">Email:</label>
                    <input type="email" id="email">
                </div>

                <button type="button" class="submit-enquiry" onclick="submitEnquiryForm(this.form)">Send</button>
            </form>`;
}



// const populateLocations = async () => {
// 	return await fetch("./assets/locations.json")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			return data;
// 		})
// 		.catch((err) => console.error(err));
// };

// const LOCATIONS = (window.onload = populateLocations());

// function findByCityName(obj, cityName) {
// 	return obj.City.includes(cityName);
// }

// const searchLocation = async (city) => {
// 	const result = await LOCATIONS;
// 	return result.filter((loc) => loc.City.toUpperCase().includes(city.toUpperCase()));
// };