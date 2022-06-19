const img = document.querySelector(".img");
const oldButton = document.querySelector("#old-person");
const careButton = document.querySelector("#caregiver");

document.getElementById("pictureUser").addEventListener("change", (event) => {
	if (event.target.files.length !== 0) {
		const imgFile = event.target.files[0];
		const imgSrc = URL.createObjectURL(imgFile);
		img.src = imgSrc;
	}
});

const regex = /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i;
const formElement = document.querySelector(".form");
const errorMessage = document.querySelector(".pElement");
const zipCode = document.querySelector("#zipcode");
const houseNumber = document.querySelector("#houseNumber");

const adressButton = document.querySelector(".adress");
const city = document.querySelector(".city");
const street = document.querySelector(".street");
const zipCodeText = document.querySelector(".zipcode");
const province = document.querySelector(".province");

const cityInput = document.querySelector("#city");
const streetInput = document.querySelector("#street");
const zipCodeTextInput = document.querySelector("#zipcode");
const provinceInput = document.querySelector("#province");
const pictureInput = document.querySelector(".pictureInput");
const latInput = document.querySelector("#lat");
const lngInput = document.querySelector("#lng");

const checkboxesSearch = document.querySelectorAll(
	".search input[type=checkbox]:checked"
);
const checkboxes1 = document.querySelectorAll(
	".checkbox1 input[type=checkbox]:checked"
);

const checkboxes2 = document.querySelectorAll(
	".checkbox2 input[type=checkbox]:checked"
);

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
	if (!regex.test(zipCode.value)) {
		errorMessage.textContent = "De postcode is onjuist";
	}
	if (!cityInput.value) {
		errorMessage.textContent = "Genereer een adress";
	}
	if (!pictureInput.value) {
		errorMessage.textContent = "Vul een foto in";
	}
	if (checkboxesSearch.length === 0) {
		errorMessage.textContent = "Geef aan waar u naar zoekt";
	}
	if (checkboxes1.length === 0) {
		errorMessage.textContent = "Vul de eigenschappen in";
	}
	if (checkboxes2.length === 0) {
		errorMessage.textContent = "Vul de eigenschappen in";
	}
	if (regex.test(zipCode.value) && cityInput.value) {
		formElement.submit();
	}
});

adressButton.addEventListener("click", async () => {
	if (zipCode.value && houseNumber.value) {
		zipCode.value.toUpperCase();
		fetch(
				`http://api.postcodedata.nl/v1/postcode/?postcode=${zipCode.value}&streetnumber=${houseNumber.value}&ref=domeinnaam.nl&type=json`
			)
			.then((response) => response.json())
			.then((apiData) => {
				const data = apiData;
				if (data.status === "error") {
					errorMessage.textContent = "Adress is onjuist";
				}
				if (data.status === "ok") {
					city.textContent = data.details[0].city;
					street.textContent = data.details[0].street;
					zipCodeText.textContent = data.details[0].postcode;
					province.textContent = data.details[0].province;

					cityInput.value = data.details[0].city;
					streetInput.value = data.details[0].street;
					zipCodeTextInput.value = data.details[0].postcode;
					provinceInput.value = data.details[0].province;
					latInput.value = data.details[0].lat;
					lngInput.value = data.details[0].lon;
				}
			})
			.catch((error) => {
				throw error;
			});
	}
});

function styleButton() {
	if (window.location.pathname === "/register") {
		oldButton.style.backgroundColor = "#519188";
		oldButton.style.boxShadow = "0px 0px 5px #519188";
		oldButton.style.fontWeight = "bold";
		oldButton.classList.add("selected");

		careButton.style.backgroundColor = "white";
		careButton.style.boxShadow = "none";
		careButton.style.fontWeight = "normal";
	}
	if (window.location.pathname === "/register-zorg") {
		careButton.style.backgroundColor = "#519188";
		careButton.style.boxShadow = "0px 0px 5px #519188";
		careButton.style.fontWeight = "bold";
		careButton.classList.add("selected");

		oldButton.style.backgroundColor = "white";
		oldButton.style.boxShadow = "none";
		oldButton.style.fontWeight = "normal";
	}
}

styleButton();