
//biblioteka samochodów w postaci listy obiektów o identyfikatorze IDxx
let $ID01 = {brand: "Volvo", model: "PV544", year: "1962", pwr: "102KM", milage: "176 tys km", price: 162000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID01.png"};
let $ID02 = {brand: "Citroen", model: "2CV", year: "1978", pwr: "77KM", milage: "224 tys km", price: 78000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID02.png"};
let $ID03 = {brand: "Fiat", model: "128 Rally", year: "1988", pwr: "82KM", milage: "236 tys km", price: 63000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID03.png"};
let $ID04 = {brand: "Fiat", model: "128 Coupe SLI", year: "1992", pwr: "126KM", milage: "184 tys km", price: 92000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID04.png"};
let $ID05 = {brand: "Pontiac", model: "Firebird", year: "1967", pwr: "175KM", milage: "212 tys km", price: 112000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID05.png"};
let $ID06 = {brand: "Aston Martin", model: "DB5", year: "1971", pwr: "162KM", milage: "123 tys km", price: 178000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID06.png"};
let $ID07 = {brand: "Ford", model: "F100", year: "1960", pwr: "115KM", milage: "276 tys km", price: 99000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID07.png"};
let $ID08 = {brand: "Dodge", model: "Challenger", year: "1970", pwr: "275KM", milage: "206 tys km", price: 173000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID08.png"};
let $ID09 = {brand: "BMW", model: "Serii 3 (E30)", year: "1988", pwr: "182KM", milage: "221 tys km", price: 103000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID09.png"};
let $ID10 = {brand: "Ford", model: "Mustang GT", year: "1967", pwr: "325KM", milage: "312 tys km", price: 320000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID10.png"};
let $ID11 = {brand: "Porshe", model: "356", year: "1958", pwr: "242KM", milage: "313 tys km", price: 389000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID11.png"};
let $ID12 = {brand: "Ferrari", model: "F40", year: "1988", pwr: "478KM", milage: "112 tys km", price: 728000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID12.png"};

//deklracja zmiennych do których zostanie przypisane wybrane auti
let $chosenAuto;
let $srcStored;
let $ID_btn

//przycisk, który zapisuje w localstorage wybrany obiekt o konkretnym IDxx
//event na naciśnięcie obiektu o ID01 
$ID_btn = document.getElementById("ID01_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID01); //zamieniam tablice z autem na string przed zapisaniem w local storage
  localStorage.setItem ($chosenAuto, $chosenAutoString); //zapisuje w local storage string
  window.location.href = "form.html"; //przekierwoanie na stronę formularza
});

//event na naciśnięcie obiektu o ID02
$ID_btn = document.getElementById("ID02_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID02); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID03
$ID_btn = document.getElementById("ID03_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID03); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID04
$ID_btn = document.getElementById("ID04_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID04); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID05
$ID_btn = document.getElementById("ID05_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID05); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID06
$ID_btn = document.getElementById("ID06_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID06); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID07
$ID_btn = document.getElementById("ID07_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID07); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID08
$ID_btn = document.getElementById("ID08_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID08); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID09
$ID_btn = document.getElementById("ID09_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID09); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID10
$ID_btn = document.getElementById("ID10_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID10); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID11
$ID_btn = document.getElementById("ID11_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID11); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});

//event na naciśnięcie obiektu o ID12
$ID_btn = document.getElementById("ID12_btn");
window.localStorage.clear($chosenAuto);
$ID_btn.addEventListener("click", () => {
  let $chosenAutoString = JSON.stringify($ID12); 
  localStorage.setItem ($chosenAuto, $chosenAutoString); 
  window.location.href = "form.html"; 
});





//deklracje zmiennych, które modyfuikują HTML informacjami zawartymi w obiekcie o danym IDxx
//ID01
const $ID01brand = document.getElementById("ID01brand");
const $ID01model = document.getElementById("ID01model");
const $ID01year = document.getElementById("ID01year");
const $ID01pwr = document.getElementById("ID01pwr");
const $ID01milage = document.getElementById("ID01milage");
const $ID01price = document.getElementById("ID01price");

$ID01brand.innerText = $ID01.brand;
$ID01model.innerText = $ID01.model;
$ID01year.innerText = $ID01.year;
$ID01pwr.innerText = $ID01.pwr;
$ID01milage.innerText = $ID01.milage;
$ID01price.innerText = $ID01.price;

//ID02
const $ID02brand = document.getElementById("ID02brand");
const $ID02model = document.getElementById("ID02model");
const $ID02year = document.getElementById("ID02year");
const $ID02pwr = document.getElementById("ID02pwr");
const $ID02milage = document.getElementById("ID02milage");
const $ID02price = document.getElementById("ID02price");

$ID02brand.innerText = $ID02.brand;
$ID02model.innerText = $ID02.model;
$ID02year.innerText = $ID02.year;
$ID02pwr.innerText = $ID02.pwr;
$ID02milage.innerText = $ID02.milage;
$ID02price.innerText = $ID02.price;

//ID03
const $ID03brand = document.getElementById("ID03brand");
const $ID03model = document.getElementById("ID03model");
const $ID03year = document.getElementById("ID03year");
const $ID03pwr = document.getElementById("ID03pwr");
const $ID03milage = document.getElementById("ID03milage");
const $ID03price = document.getElementById("ID03price");

$ID03brand.innerText = $ID03.brand;
$ID03model.innerText = $ID03.model;
$ID03year.innerText = $ID03.year;
$ID03pwr.innerText = $ID03.pwr;
$ID03milage.innerText = $ID03.milage;
$ID03price.innerText = $ID03.price;

//ID04
const $ID04brand = document.getElementById("ID04brand");
const $ID04model = document.getElementById("ID04model");
const $ID04year = document.getElementById("ID04year");
const $ID04pwr = document.getElementById("ID04pwr");
const $ID04milage = document.getElementById("ID04milage");
const $ID04price = document.getElementById("ID04price");

$ID04brand.innerText = $ID04.brand;
$ID04model.innerText = $ID04.model;
$ID04year.innerText = $ID04.year;
$ID04pwr.innerText = $ID04.pwr;
$ID04milage.innerText = $ID04.milage;
$ID04price.innerText = $ID04.price;

//ID05
const $ID05brand = document.getElementById("ID05brand");
const $ID05model = document.getElementById("ID05model");
const $ID05year = document.getElementById("ID05year");
const $ID05pwr = document.getElementById("ID05pwr");
const $ID05milage = document.getElementById("ID05milage");
const $ID05price = document.getElementById("ID05price");

$ID05brand.innerText = $ID05.brand;
$ID05model.innerText = $ID05.model;
$ID05year.innerText = $ID05.year;
$ID05pwr.innerText = $ID05.pwr;
$ID05milage.innerText = $ID05.milage;
$ID05price.innerText = $ID05.price;

//ID06
const $ID06brand = document.getElementById("ID06brand");
const $ID06model = document.getElementById("ID06model");
const $ID06year = document.getElementById("ID06year");
const $ID06pwr = document.getElementById("ID06pwr");
const $ID06milage = document.getElementById("ID06milage");
const $ID06price = document.getElementById("ID06price");

$ID06brand.innerText = $ID06.brand;
$ID06model.innerText = $ID06.model;
$ID06year.innerText = $ID06.year;
$ID06pwr.innerText = $ID06.pwr;
$ID06milage.innerText = $ID06.milage;
$ID06price.innerText = $ID06.price;

//ID07
const $ID07brand = document.getElementById("ID07brand");
const $ID07model = document.getElementById("ID07model");
const $ID07year = document.getElementById("ID07year");
const $ID07pwr = document.getElementById("ID07pwr");
const $ID07milage = document.getElementById("ID07milage");
const $ID07price = document.getElementById("ID07price");

$ID07brand.innerText = $ID07.brand;
$ID07model.innerText = $ID07.model;
$ID07year.innerText = $ID07.year;
$ID07pwr.innerText = $ID07.pwr;
$ID07milage.innerText = $ID07.milage;
$ID07price.innerText = $ID07.price;

//ID08
const $ID08brand = document.getElementById("ID08brand");
const $ID08model = document.getElementById("ID08model");
const $ID08year = document.getElementById("ID08year");
const $ID08pwr = document.getElementById("ID08pwr");
const $ID08milage = document.getElementById("ID08milage");
const $ID08price = document.getElementById("ID08price");

$ID08brand.innerText = $ID08.brand;
$ID08model.innerText = $ID08.model;
$ID08year.innerText = $ID08.year;
$ID08pwr.innerText = $ID08.pwr;
$ID08milage.innerText = $ID08.milage;
$ID08price.innerText = $ID08.price;

//ID09
const $ID09brand = document.getElementById("ID09brand");
const $ID09model = document.getElementById("ID09model");
const $ID09year = document.getElementById("ID09year");
const $ID09pwr = document.getElementById("ID09pwr");
const $ID09milage = document.getElementById("ID09milage");
const $ID09price = document.getElementById("ID09price");

$ID09brand.innerText = $ID09.brand;
$ID09model.innerText = $ID09.model;
$ID09year.innerText = $ID09.year;
$ID09pwr.innerText = $ID09.pwr;
$ID09milage.innerText = $ID09.milage;
$ID09price.innerText = $ID09.price;

//ID10
const $ID10brand = document.getElementById("ID10brand");
const $ID10model = document.getElementById("ID10model");
const $ID10year = document.getElementById("ID10year");
const $ID10pwr = document.getElementById("ID10pwr");
const $ID10milage = document.getElementById("ID10milage");
const $ID10price = document.getElementById("ID10price");

$ID10brand.innerText = $ID10.brand;
$ID10model.innerText = $ID10.model;
$ID10year.innerText = $ID10.year;
$ID10pwr.innerText = $ID10.pwr;
$ID10milage.innerText = $ID10.milage;
$ID10price.innerText = $ID10.price;

//ID11
const $ID11brand = document.getElementById("ID11brand");
const $ID11model = document.getElementById("ID11model");
const $ID11year = document.getElementById("ID11year");
const $ID11pwr = document.getElementById("ID11pwr");
const $ID11milage = document.getElementById("ID11milage");
const $ID11price = document.getElementById("ID11price");

$ID11brand.innerText = $ID11.brand;
$ID11model.innerText = $ID11.model;
$ID11year.innerText = $ID11.year;
$ID11pwr.innerText = $ID11.pwr;
$ID11milage.innerText = $ID11.milage;
$ID11price.innerText = $ID11.price;

//ID12
const $ID12brand = document.getElementById("ID12brand");
const $ID12model = document.getElementById("ID12model");
const $ID12year = document.getElementById("ID12year");
const $ID12pwr = document.getElementById("ID12pwr");
const $ID12milage = document.getElementById("ID12milage");
const $ID12price = document.getElementById("ID12price");

$ID12brand.innerText = $ID12.brand;
$ID12model.innerText = $ID12.model;
$ID12year.innerText = $ID12.year;
$ID12pwr.innerText = $ID12.pwr;
$ID12milage.innerText = $ID12.milage;
$ID12price.innerText = $ID12.price;