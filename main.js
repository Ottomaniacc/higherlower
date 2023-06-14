//Debug code

console.log(`main.js loaded.`);

//Een hele aardige welkomstbericht.

// alert(`Welkom bij Hoger-Lager!`);

//Leeftijd verifïeren

// const ageNumber = prompt(`Wat is uw leeftijd`);

// if (ageNumber >= 18) {
//     alert(`Welkom bij Hoger-Lager!`);
// } else {
//     alert(`U bent niet toegestaan om deze website te openen.`);
// }


let coins = 50
let throwOne;
let throwTwo;
let totalThrow;
let bankthrowOne;
let bankthrowTwo;
let bankTotalThrow;
let winner;

let coinsInPage = document.querySelector("#amount")

let higherDisabled = document.querySelector(`#higher`);
let lowerDisabled = document.querySelector(`#lower`);
let rollDisabled = document.querySelector('#roll');

let throwOnehtml = document.querySelector('#throwOneHtml');
let throwTwohtml = document.querySelector('#throwTwoHtml');

lowerDisabled.setAttribute(`disabled`, `disabled`);
higherDisabled.setAttribute(`disabled`, `disabled`);

//Nummer generator 3000
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

coinsInPage.innerHTML = coins


//Knoppen

function roll() {

    coins = coins -10;
    coinsInPage.innerHTML = coins

    throwOne = getRandomIntInclusive(1,6);
    throwTwo = getRandomIntInclusive(1,6);
    totalThrow = throwOne + throwTwo;
    console.log(totalThrow + "Totaal gegooid.");
    
    alert("Je hebt gegooid" + " " + throwOne  + " " + "en" + " " + throwTwo);
    alert("in totaal heb je" + ` ` + totalThrow + " " + ("gegooit") + ", denk je dat de dealer hoger of lager dan jou gooit?");

    throwOnehtml.innerHTML = totalThrow

    lowerDisabled.removeAttribute(`disabled`);
    higherDisabled.removeAttribute(`disabled`);

    rollDisabled.setAttribute('disabled', 'disabled');
}

function bankthrow(){
    bankthrowOne = getRandomIntInclusive(1,6);
    bankthrowTwo = getRandomIntInclusive(1,6);
    bankTotalThrow = bankthrowOne + bankthrowTwo;;
    alert('De bank heeft gegooid: '+ bankthrowOne + ' en '+ bankthrowTwo);

    throwTwohtml.innerHTML = bankTotalThrow
}

function lower() {
    alert("Je hebt lager gekozen.");
    bankthrow();

    if (totalThrow > bankTotalThrow){
        alert("Je hebt gewonnen")
        winner = true
    } else if (totalThrow < bankTotalThrow){
        alert('Je hebt verloren');
        winner = false
    }

    rollDisabled.removeAttribute(`disabled`);

    lowerDisabled.setAttribute(`disabled`, `disabled`);
    higherDisabled.setAttribute(`disabled`, `disabled`);

    rewards()
}

function higher() {
    alert("Je hebt hoger gekozen.");
    bankthrow();
    alert('Jouw totaal was ' +totalThrow +(' en de totaal van dealer was ' +bankTotalThrow));

    if (totalThrow < bankTotalThrow){
        alert("Je hebt gewonnen")
        winner = true
    } else if (totalThrow > bankTotalThrow){
        alert('Je hebt verloren');
        winner = false
    }



    lowerDisabled.setAttribute(`disabled`, `disabled`);
    higherDisabled.setAttribute(`disabled`, `disabled`);

    rewards()
}

function rewards(){
    if (winner == true){
        coins = coins + 20;
        coinsInPage.innerHTML = coins
    } else if (winner == false) {
        alert("Green credits gekregen..")
    } else{
        alert("Je hebt gelijk gespeelt.")
        coins = coins + 10;
        coinsInPage.innerHTML = coins
    }

    setTimeout(gameHasEnded, 3000);
}

function gameHasEnded(){
    throwOnehtml.innerHTML = ""
    throwTwohtml.innerHTML = ""
    rollDisabled.removeAttribute(`disabled`);
}


function hasEnoughCredits(){
    if(coins <= 0){
        alert("Je hebt geen credits meer..")
    } else {
        roll()
    }
}