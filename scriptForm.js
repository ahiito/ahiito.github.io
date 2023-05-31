let chosenAuto;
let chosenAutoGet = localStorage.getItem("chosenAuto"); //wczytuje z local storage string
let chosenAutoForm = JSON.parse(chosenAutoGet); // zamiana na tablice po zapisaniu w local storage
//definicja klienta/"usera"
let userString;
let userStored;
let user;
let userInLocalStorage;

//przypisuje zapisane elementy do stałych
$formBrand = document.getElementById("form_brand");
$formModel = document.getElementById("form_model");
$formYear = document.getElementById("form_year");
$formPwr = document.getElementById("form_pwr");
$formMilage = document.getElementById("form_milage");
$formPrice = document.getElementById("form_price");
$formImg = document.getElementById("form_img");

//przesyła zapisane dane wyranego auta do HTML
$formBrand.innerText = chosenAutoForm.brand;
$formModel.innerText = chosenAutoForm.model;
$formYear.innerText = chosenAutoForm.year;
$formPwr.innerText = chosenAutoForm.pwr;
$formMilage.innerText = chosenAutoForm.milage;
$formPrice.innerText = chosenAutoForm.price;
$formImg.src = chosenAutoForm.img;

let paymentMethod = "Gotówka"; //definicja zmiannej zapisująca metodę finansowania
$finalPrice = document.getElementById("finalPrice"); // definicja zmiennej zapisująca finalną cenę
$finalPrice.innerText = chosenAutoForm.price;

$noneInsurButton = document.getElementById("noneInsur");
$basicInsurButton = document.getElementById("basicInsur");
$expInsurButton = document.getElementById("expInsur");
$premiumInsurButton = document.getElementById("premiumInsur");

$paymentMethodRadio = document.querySelector("#payCash");
$asistanceButton = document.getElementById("assistance");
$rimsButton = document.getElementById("rims");
$tiresButton = document.getElementById("tires");
$addonsBtn = document.getElementById("addonsBtn");
$goBackBtn = document.getElementById("goBackBtn");

// funkcja pobierająca informacje z localStorage
userInLocalStorage = localStorage.getItem("user"); //wczytuje z local storage string
userStored = JSON.parse(userInLocalStorage); // zamiana na tablice po zapisaniu w local storage

//kod w którym po przyciśnieciu przyciusku "powrót do strony wyboru aut" przenosi nas na stronę główną wyboru samochodu
$goBackBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

//blok kodu - przycisk dodania opcji dodatkowych i źródła finansowania oraz zapisania ich w zmiennych (obiekcie $chosenAuto)
$addonsBtn.addEventListener("click", () => {
  if ($paymentMethodRadio.checked) {
    paymentMethod = "Gotówka";
  } else {
    paymentMethod = "Leasing";
  }
  if ($noneInsurButton.checked) {
    chosenAutoForm.insur = 0;
  } else if ($basicInsurButton.checked) {
    chosenAutoForm.insur = +chosenAutoForm.price * 0.01;
  } else if ($expInsurButton.checked) {
    chosenAutoForm.insur = +chosenAutoForm.price * 0.015;
  } else if ($premiumInsurButton.checked) {
    chosenAutoForm.insur = +chosenAutoForm.price * 0.03;
  }
  if ($asistanceButton.checked) {
    chosenAutoForm.asistance = +chosenAutoForm.price * 0.002;
  } else {
    chosenAutoForm.asistance = 0;
  }
  if ($rimsButton.checked) {
    chosenAutoForm.rims = +chosenAutoForm.price * 0.005;
  } else {
    chosenAutoForm.rims = 0;
  }
  if ($tiresButton.checked) {
    chosenAutoForm.tires = +chosenAutoForm.price * 0.0025;
  } else {
    chosenAutoForm.tires = 0;
  }
  $finalPrice.innerText =
    +chosenAutoForm.price +
    chosenAutoForm.insur +
    chosenAutoForm.asistance +
    chosenAutoForm.rims +
    chosenAutoForm.tires;
});

//blok kodu obliczający 14 dni od dzisiejszej daty i wstawiający wartość min do HTML tak aby minimalną data dostarczenia auta
//była data min 14 dni od dnia obecnego
let currentDate = new Date(Date.now() + 12096e5);
let thisDay;
let thisMonth;
let cthisYear;
thisDay = String(currentDate.getDate()).padStart(2, "0");
thisMonth = currentDate.getMonth() + 1;
thisYear = currentDate.getFullYear();
let newDate = `${thisYear}-0${thisMonth}-${thisDay}`;
document.getElementById("datePicker").min = newDate;
document.getElementById("datePicker").value = newDate;

// warunek który sprawdza czy w localstorage został pobrany zapisany user,
// jeśli tak to uzupełnia formularz
if (userStored === null) {
  console.log("brak usera w localStorage");
} else {
  document.getElementById("firstName").value = userStored.firstName;
  document.getElementById("lastName").value = userStored.lastName;
  document.getElementById("address").value = userStored.address;
  document.getElementById("homeNumber").value = userStored.homeNumber;
  document.getElementById("cityName").value = userStored.cityName;
  document.getElementById("zipCode").value = userStored.zipCode;
  document.getElementById("phoneNumber").value = userStored.phoneNumber;
  document.getElementById("emailAddress").value = userStored.emailAddress;
  document.getElementById("datePicker").value = userStored.date;
}

