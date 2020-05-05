// VARIABLES

let counterCont = document.getElementById('counter'), //counter container
    eggCont = document.getElementById('egg_container'), //egg container
    eggChoice = document.querySelectorAll("input[name=animal]"), // egg choice 
    animalChoice = document.querySelector('.animal_choice'),
    btn = document.querySelector('#button'), // start button
    Animal = {
        kura: {
            time: 3 * 60,
            picture: "<img src='img/kura.png'>"
        },
        ges: {
            time: 7.5 * 60,
            picture: "<img src='img/ges.png'>"
        },
        strus: {
            time: 45 * 60,
            picture: "<img src='img/strus.png'>"
        },
        kaczka: {
            time: 4.5 * 60,
            picture: "<img src='img/kaczka.png'>"
        },
        przepiorka: {
            time: 1.5 * 60,
            picture: "<img src='img/przepiorka.png'>"
        },
        indyk: {
            time: 5 * 60,
            picture: "<img src='img/indyk.png'>"
        },
        perliczka: {
            time: 4.5 * 60,
            picture: "<img src='img/perliczka.png'>"
        }
    },
    chosenTime = Animal.kura.time; //default cooking time

// timer format
const timeFormat = (sec) => {
    let timeSec = (sec % 60).toLocaleString(undefined, {
            minimumIntegerDigits: 2
        }),
        time_minutes = (Math.floor(sec / 60) % 60).toLocaleString(undefined, {
            minimumIntegerDigits: 1
        });
    return `${time_minutes}:${timeSec}`;
};

eggChoice.forEach(choice => {
    choice.addEventListener("change", function () {
        if (choice.checked) {
            chosenTime = Animal[`${choice.value}`].time;
            eggCont.innerHTML = Animal[`${choice.value}`].picture;
            counterCont.innerHTML = timeFormat(Animal[`${choice.value}`].time);
        }
    });
});

btn.addEventListener("click", function () {
    let i = chosenTime;
    eggChoice.forEach(el => el.disabled = true);
    this.disabled = true;

    const time = setInterval(() => {
        i--;
        counterCont.innerHTML = timeFormat(i);

        if (i < 30 && i%5==0) counterCont.classList.toggle('red')

        if (i <= 0) {
            console.log("Koniec!");
            clearInterval(time);
            this.disabled = false;
            eggChoice.forEach(el => el.disabled = false);

        }
    }, 1000);
});
