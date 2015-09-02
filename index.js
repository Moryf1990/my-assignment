var prompt = require('prompt-sync').prompt;

var numCorrectAnswers = 0;

console.log('What does HTML stand for: HyperText Markup Language, High Track Making Language, High Tech Making Language');
var answer = prompt();

if (answer === 'HyperText Markup Language') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct!')
}
else {
	console.log('Not quite');
}


console.log('How many HTML tags should the most simple webpage have: 4, 6, 8');
var answer = prompt();

if (answer === '8') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('What does CSS stand for: Cascading Style Sheet, Completely Slanted Sheet, Commonly Styled Sheet');
var answer = prompt();

if (answer === 'Cascading Style Sheet') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('What is CSS used for: formatting, language, font');
var answer = prompt();

if (answer = 'formatting') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('Where are divs used: HTML, CSS, JavaScript')
var answer = prompt();

if (answer = 'HTML') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('Where do you style elements: HTML, CSS, JavaScript')
var answer = prompt();

if (answer = 'CSS') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('Where are if else statements used: HTML, CSS, JavaScript')
var answer = prompt();

if (answer = 'JavaScript') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('What section of the HTML page can JavaScript be placed: body, tag, section')
var answer = prompt ();

if (answer = 'body') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('What does JavaScript do: changes HTML content, changes fonts, changes bordering')
var answer = prompt ();

if (answer = 'changes HTML content') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('Where do you use divs at: HTML, CSS, JavaScript')
var answer = prompt();

if (answer = 'HTML') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}


console.log('What is something you can do to speed up page load time: shrink image sizes, yell at the computer, take a nap')
var answer = prompt();

if (answer === 'shrink image sizes') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}



console.log('What does DOCTYPE mean: what type of HTML is used, what type of document is used, what a computer is')
var answer = prompt();

if (answer === 'what type of HTML is used') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}



console.log('What tag do you use to link images to a website: img, div, section')
var answer = prompt();

if (answer === 'img') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}



console.log('What is something pseudo class selectors can do: link a first letter, divide a page, build a website')
var answer = prompt();

if (answer === 'link a first letter') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct')
}
else {
	console.log('Not quite');
}

var result = numCorrectAnswers/15*100;
console.log(result);



