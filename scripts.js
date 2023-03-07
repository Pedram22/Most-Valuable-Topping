// Import the database object, and any required Firebase modules at the top of the main app file

import app from './firebase.js'

import { ref, get, getDatabase, onValue, child, push, set, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"


// Call getDatabase() and ref() to create a reference to the Firebase database.
const database = getDatabase(app);
const dbRef = ref(database);
const condimentsRef = ref(database,'/condiments');

// Here are the all the variables for elements we are pulling from our HTML page
const resultsArea = document.querySelector(".userResults");
const selectionArea = document.querySelector(".userSelection");
const formVariable = document.getElementById("condimentsContainer");
const buttonVariable = document.getElementById("submitButton");
const choiceVariable = document.getElementsByClassName("condimentClass");
let userChoice = ""
let initListOfCondiments = {}
const ketchupVotes = document.getElementById("ketchupVotes");
const mustardVotes = document.getElementById("mustardVotes");
const relishVotes = document.getElementById("relishVotes");
const jalapenoVotes = document.getElementById("jalapenoVotes");

onValue(condimentsRef, function(data){

    initListOfCondiments = data.val();
    console.log(initListOfCondiments);
})


    // now we have voting choice variable, when we click button we want to send the variable to the proper spot in fb by taking variable
    // voteNum=numVotes+1
    // use set


        
        // This is the function which will swap divs when form is submitted, add +1 to the current vote, display that on the HTML's results DIV and send the info to our Firebase DB.
        
function divSwap(e) {
        e.preventDefault ()
        const userChoice = document.querySelector('input[name="condiment"]:checked').value;
        // console.log(userChoice)
        resultsArea.classList.add ("displayBlock");
        selectionArea.classList.add ("displayNone");
        let currentVote = initListOfCondiments[userChoice];
        // console.log(currentVote)
        const voteTally = currentVote + 1;
        // console.log(voteTally)
        initListOfCondiments[userChoice] = voteTally;

        const sortedVote = Object.values(initListOfCondiments).sort();
        console.log(sortedVote)
        
        
        const voteResults = () => {
            const voteRef = ref(database,`${userChoice}`)
            return update(voteRef, 3)
        }

   

        ketchupVotes.innerHTML = initListOfCondiments["ketchup"];
        mustardVotes.innerHTML = initListOfCondiments["mustard"];
        relishVotes.innerHTML = initListOfCondiments["relish"];
        jalapenoVotes.innerHTML = initListOfCondiments["jalapeno"];
}



buttonVariable.addEventListener("click", divSwap);


