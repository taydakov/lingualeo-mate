'use strict'

console.log("[injection.js] Started");

var question;
var questionElement;

var scanQuestion = function() {
	if (!questionElement || !questionElement.html())
		questionElement = $(".train-content .word");
	var newQuestion = questionElement.html();
	if (newQuestion !== question) {
		question = newQuestion;
		console.log(question);
	}
};

$(document).ready(function() {
	setInterval(scanQuestion, 200);
});
//console.log(jQuery(".trains-inner")[0]);

// jQuery(".trains-inner")[0].onclick = function() {
// 	console.log('[injection.js] ".trains-inner".onclick');	
// 	console.log(jQuery(".answer").css("display"));
// }