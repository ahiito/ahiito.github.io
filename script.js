
//biblioteka samochodów w postaci listy obiektów o identyfikatorze IDxx
const ID1 = {brand: "Volvo", model: "PV544", year: "1962", pwr: "102KM", milage: "176 tys km", price: 162000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID01.png"};
const ID2 = {brand: "Citroen", model: "2CV", year: "1978", pwr: "77KM", milage: "224 tys km", price: 78000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID02.png"};
const ID3 = {brand: "Fiat", model: "128 Rally", year: "1988", pwr: "82KM", milage: "236 tys km", price: 63000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID03.png"};
const ID4 = {brand: "Fiat", model: "128 Coupe SLI", year: "1992", pwr: "126KM", milage: "184 tys km", price: 92000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID04.png"};
const ID5 = {brand: "Pontiac", model: "Firebird", year: "1967", pwr: "175KM", milage: "212 tys km", price: 112000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID05.png"};
const ID6 = {brand: "Aston Martin", model: "DB5", year: "1971", pwr: "162KM", milage: "123 tys km", price: 178000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID06.png"};
const ID7 = {brand: "Ford", model: "F100", year: "1960", pwr: "115KM", milage: "276 tys km", price: 99000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID07.png"};
const ID8 = {brand: "Dodge", model: "Challenger", year: "1970", pwr: "275KM", milage: "206 tys km", price: 173000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID08.png"};
const ID9 = {brand: "BMW", model: "Serii 3 (E30)", year: "1988", pwr: "182KM", milage: "221 tys km", price: 103000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID09.png"};
const ID10 = {brand: "Ford", model: "Mustang GT", year: "1967", pwr: "325KM", milage: "312 tys km", price: 320000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID10.png"};
const ID11 = {brand: "Porshe", model: "356", year: "1958", pwr: "242KM", milage: "313 tys km", price: 389000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID11.png"};
const ID12 = {brand: "Ferrari", model: "F40", year: "1988", pwr: "478KM", milage: "112 tys km", price: 728000, asistance: false, rims: false, insur: false, tires: false, img: "./Assets/img/ID12.png"};
const cars = [ID1,ID2,ID3,ID4,ID5,ID6,ID7,ID8,ID9,ID10,ID11,ID12];

//deklracja zmiennych do których zostanie przypisane wybrane auto w localStorage
let chosenAuto;
let chosenAutoString 
//Pętla po elementach tablicy cars oraz modyfikacja elementów DOM - uwaga z code review (eliminacja powtórzonego kodu)
for (let i=1; i < cars.length + 1; i++) {
  //pobranie elementów HTML po id elementu HTML
  $brand = document.getElementById(`ID`+ i + `brand`);
  $model = document.getElementById(`ID`+ i + `model`);
  $year = document.getElementById(`ID`+ i + `year`);
  $pwr = document.getElementById(`ID`+ i + `pwr`);
  $milage = document.getElementById(`ID`+ i + `milage`);
  $price = document.getElementById(`ID`+ i + `price`);
  //przypisanie do elementów HTML właściwości obiektów zdefiniowanych w ID..
  $brand.innerText = cars[i-1].brand;
  $model.innerText = cars[i-1].model;
  $year.innerText = cars[i-1].year;
  $pwr.innerText = cars[i-1].pwr;
  $milage.innerText = cars[i-1].milage;
  $price.innerText = cars[i-1].price;
  // funkcja zapisująca elementy wybranego auta w localStorage i przekierowujące usera na kolejną stronę z formularzem
  $ID_btn = document.getElementById(`ID`+ i + `_btn`);
  window.localStorage.clear(chosenAuto);
  $ID_btn.addEventListener("click", () => {
    chosenAutoString = JSON.stringify(cars[i-1]); 
    localStorage.setItem (chosenAuto, chosenAutoString); 
    window.location.href = "form.html"; 
    });
  }