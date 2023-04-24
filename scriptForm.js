let $chosenAuto;
let $chosenAutoGet = localStorage.getItem($chosenAuto); //wczytuje z local storage string
let $chosenAutoForm = JSON.parse($chosenAutoGet); // zamiana na tablice po zapisaniu w local storage
console.log($chosenAutoForm);

//przypisuje zapisane elementy do stałych
const $formBrand = document.getElementById("form_brand");
const $formModel = document.getElementById("form_model");
const $formYear = document.getElementById("form_year");
const $formPwr = document.getElementById("form_pwr");
const $formMilage = document.getElementById("form_milage");
const $formPrice = document.getElementById("form_price");
const $formImg = document.getElementById("form_img");

//przesyła zapisane dane wyranego auta do HTML
$formBrand.innerText = $chosenAutoForm.brand;
$formModel.innerText = $chosenAutoForm.model;
$formYear.innerText = $chosenAutoForm.year;
$formPwr.innerText = $chosenAutoForm.pwr;
$formMilage.innerText = $chosenAutoForm.milage;
$formPrice.innerText = $chosenAutoForm.price;
$formImg.src = $chosenAutoForm.img;

// $chosenAutoForm.tires = +$chosenAutoForm.price * 0.15
// console.log($chosenAutoForm.tires)

let $paymentMethod = "Gotówka"; //definicja zmiannej zapisująca metodę finansowania
let $finalPrice;
$finalPrice = document.getElementById("finalPrice"); // definicja zmiennej zapisująca finalną cenę
$finalPrice.innerText = $chosenAutoForm.price;

let $noneInsurButton = document.getElementById("noneInsur");
let $basicInsurButton = document.getElementById("basicInsur");
let $expInsurButton = document.getElementById("expInsur");
let $premiumInsurButton = document.getElementById("premiumInsur");

let $paymentMethodRadio = document.querySelector("#payCash");
let $asistanceButton = document.getElementById("assistance");
let $rimsButton = document.getElementById("rims");
let $tiresButton = document.getElementById("tires");
let $addonsBtn = document.getElementById("addonsBtn");
let $goBackBtn = document.getElementById("goBackBtn");

$goBackBtn.addEventListener("click", () => {
  window.location.href = "index.html";
})

$addonsBtn.addEventListener("click", () => {
  if ($paymentMethodRadio.checked) {
    $paymentMethod = "Gotówka";
  } else {
    $paymentMethod = "Leasing";
  }
  if ($noneInsurButton.checked) {
    $chosenAutoForm.insur = 0;
  } else if ($basicInsurButton.checked) {
    $chosenAutoForm.insur = +$chosenAutoForm.price * 0.01;
  } else if ($expInsurButton.checked) {
    $chosenAutoForm.insur = +$chosenAutoForm.price * 0.015;
  } else if ($premiumInsurButton.checked) {
    $chosenAutoForm.insur = +$chosenAutoForm.price * 0.03;
    console.log($chosenAutoForm);
  }
  if ($asistanceButton.checked) {
    $chosenAutoForm.asistance = +$chosenAutoForm.price * 0.002;
  } else {
    $chosenAutoForm.asistance = 0;
  }
  if ($rimsButton.checked) {
    $chosenAutoForm.rims = +$chosenAutoForm.price * 0.005;
  } else {
    $chosenAutoForm.rims = 0;
  }
  if ($tiresButton.checked) {
    $chosenAutoForm.tires = +$chosenAutoForm.price * 0.0025;
  } else {
    $chosenAutoForm.tires = 0;
  }
  $finalPrice.innerText =
    +$chosenAutoForm.price +
    $chosenAutoForm.insur +
    $chosenAutoForm.asistance +
    $chosenAutoForm.rims +
    $chosenAutoForm.tires;
});

//blok kodu obliczający 14 dni od dzisiejszej daty i wstawiający wartość min do HTML tak aby minimalną data dostarczenia auta 
//była data min 14 dni od dzisiejszej daty
let currentDate = new Date(Date.now() + 12096e5);
let thisDay;
let thisMonth;
let cthisYear;
thisDay = currentDate.getDate();
thisMonth = currentDate.getMonth()+1;
thisYear = currentDate.getFullYear();
let $Date = `${thisYear}-0${thisMonth}-0${thisDay}`;
let $newDate = $Date;
document.getElementById("datePicker").min = $Date;
document.getElementById("datePicker").value = $Date;


