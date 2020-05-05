//formatuję czas
const sformatowanyTekst = function (liczbaSekund) {
    let time_seconds = (liczbaSekund % 60).toLocaleString(undefined, {
            minimumIntegerDigits: 2
        }),
        time_minutes = (Math.floor(liczbaSekund / 60) % 60).toLocaleString(undefined, {
            minimumIntegerDigits: 2
        });
    sformatowany = `${time_minutes}:${time_seconds}`;
    return sformatowany;
};

//pobieram kontener na counter czasu
const kontenercounter = document.getElementById('counter');

//pobieram kontener na jajko
const kontenerJajko = document.getElementById('egg_container');

//tutaj przechowuję dane o czasie gotowania (s) w zależności od gatunku
const Animal = {
    kura: 3 * 60,
    ges: 7.5 * 60,
    strus: 45 * 60,
    kaczka: 4.5 * 60,
    przepiorka: 1.5 * 60,
    indyk: 5 * 60,
    perliczka: 4.5 * 60,
}

//sprawdzam co zostało kliknięte i umieszczam czas i ilustracje na stronie
// chceckAnimal = function(jakieZwierze) {
//     if (progress === false) {
//         switch (jakieZwierze) {
//             case "kura":
//                 let czas = Animal.kura;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/kura.png'>";
//                 break;
//             case "ges":
//                 czas = Animal.ges;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/ges.png'>";
//                 break;
//             case "strus":
//                 czas = Animal.strus;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/strus.png'>";
//                 break;
//             case "kaczka":
//                 czas = Animal.kaczka;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/kaczka.png'>";
//                 break;
//             case "przepiorka":
//                 czas = Animal.przepiorka;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/przepiorka.png'>";
//                 break;
//             case "indyk":
//                 czas = Animal.indyk;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/indyk.png'>";
//                 break;
//             case "strus":
//                 czas = Animal.strus;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/strus.png'>";
//                 break;
//             case "perliczka":
//                 czas = Animal.perliczka;
//                 kontenercounter.innerHTML = sformatowanyTekst(czas);
//                 kontenerJajko.innerHTML = "<img src='img/perliczka.png'>";
//                 break;
//         }
//     }
// }
// const animal = document.querySelector('input[name="animal"]:checked').value;

// function sprawdzamKlika() {    
//     let ddd = document.querySelector('input[name="animal"]:checked').value;
//     console.log(ddd);
//     chceckAnimal(ddd);
// };

//sprawdzamKlika;

var progress = false;

function prepareEgg (animal) {
    return function (gotowanie){
       console.log(`Zajmie mi to ${sformatowanyTekst(gotowanie)} minut.`);
        kontenercounter.innerHTML = sformatowanyTekst(gotowanie);
        console.log(sformatowanyTekst(gotowanie));
        console.log(`Przygotuję jajko ${animal}.`);
        kontenerJajko.innerHTML = `<img src='img/${animal}.png'>`;
    }
}

const jajeczko = function (){
    return document.querySelector('input[name="animal"]:checked').value; 
}
console.log(jajeczko());

const animal = document.querySelector('input[name="animal"]:checked').value;

const ileGotowac = function (wybor){
    switch (wybor) {
        case "kura":
            return Animal.kura;
        case "ges":
            return Animal.ges;
        case "strus":
            return Animal.strus;
        case "kaczka":
            return Animal.kaczka;
        case "przepiorka":
            return Animal.przepiorka;
        case "indyk":
            return Animal.indyk;
        case "perliczka":
            return Animal.perliczka;
    };
    return
}
console.log(ileGotowac(jajeczko()));

const BoilEgg = prepareEgg(jajeczko())(ileGotowac(jajeczko()));

//tutaj nie rozumiem czemu jak klikam na element formularza to nie zmienia mi jajka i countera
const form = document.querySelector(".animal_choice");
form.addEventListener('click', BoilEgg);

BoilEgg

const btn = document.querySelector('#button');

let czas = ileGotowac(jajeczko());

// button start - po kliknięciu ma się wykonać funkcja odliczająca czas gotowania
// w tym czasie nie powinno być możliwe zmienienie zwierzęcia
// 
btn.addEventListener('click', function () {
    //wszystkim 
    let input = document.querySelectorAll('input[name="animal"]');
    for (inp of input) {
        inp.disabled = true;
    }
    progress = true;
    console.log(progress);
    this.disabled = true;
    
    if (typeof (czas) !== 'number') {
        console.log('Czas nie jest liczbą')
    }
    let i = czas;
    const time = setInterval(function () {
        //console.log(i);
        kontenercounter.innerHTML = sformatowanyTekst(i - 1)
        i--;

        if (i == 30 || i == 20 || i <= 10 & i > 0) {
            kontenercounter.className = "red";
        } else {
            kontenercounter.className = "";
        };

        if (i < 0) {
            this.disabled = false;
            console.log('koniec');
            kontenercounter.innerHTML = "--:--";
            clearInterval(time);
            for (ele of input) {
                ele.disabled = false;
            }
        }
    }.bind(this), 1000);
    progress = false;
});

