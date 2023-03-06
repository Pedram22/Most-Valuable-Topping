// Create a file (firebase.js) to configure and export the Firebase object.


// Import the database object, and any required Firebase modules at the top of the main app file

import app from './firebase.js'

import { ref, get, getDatabase, onValue, child, push, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"


// Call getDatabase() and ref() to create a reference to the Firebase database.
const database = getDatabase(app);
const dbRef = ref(database);
const condimentsRef = ref(database, '/condiments');

// Here are the variables for the selection DIV and the results DIV in our HTML page
const resultsArea = document.querySelector(".userResults");
const selectionArea = document.querySelector(".userSelection");
const formVariable = document.getElementById("condimentsContainer");
const buttonVariable = document.getElementById("submitButton");
const choiceVariable = document.getElementsByClassName("condimentClass");
let condimentChoiceVar = ""

onValue(condimentsRef, function(data){

    const listOfCondiments = data.val();
    console.log(listOfCondiments);
})

function nameId(e){

    
    if (e.target.type === "radio") {
        condimentChoiceVar = e.target.value;
    }

    console.log(condimentChoiceVar)

    // now we have voting choice variable, when we click button we want to send the variable to the proper spot in fb by taking variable
    // voteNum=numVotes+1
    // use set

}


document.addEventListener("click", nameId);

// for(let i=0;i=3; i++){
//     choiceVariable[i].addEventListener("change",nameId)
// }
// choiceVariable.addEventListener("checked", nameId);

// const totalVotes= {

// }

// This is the function which will swap divs when form is submitted

function divSwap(e) {
    e.preventDefault ()
    console.log (resultsArea.classList)
    resultsArea.classList.add ("displayBlock")
    selectionArea.classList.add ("displayNone") 
}

buttonVariable.addEventListener("click", divSwap);

















// log out the value from the :checked radio



// Use the document.querySelector method to call up five objects: one for each condiment selection and one for the submit button. These will be used to create five variables (one for each condiment choice and one for “userChoice”).




// Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.
// onValue(condimentsRef, function(data) {
//     if (data.exists() ) {
        
// }
// })
// Add an eventListener to each condiment selection variable to listen for ‘click’. On ‘click’ call a function which changes the appearance of that specific div and assigns it to “userChoice”.


// Add an eventListener to the submit button to listen for ‘submit’. On ‘submit’:
// condimentsForm.addEventListener('submit', getVote)
// function getVote() {

//     const userChoice = document.querySelector('input[name="condiment"]:checked').value;
// }
    // Prevent the submit from causing the page to refresh (using the event.preventDefault() method).

// console.log(submit)

// function addToVotes (condimentId) {

// get(child(condimentsRef, `/${condimentId}`)).then(function(snapshot) {
    
//     const selectedCondimentInfo = snapshot.val();

//     const selectedCondimentObj = {
//         numVotes: selectedCondimentInfo.numVotes
//     }
    
//     update(selectedCondimentObj);
// })
// }

// Get the vote that the user submitted using the submit button (using the .value property).

// If the user submits and userChoice is null:

// then prompt the user to make a selection.

// Else, Call a function which:

//- adds one to the previous number of votes for the specific item (“numVotes”) using ++.
//-hides the div containing all condiment selections (display: none)
//-shows the div containing vote totals ("results") (display: block)

// Use Firebase's update() function to send the updated ‘numVotes’ to Firebase (this will trigger the onValue() listener to update the page).

// use a form instead of div
// use onValue
// checked attribute (selected)