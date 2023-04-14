// Import the database object, and any required Firebase modules at the top of the main app file

import app from './firebase.js'


import { ref, get, getDatabase, onValue, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"


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
        
        // This is the function which will swap divs when form is submitted, add +1 to the current vote, display that on the HTML's results DIV and send the info to our Firebase DB.
        
function divSwap(e) {
        e.preventDefault ()
        const userChoice = document.querySelector('input[name="condiment"]:checked').value;
        
        resultsArea.classList.add ("displayBlock");
        selectionArea.classList.add ("displayNone");
        let currentVote = initListOfCondiments[userChoice];
        
        const voteTally = currentVote + 1;
      
        initListOfCondiments[userChoice] = voteTally;

        const sortedVote = Object.values(initListOfCondiments).sort();
        
        
        
        const voteResults = (voteNum) => {
            const voteRef = ref(database,`condiments/${userChoice}`)
            
            return set(voteRef,voteNum)
        }

        voteResults(voteTally);
        
    
        ketchupVotes.innerHTML = initListOfCondiments["ketchup"];
        mustardVotes.innerHTML = initListOfCondiments["mustard"];
        relishVotes.innerHTML = initListOfCondiments["relish"];
        jalapenoVotes.innerHTML = initListOfCondiments["jalapeno"];
}



buttonVariable.addEventListener("click", divSwap);




