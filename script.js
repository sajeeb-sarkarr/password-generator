const rangeAccess = document.getElementById("range");
const valueAccess = document.getElementById("value");
const pTagAccess = document.getElementById("password");


valueAccess.innerHTML = rangeAccess.value;
rangeAccess.oninput = function(){
	valueAccess.innerHTML = this.value;
	passwordGenerator(this.value);
}

function shuffle(array){
	let shuffled = array.sort(() => Math.random() - 0.5)
	return shuffled
}

function passwordGenerator(length){
	const smallLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
	const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	const numbers = [1,2,3,4,5,6,7,8,9,0]
	const specialCharacters = [ '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':',  '<', '.', '>', '/', '?']
    
    n = 8;
	let randomNumbers = numbers.sort(() => .5 - Math.random()).slice(0,n)
	let randomSmallLetters = smallLetter.sort(() => .5 - Math.random()).slice(0,n)
	let randomCapitalLetters = capitalLetters.sort(() => .5 - Math.random()).slice(0,n)
	let randomSpecialCharacters = specialCharacters.sort(() => .5 - Math.random()).slice(0,n)

	let result = randomNumbers.concat(randomSmallLetters,randomCapitalLetters,randomSpecialCharacters)
	let shuffledresult = shuffle(result)
	pTagAccess.innerHTML = shuffledresult.join('').slice(0,length);

}