//walidacja formularza po wciśnieciu przycisku potwierdzającego zamowienie
const $submitBtn = document.getElementById("submitBtn");
$submitBtn.addEventListener("click", () => {
  //definicja klienta/"usera" i wszystkich jego elementów pobieranych z formularza HTML
  let $user = {firstName: "", lastName: "", address: "", homeNumber: "", cityName: "", zipCode: "", phoneNumber: "", date: ""};
  $user.firstName = document.getElementById("firstName").value;
  $user.lastName = document.getElementById("lastName").value;
  $user.address = document.getElementById("address").value;
  $user.homeNumber = document.getElementById("homeNumber").value;
  $user.cityName = document.getElementById("cityName").value;
  $user.zipCode = document.getElementById("zipCode").value;
  $user.phoneNumber = document.getElementById("phoneNumber").value;
  $user.emailAddress = document.getElementById("emailAddress").value;
  $user.date =  document.getElementById("datePicker").value;
  //funkcja walidująca zawartość formularza
  function validateFunc(content) {
    if (content === "") {
      return false;
    } else {
      return true;
    }
  };
console.log($user);
console.log($user.date)
//logika która w przypadku braku min jednego elementu w formularzu da wynik false 
  let allDataFilled = validateFunc($user.firstName) && validateFunc($user.lastName) && validateFunc($user.address)
  && validateFunc($user.homeNumber) && validateFunc($user.cityName) && validateFunc($user.zipCode) && validateFunc($user.phoneNumber) 
  && validateFunc($user.emailAddress) && validateFunc($user.date);
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
  document.getElementById("formBrand").innerText = $chosenAutoForm.brand;
  document.getElementById("formModel").innerText = $chosenAutoForm.model;
  document.getElementById("formYear").innerText = $chosenAutoForm.year;
  document.getElementById("formPwr").innerText = $chosenAutoForm.pwr;
  document.getElementById("formMilage").innerText = $chosenAutoForm.milage;
  document.getElementById("formPrice").innerText = $chosenAutoForm.price;
  document.getElementById("formImg").src = $chosenAutoForm.img;

  //onformacje o opcjach dodatkowych w podsumowaniu
  $addonsPrice = +$chosenAutoForm.insur + $chosenAutoForm.asistance + $chosenAutoForm.rims + $chosenAutoForm.tires;
  document.getElementById("paymentMethod").innerText = $paymentMethod;
  document.getElementById("summaryInsurance").innerText = $chosenAutoForm.insur;
  document.getElementById("summaryAssistance").innerText = $chosenAutoForm.asistance;
  document.getElementById("summaryRims").innerText = $chosenAutoForm.rims;
  document.getElementById("summaryTires").innerText = $chosenAutoForm.tires;
  document.getElementById("summaryAddons").innerText = $addonsPrice;
  document.getElementById("summaryPrice").innerText = +$addonsPrice + $chosenAutoForm.price;

  //informacje o użytkowniku w podsumowaniu
  document.getElementById("summaryFirstName").innerText = $user.firstName;
  document.getElementById("summaryLastName").innerText = $user.lastName;
  document.getElementById("summaryAddress").innerText = $user.address;
  document.getElementById("summaryHomeNumber").innerText = $user.homeNumber;
  document.getElementById("summaryZipCode").innerText = $user.zipCode;
  document.getElementById("summaryCityName").innerText = $user.cityName;
  document.getElementById("summaryPhoneNumber").innerText = $user.phoneNumber;
  document.getElementById("summaryEmailAddress").innerText = $user.emailAddress;
  document.getElementById("summaryDate").innerText = $user.date;
});
//przycisk przekierowania do strony głównej po zakupie
$returnBtn = document.getElementById("returnBtn");
$returnBtn.addEventListener("click", () => {
  window.localStorage.clear($chosenAuto);
  window.location.href = "index.html"; //przekierwoanie na stronę główną
});