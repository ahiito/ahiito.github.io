# Projekt zaliczeniowy z Frondend Developer - CDV 

https://ahiito.github.io/index.html
https://github.com/ahiito/ahiito.github.io

Projekt zaliczeniowy Frondend Developer na CDV - zaliczenie z JS 
Na stronie głównej górną część zajmuje się sekcja Hero Baner ze sloganem strony buy-A-car oraz zdjęciem głównym jako tło. Poniżej znajduje się sekacja grid_container, w której znajduje się 12 samochodów do wyboru.
Grit container ma właściwości display:flex, ma to zapewnić aby strona była w dużym stopniu responsywna 
każdy blok z samochodem jest odrębnym przyciskiem, po wybranku którego użytkownik jest przenoszony na kolejną stronę form.html 

każdy samochód w js jest obiektem o unikatowym IDxx
(umożliwia to zbudowanie funkcji dodawania kolejnych samochodów podając odpowiednie elementy obiektu) 

Informacje o wybranym aucie są zapisywane w localStorage i pobierane z niego na stronie form.html 
Projekt zawiera dwa pliki .js. jeden obsługiwany w index.html drugi w form.html
po wybraniu auta użytkownik przenoszony jest do strony formularza gdzie może wybrać opcje dodatkowe 
do wyboru jest sposób finansowania (gotówka lub leasing)
opcje ubezpieczenia oraz opcje dodatkowe 
każdoroazowo użytkownik potwierdza wybór przyciskiem "dodaj opcje dodatkowe do zamówienia" co aktualizuje pole z ceną końcową. 
(w tym miejscu można poprawić formatowanie wartości - formatowanie walutowe)
Przycisk wróć do strony wyboru auta przenosi użytkownika ponownie do strony głównej 
poniżej znajduje się formularz w którym użytkownik podaje swoje dane do zamówienia 
wszystkie pola muszą być wypełnione - sprawdza to funkcja w .js, jeśli któreś pole jest niewypełnione strona wysyła alert z informacja o brakujących informacjach w formularzu 
data dostawy jest ustawiona automatycznie na min 14 dni od bieżącej daty również ta wartość jest przekazywana do DOM.min co blokuje uzytkownikowi wybór daty mniejszej niż 14 dni od dnia dzisiejszego 

Po wybraniu opcji dodatkowych i wypełnieniu formularza zamówienia i potwierdzeniu przyciskiem "potwierdz zamówienie" 
sekacja grid_container zostaje ukryta funkcją w js display:none, w tym samym czasie sekacja summary_container dostaje atrybut display:flex. Podsumowanie zawiera informację o wybranym aucie, informacjach użytkownika z formularza zapisanych w obiekcie $user. oraz wybranych opcjach dodatkowych wraz z ceną. 
Przycisk w podsumowaniu "wróc do strony głównej" przekierowuje użytownika do strony głównej jesnocześnie kasuje infoermacje przechowywane w localStorage 

Poprawki (Maj)
- wszystkie zmiany umieszczone w branchu "poprawki" na GitHub
- zaktualizowano plik README.md o informację co zostało poprawione 
- poprawiono date picker 
- zmiana stylowania przycisku, aby nie dotykał dolnej krawędzi ramki w sekcji "opcji dodatkowych" 
- wszystkie obiekty definiujące samochody umieszczone w tablicy o nazwie "cars"
- dodano linie kodu w addEventListener dla przycisku potwierdzającego zamówienie tak aby automatycznie potwierdzał opcje jeśli użytkownik tego nie rozbi (ma to na celu uniknięcie wyświetlania pustych wartości w podsumowaniu)
- zastosowano pętle po elementach tablicy cars oraz nasłuchowanie eventów na stronie przez co zredukowano powtórzony kod w pliku script.js 
- dodano zapisywanie danych użytkownika w localStorage tak, aby po odświeżeniu strony formularza dane były uzupełnione.
