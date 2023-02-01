/* 
Requirements
- Display the current day at the top of the calender when a user opens the planner
    - Jumbotron displays live date "Tuesday, January 31st" (& time)
- Present timeblocks for standard business hours when the user scrolls down
    - 9-17 (1 hr intervals) 
- Color-code each timeblock based on past, present, and future when the timeblock is viewed
    - Past = grey
    - Current = red
    - Future = green
- Allow a user to enter an event when they click a timeblock
- Save the event in local storage when the save button is clicked in that timeblock
- Persist events between refreshes of a page

Notes
- Time blocks each have 3 sections
    - Time div
    - Event input field(s)
        - Can edit event text by clicking div and changing text
    - Button to save event changes

Psuedocode
- 
*/

const timeContainer = $(".container");
let filmTitle = "";

function getTitle(userInput) {
	userInput = prompt("Please enter the title of the film you'd like");

	if (userInput.includes(" ")) {
		filmTitle = userInput.replaceAll(" ", "+").toLowerCase();
	} else {
		filmTitle = userInput.toLowerCase();
	}

	let filmObject = new URL(`http://www.omdbapi.com/?t=${filmTitle}`);

	let timeBlock = $("<div>");
	timeBlock.text(filmObject);
	timeContainer.append(timeBlock);
}

getTitle();