//walidacja formularza po wciśnieciu przycisku potwierdzającego zamowienie
$submitBtn = document.getElementById("submitBtn");
$submitBtn.addEventListener("click", () => {
  $addonsBtn.dispatchEvent(new Event("click")); // linia kodu potwierdzająca wybór opcji w przypadku gdyby uzytkownik nie potwierdził wyboru
  //pobranie wszystkich elementów usera pobieranych z formularza HTML
  userStored = {
    firstName: "",
    lastName: "",
    address: "",
    homeNumber: "",
    cityName: "",
    zipCode: "",
    emailAddress: "",
    phoneNumber: "",
    date: "",
  };
  user = {
    firstName: "",
    lastName: "",
    address: "",
    homeNumber: "",
    cityName: "",
    zipCode: "",
    emailAddress: "",
    phoneNumber: "",
    date: "",
  };
  user.firstName = document.getElementById("firstName").value;
  user.lastName = document.getElementById("lastName").value;
  user.address = document.getElementById("address").value;
  user.homeNumber = document.getElementById("homeNumber").value;
  user.cityName = document.getElementById("cityName").value;
  user.zipCode = document.getElementById("zipCode").value;
  user.phoneNumber = document.getElementById("phoneNumber").value;
  user.emailAddress = document.getElementById("emailAddress").value;
  user.date = document.getElementById("datePicker").value;

  //fragment kodu zapisujący dane użytkownika w localStorage po potwierdzeniu formularza
  userString = JSON.stringify(user); //zamieniam tablice z userem na string przed zapisaniem w local storage
  localStorage.setItem("user", userString); //zapisuje w local storage string
  //funkcja walidująca zawartość formularza
  //jeśli jakieś pole jest puste zostanie wyświetlony komunikat o brakującym elemencie formularza w postaci alertu
  function validateFunc(content) {
    if (content === "") {
      return false;
    } else {
      return true;
    }
  }
  //logika która w przypadku braku min jednego elementu w formularzu da wynik false
  let allDataFilled =
    validateFunc(user.firstName) &&
    validateFunc(user.lastName) &&
    validateFunc(user.address) &&
    validateFunc(user.homeNumber) &&
    validateFunc(user.cityName) &&
    validateFunc(user.zipCode) &&
    validateFunc(user.phoneNumber) &&
    validateFunc(user.emailAddress) &&
    validateFunc(user.date);
  //warunek który przełącza na okno podsumowania jeśli wszystkie pola formularza zostały wypełnione i mają status true,
  //jeśli choć jeden element jest false pojawi się komunikat o braku informacji w formularzu
  if (allDataFilled === true) {
    const sectionGritContainer = document.querySelector(".grid_container");
    sectionGritContainer.style.display = "none";
    const sectionSummaryContainer =
      document.querySelector(".summary_container");
    sectionSummaryContainer.style.display = "flex";
  } else {
    alert("Wszystkie elementy formularza muszą być wypełnione");
  }

  //informacje o samochodzie w podsumowaniu
  document.getElementById("formBrand").innerText = chosenAutoForm.brand;
  document.getElementById("formModel").innerText = chosenAutoForm.model;
  document.getElementById("formYear").innerText = chosenAutoForm.year;
  document.getElementById("formPwr").innerText = chosenAutoForm.pwr;
  document.getElementById("formMilage").innerText = chosenAutoForm.milage;
  document.getElementById("formPrice").innerText = chosenAutoForm.price;
  document.getElementById("formImg").src = chosenAutoForm.img;

  //informacje o opcjach dodatkowych w podsumowaniu
  let addonsPrice =
    +chosenAutoForm.insur +
    chosenAutoForm.asistance +
    chosenAutoForm.rims +
    chosenAutoForm.tires;
  document.getElementById("paymentMethod").innerText = paymentMethod;
  document.getElementById("summaryInsurance").innerText = chosenAutoForm.insur;
  document.getElementById("summaryAssistance").innerText =
    chosenAutoForm.asistance;
  document.getElementById("summaryRims").innerText = chosenAutoForm.rims;
  document.getElementById("summaryTires").innerText = chosenAutoForm.tires;
  document.getElementById("summaryAddons").innerText = addonsPrice;
  document.getElementById("summaryPrice").innerText =
    +addonsPrice + chosenAutoForm.price;

  //informacje o użytkowniku w podsumowaniu
  document.getElementById("summaryFirstName").innerText = user.firstName;
  document.getElementById("summaryLastName").innerText = user.lastName;
  document.getElementById("summaryAddress").innerText = user.address;
  document.getElementById("summaryHomeNumber").innerText = user.homeNumber;
  document.getElementById("summaryZipCode").innerText = user.zipCode;
  document.getElementById("summaryCityName").innerText = user.cityName;
  document.getElementById("summaryPhoneNumber").innerText = user.phoneNumber;
  document.getElementById("summaryEmailAddress").innerText = user.emailAddress;
  document.getElementById("summaryDate").innerText = user.date;
});

//przycisk przekierowania do strony głównej po zakupie
$returnBtn = document.getElementById("returnBtn");
$returnBtn.addEventListener("click", () => {
  window.localStorage.clear("chosenAuto");
  window.localStorage.clear("user");
  window.location.href = "index.html"; //przekierwoanie na stronę główną
});