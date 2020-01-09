// change the color of the <li> based on the time of day

let currentTime = moment().format("MMM Do YYYY");
let noteArr = [];
let $textArea = $(".textInput");
let $buttons = $(".btn");

function sendNotes() {
	var inputArr = JSON.stringify(noteArr);
	localStorage.setItem("userNote", inputArr);
}

function returnNotes() {
	var getInput = localStorage.getItem("userNote");
	var gotNote = JSON.parse(getInput);

	$textArea.each(function(idx) {
		const textareaId = $(this).attr("id");
		console.log(idx);
		for (let i = 0; i < gotNote.length; i++) {
			if (textareaId == gotNote[i].inputId) {
				$(this).val(gotNote[i].userInput);
				// $($textArea[idx]).val(gotNote[i].userInput);
			}
		}
	});
}

$buttons.on("click", function() {
	// remove dupe note
	// loop over notesArr
	// - check if current obj inputId == this.siblings('.textInput).attr('id)
	// - if it matched, remove 1st obj from array
	for (let i = 0; i < noteArr.length; i++) {
		let textareaId = $(this)
			.siblings(".textInput")
			.attr("id");
		console.log(textareaId, noteArr[i].inputId);
		if (textareaId == noteArr[i].inputId) {
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

returnNotes();
$("#currentTime").text(currentTime);
