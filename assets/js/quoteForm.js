const quoteForm = document.querySelector(".quote-request");
const quoteSubmitButton = document.getElementById("quote-btn");
const quoteFormToggle = document.getElementById("quote-toggle");

document.getElementById("quote-toggle").addEventListener("click", () => {
	//Access the current display value for the quote form
	let currentDisplay = getComputedStyle(quoteForm).getPropertyValue("display");
	//Display the form if hidden, else hide if currently displayed
	quoteForm.style.display = currentDisplay == "none" ? "block" : "none";
});

document.getElementById("quote-form")
.addEventListener('submit', (event) => {
	event.preventDefault();

	const form = event.target;

	const quoteRequest = {
		numAdults: form["adults"].value,
		numChildren: form["children"].value,
		departLocation: form["departure"].value,
		arriveLocation: form["arrival"].value,
		fromDate: form["from"].value,
		toDate: form["to"].value,
		name: form["name"].value,
		phone: form["phone"].value,
		email: form["email"].value,
	};

	function findByCityName(obj, cityName) {
		return obj.City.includes(cityName);
	}

	const locations = async () => {
		const locations = await fetch("./assets/locations.json")
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((err) => console.error(err));

		console.log(locations);
		let target = "Syd";
		// let locationsByCityName = (targetCity) => locations.filter((loc) => {
		//     return loc.City.includes(targetCity);
		// })

		let locationsByCityName = (targetCity) => {
			return locations.filter((loc) => loc.City.includes(targetCity));
		};

		console.log("Filtered", locationsByCityName(target));
	};
	
	/*
    Todo:
        Compile and email quote request to Paula
        Alert the user that a request has been sent, and to expect a followup call or email
    */
})