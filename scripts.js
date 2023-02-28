// Create a file (firebase.js) to configure and export the Firebase object.


// Import the database object, and any required Firebase modules at the top of the main app file (app.js)

// Use the document.querySelector method to call up five objects: one for each condiment selection and one for the submit button. These will be used to create five variables (one for each condiment choice and one for “userChoice”).

// Call getDatabase() and ref() to create a reference to the Firebase database.

// Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.

// Add an eventListener to each condiment selection variable to listen for ‘click’. On ‘click’ call a function which changes the appearance of that specific div and assigns it to “userChoice”.


// Add an eventListener to the submit button to listen for ‘submit’. On ‘submit’:

// Prevent the submit from causing the page to refresh (using the event.preventDefault() method).

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