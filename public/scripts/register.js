const img = document.querySelector('.img');
const oldButton = document.querySelector('#old-person');
const careButton = document.querySelector('#caregiver');
const API_KEY =
  'YWQxZDMwMmFlZTYwNGQwOWJjZWUxYTUwOTg2Mjg3ZmQ6MDI4NTVlNjItZTE4NC00YTNmLThjMDktOTBlZTY4MTg1NTY2';
const picture = document.getElementById('pictureUser');

function selectPicture() {
  if (picture) {
    picture.addEventListener('change', (event) => {
      if (event.target.files.length !== 0) {
        const imgFile = event.target.files[0];
        const imgSrc = URL.createObjectURL(imgFile);
        img.src = imgSrc;
      }
    });
  }
}

selectPicture();

const regex = /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i;
const formElement = document.querySelector('.form');
const errorMessage = document.querySelector('.pElement');
const zipCode = document.querySelector('#zipcode');
const houseNumber = document.querySelector('#houseNumber');

const adressButton = document.querySelector('.adress');
const city = document.querySelector('.city');
const street = document.querySelector('.street');
const zipCodeText = document.querySelector('.zipcode');
const province = document.querySelector('.province');

const cityInput = document.querySelector('#city');
const streetInput = document.querySelector('#street');
const zipCodeTextInput = document.querySelector('#zipcode');
const provinceInput = document.querySelector('#province');
const pictureInput = document.querySelector('.pictureInput');
const latInput = document.querySelector('#lat');
const lngInput = document.querySelector('#lng');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!regex.test(zipCode.value)) {
    errorMessage.textContent = 'De postcode is onjuist';
  }
  if (!cityInput.value) {
    errorMessage.textContent = 'Genereer een adress';
  }
  if (!pictureInput.value) {
    errorMessage.textContent = 'Vul een foto in';
  }
  if (cityInput.value && pictureInput.value) {
    formElement.submit();
  }
});

adressButton.addEventListener('click', async () => {
  if (zipCode.value && houseNumber.value) {
    zipCode.value.toUpperCase();
    fetch(
      `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${zipCode.value}%20${houseNumber.value}&countryFilter=NL`,
      {
        method: 'GET',
        headers: { apiKey: API_KEY },
      }
    )
      .then((response) => response.json())
      .then((apiData) => {
        const data = apiData.locations;
        if (data[0].locationType === 'POSTAL_CODE') {
          errorMessage.textContent = 'Adress is onjuist';
        }
        if (data[0].locationType === 'EXACT_ADDRESS') {
          city.textContent = data[0].address.city;
          street.textContent = data[0].address.street;
          zipCodeText.textContent = data[0].address.postalCode;
          province.textContent = data[0].address.state;

          cityInput.value = data[0].address.city;
          streetInput.value = data[0].address.street;
          zipCodeTextInput.value = data[0].address.postalCode;
          provinceInput.value = data[0].address.state;
          latInput.value = data[0].referencePosition.latitude;
          lngInput.value = data[0].referencePosition.longitude;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
});

function styleButton() {
  if (window.location.pathname === '/register') {
    oldButton.style.backgroundColor = '#519188';
    oldButton.style.boxShadow = '0px 0px 5px #519188';
    oldButton.style.fontWeight = 'bold';
    oldButton.classList.add('selected');

    careButton.style.backgroundColor = 'white';
    careButton.style.boxShadow = 'none';
    careButton.style.fontWeight = 'normal';
  }
  if (window.location.pathname === '/register-zorg') {
    careButton.style.backgroundColor = '#519188';
    careButton.style.boxShadow = '0px 0px 5px #519188';
    careButton.style.fontWeight = 'bold';
    careButton.classList.add('selected');

    oldButton.style.backgroundColor = 'white';
    oldButton.style.boxShadow = 'none';
    oldButton.style.fontWeight = 'normal';
  }
}

styleButton();
