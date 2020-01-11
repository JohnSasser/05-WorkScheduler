// change the color of the <li> based on the time of day

let currentTime = moment().format("kk");
let $currentDate = moment().format("MMMM Do YYYY");
let noteArr = [];
let $textArea = $(".textInput");
let $buttons = $(".btn");
let $listItem = $(".listRow");
// let $dataTimes = $listItem.attr("data-time");

// TRYING TO USE .ATTR(DATA-TIME) TO COMPARE WITH 24HR TIME FROM MOMENT() TO SET THE BACKGROUND COLOR OF THE TIME-BLOCK-DIV'S;

// 	*** NOT WORKING ***
// $listItem.each(function(idx) {
// 	let momentTime = moment().format("kk");
// 	let $dataTimes = $listItem[idx].attr("data-time");
// 	console.log("works in the each loop");
// 	console.log($dataTimes);
// 	if (momentTime > $dataTimes) {
// 		console.log("works in the first if statement");
// 		// debugger;
// 		console.log(momentTime);
// 		console.log($dataTimes);
// 		$listItem.addClass("past");
// 	} else if (momentTime == $dataTimes) {
// 		console.log("works in the second if statement");
// 		$listItem.addClass("present");
// 	} else if (momentTime < $dataTimes) {
// 		console.log("works in the third if statement");
// 		$listItem.addClass("future");
// 	}
// });

function timeColor() {
	for (i = 0; i < $listItem.length; i++) {
		var $dataTime = parseInt($listItem[i].getAttribute("data-time"));
		if (currentTime > $dataTime) {
			$listItem[i].classList.add("past");
			console.log("past", $dataTime);
		} else if (currentTime === $dataTime) {
			$listItem[i].classList.add("present");
			console.log("present", $dataTime);
		} else currentTime < dataTime;
		$listItem[i].classList.add("future");
		console.log("future", $dataTime);
	}
}

// * WORKING CODE *
function sendNotes() {
	let inputArr = JSON.stringify(noteArr);
	localStorage.setItem("userNote", inputArr);
}

function returnNotes() {
	let getInput = localStorage.getItem("userNote");
	let gotNote = JSON.parse(getInput);

	// jQuery .each loop that goes through my textarea inputs in the html
	// & gets the .attr('id');
	$textArea.each(function(idx) {
		const textareaId = $(this).attr("id");
		// console.log(idx);

		// for loop that goes through the userNote key item == gotNote
		// & compares the textarea id with the id's in the objects inside
		// the gotNote array in local storage.
		// Then pastes the .val() of the userInput into the textarea with the corresponding textareaId;
		for (let i = 0; i < gotNote.length; i++) {
			if (textareaId == gotNote[i].inputId) {
				$(this).val(gotNote[i].userInput);
				// $($textArea[idx]).val(gotNote[i].userInput);
			} else {
				return;
			}
		}
	});
}

$buttons.on("click", function() {
	// loop that runs over the noteArr and splices() out previous notes in
	// the localStorage array if the new note is in the same index position
	// as the new note;
	for (let i = 0; i < noteArr.length; i++) {
		const textareaId = $(this)
			.siblings(".textInput")
			.attr("id");
		// console.log(textareaId, noteArr[i].inputId);
		if (textareaId == noteArr[i].inputId) {
			// i is the index and 1 is how-many objects will get spliced,
			// since we only want to remove the one note, it is 1.
			noteArr.splice(i, 1);
		}
	}
	// add new note
	noteArr.push({
		userInput: $(this)
			.siblings(".textInput")
			.val(),
		inputId: $(this)
			.siblings(".textInput")
			.attr("id")
	});
	sendNotes();
	returnNotes();
});

// *SELF NOTE*
// - always put the 'start game' function calls at the bottom of the script,
// - The bottom of the script will be the first thing called (or most,
// readily available) instead-of at the top of the script.
timeColor();
returnNotes();
$("#currentDate").text($currentDate);
