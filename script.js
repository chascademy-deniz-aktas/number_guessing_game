//--------------------------------------------------------------------------//
//Datorn slumpar ett tal via startknappen mellan 1 och 100

//Användaren skriver in en gissning
//För att omvandla ett värde från inputfältet från text: parseInt()

//--------------------------------------------------------------------------//

//Jämför gissningen med det slumpade talet

//--------------------------------------------------------------------------//

//Spara vilket försök användaren är inne på och svaret. Börja på 1.
//Användaren har 5 försök: om antalet är lägre än 5 fortsätt, annars starta om spelet

//--------------------------------------------------------------------------//

//Lista som skriver ut försöken

//--------------------------------------------------------------------------//

//Det slumpade numret
let randomNumber = Math.floor(Math.random() * 100) + 1; 
console.log("det slumpade numret", randomNumber);

//Gissning
let guessCount = 0;

//Meddelande
let resultMessage;

//Knappen, vid klick funktionen compare
const btn = document.querySelector(".btn");
btn.addEventListener("click", compare);

//Funktionen compare vid klick på knappen
function compare(){

//Det gissade numret
let guessNumber = document.querySelector(".inputNumber").value; 
console.log("Det gissade numret", guessNumber);

    if (guessNumber < randomNumber){
        resultMessage = "Your number was too low, try again :(";
    } 
    else if(guessNumber > randomNumber){
        resultMessage =  "Your number was too high, try again :(";
    }
    else if (guessNumber == randomNumber){
        resultMessage = "Your did it! Congratulations! :D";
    }
    else{
        resultMessage = "Oops! Something went wrong. Write a new number between 1 and 100."
    }
    if(guessCount === 4){
        resultMessage = "You have no more guesses. <br> Restart the game to try again!";
           }
           if(guessCount === 5){
            return;
           }

    guessCount++; // Öka med 1 per gissning

//Skriv ut resultatet
document.getElementById("message").innerHTML = resultMessage;

const li = document.createElement('li'); //Skapa ett nytt list-element
li.innerText = guessNumber//Varje list-element: skriv ut gissning och omgång
document.getElementById("resultList").appendChild(li); // Stoppa in list-elementet i ol (resultList) 
}
