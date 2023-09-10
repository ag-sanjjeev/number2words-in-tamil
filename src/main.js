// Global constants

// One to hundred number words in Tamil unicode
const __numbers = [
    "ஒன்று",
    "இரண்டு",
    "மூன்று",
    "நான்கு",
    "ஐந்து",
    "ஆறு",
    "ஏழு",
    "எட்டு",
    "ஒன்பது",
    "பத்து",
    "பதிணொன்று",
    "பன்னிரண்டு",
    "பதிமூன்று",
    "பதிநான்கு",
    "பதினைந்து",
    "பதினாறு",
    "பதினேழு",
    "பதினெட்டு",
    "பத்தொன்பது",
    "இருபது",
    "இருபத்தி ஒன்று",
    "இருபத்தி இரண்டு",
    "இருபத்தி மூன்று",
    "இருபத்தி நான்கு",
    "இருபத்தி ஐந்து",
    "இருபத்தி ஆறு",
    "இருபத்தி ஏழு",
    "இருபத்தி எட்டு",
    "இருபத்தி ஒன்பது",
    "முப்பது",
    "முப்பத்தி ஒன்று",
    "முப்பத்தி இரண்டு",
    "முப்பத்தி மூன்று",
    "முப்பத்தி நான்கு",
    "முப்பத்தி ஐந்து",
    "முப்பத்தி ஆறு",
    "முப்பத்தி ஏழு",
    "முப்பத்தி எட்டு",
    "முப்பத்தி ஒன்பது",
    "நாற்பது",
    "நாற்பத்தி ஒன்று",
    "நாற்பத்தி இரண்டு",
    "நாற்பத்தி மூன்று",
    "நாற்பத்தி நான்கு",
    "நாற்பத்தி ஐந்து",
    "நாற்பத்தி ஆறு",
    "நாற்பத்தி ஏழு",
    "நாற்பத்தி எட்டு",
    "நாற்பத்தி ஒன்பது",
    "ஐம்பது",
    "ஐம்பத்தி ஒன்று",
    "ஐம்பத்தி இரண்டு",
    "ஐம்பத்தி மூன்று",
    "ஐம்பத்தி நான்கு",
    "ஐம்பத்தி ஐந்து",
    "ஐம்பத்தி ஆறு",
    "ஐம்பத்தி ஏழு",
    "ஐம்பத்தி எட்டு",
    "ஐம்பத்தி ஒன்பது",
    "அறுபது",
    "அறுபத்து ஒன்று",
    "அறுபத்து இரண்டு",
    "அறுபத்து மூன்று",
    "அறுபத்து நான்கு",
    "அறுபத்து ஐந்து",
    "அறுபத்து ஆறு",
    "அறுபத்து ஏழு",
    "அறுபத்து எட்டு",
    "அறுபத்து ஒன்பது",
    "எழுபது",
    "எழுபத்து ஒன்று",
    "எழுபத்து இரண்டு",
    "எழுபத்து மூன்று",
    "எழுபத்து நான்கு",
    "எழுபத்து ஐந்து",
    "எழுபத்து ஆறு",
    "எழுபத்து ஏழு",
    "எழுபத்து எட்டு",
    "எழுபத்து ஒன்பது",
    "எண்பது",
    "எண்பத்து ஒன்று",
    "எண்பத்து இரண்டு",
    "எண்பத்து மூன்று",
    "எண்பத்து நான்கு",
    "எண்பத்து ஐந்து",
    "எண்பத்து ஆறு",
    "எண்பத்து ஏழு",
    "எண்பத்து எட்டு",
    "எண்பத்து ஒன்பது",
    "தொன்னூறு",
    "தொன்னூற்று ஒன்று",
    "தொன்னூற்று இரண்டு",
    "தொன்னூற்று மூன்று",
    "தொன்னூற்று நான்கு",
    "தொன்னூற்று ஐந்து",
    "தொன்னூற்று ஆறு",
    "தொன்னூற்று ஏழு",
    "தொன்னூற்று எட்டு",
    "தொன்னூற்று ஒன்பது",
    "நூறு"
];

// Different types of hundreds in Tamil unicode
const __hundreds = ["நூறு", "இருநூறு", "முன்னூறு", "நானூறு", "ஐந்நூறு", "அறுநூறு", "எழுநூறு", "எண்ணூறு", "தொள்ளாயிரம்", "ஆயிரம்"];

// Different types of continuous hundreds in Tamil unicode
const __hundreds_continuous = ["நூற்று", "இருநூற்று", "முன்னூற்று", "நானூற்று", "ஐந்நூற்று", "அறுநூற்று", "எழுநூற்று", "எண்ணூற்று", "தொள்ளாயிரத்து", "ஆயிரத்தி"];

// Place value from thousand to crore in Tamil unicode
const __placesValue = ["ஆயிரம்", "லட்சம்", "கோடி"];

// Place value from continuous of thousand to crore in Tamil unicode
const __placesValue_continuous = ["ஆயிரத்து", "லட்சத்து", "கோடியே"];

// Alternative number words in Tamil unicode
const __numbers_alt = ["ஒரு"];

// Script logics

// Function to convert from number to text
function convertNum2Txt(form) {
	// Prevents that form being submitted
	event.preventDefault();
	event.stopImmediatePropagation();

	// Getting number value from the field
	var number = form.number.value;
	var numberText = '';
	var decimalPartText = '';
	var resultContainer = document.getElementById('resultText');

	// Getting the condition for currency format
	var isCurrency = document.getElementById('currencyFormat').checked;
	let rupeeSign = '';
	let decimalPartAdditional = '';

	// Checks whether the given number is valid and in limit
	if (!isValid(number)) {
		alert('Please enter valid number');
		return false;
	} else if (!isInLimit(number)) {
		alert('Please enter number range upto 9,99,99,99,99,99,999');
		return false;
	}

	// Getting number format value for the given number
	var formattedNumber = formatNumber(number);

	// Splitting into integer and decimal part if given
	var [integerPart, decimalPart] = formattedNumber.split('.');

	// Splitting integer number as per Indian number format system
	var splitIntNumber = integerPart.split(',');

	// Checks whether the decimal part number is valid
	if (!isValid(decimalPart)) {
		decimalPart = 0;
	}
	
	// Checks whether the decimal number has exist or above the zero
	if (decimalPart > 0) {

		// Checks if the currency format condition is checked 
		if (isCurrency) {

			// Converts into two decimal places
			decimalPart = decimalPart.toString().substr(0,2);					
			
			// Adding leading zeros at the beginning of the decimal part and convert into integer
			decimalPart = parseInt(decimalPart.toString().padEnd(2, 0))

			// if it is greater than zero
			if (decimalPart > 0) {
				
				// if it is equal to one and uses alternative number text or normal number text
				if (decimalPart == 1) {
					decimalPartText = __numbers_alt[(decimalPart - 1)] + ' பைசா ';
				} else {							
					decimalPartText = __numbers[(decimalPart - 1)] + ' பைசா ';
				}

				// this will add and word before decimal part exist
				decimalPartAdditional = 'மற்றும்';
			}

		} else {
			// splits the decimal part number into individual numbers
			decimalPart = decimalPart.toString().split('');

			// Adding number text for corresponding decimal numbers
			decimalPart.forEach(function(_x) {
				// converting into integer
				_x = parseInt(_x);
				// if it zero then adds zero word or number word
				if (_x == 0) {
					decimalPartText += 'சுழியம்' + ' ';
				} else {
					decimalPartText += __numbers[(_x - 1)] + ' ';
				}						
			});

			// this will add point word before decimal part exist
			decimalPartAdditional = 'புள்ளி';					
		}

	}

	// separating number arrays into lakhs range and crore range 
	var lakhIntNumber = splitIntNumber.reverse().slice(0, 3);
	var croreIntNumber = splitIntNumber.slice(3, splitIntNumber.length);

	// correcting crore number into valid string format
	croreIntNumber = croreIntNumber.reverse().join('');

	// converting into number format for crore number
	var croreFormattedNumber = formatNumber(croreIntNumber);

	// splitting into array by the comma for crore number
	croreIntNumber = croreFormattedNumber.split(',');

	// reversing the lakh array
	lakhIntNumber = lakhIntNumber.reverse();

	// Iterating through crore array to assigning corresponding Tamil word
	croreIntNumber.forEach(function(i, j) {				

		// Getting the number index
		let placeIndex = croreIntNumber.length - (j+1);
		let hasAnyVoid = true;				
		let nextIndex = j+1;
		let textValue = '';
		
		// assigning the lakh array into non zero identification 
		let nonZeroInt = lakhIntNumber;
		
		// Filters valid lakh number that has non zero unit
		nonZeroInt = nonZeroInt.filter(function(x) { return parseInt(x) });
		
		// If it has any non zero number in the lakh numbers then it sets void to be false otherwise true
		if (nonZeroInt.length > 0) {
			hasAnyVoid = false;
		} else {
			hasAnyVoid = true;
		}

		// assigning the crore array into non zero identification 
		nonZeroInt = croreIntNumber.slice(j+1, croreIntNumber.length);

		// Filters valid crore number that has non zero unit
		nonZeroInt = nonZeroInt.filter(function(x) { return parseInt(x) });

		// If it has any non zero number in the crore numbers then it sets void to be false otherwise true
		if (nonZeroInt.length > 0) {
			hasAnyVoid = false;
		} else {
			hasAnyVoid = true;
		}
		
		// Assigning Tamil words to corresponding number
		textValue = textForNumber(i, placeIndex, false, hasAnyVoid);

		// Joining the Tamil words into the same line
		numberText += (textValue === false) ? '' : textValue + ' ';
	});			

	// Checks whether there is crore exist or not by the text line 
	if (numberText.trim() != '') {
		
		// Filter lakh number for non zero unit
		let lakhIntNumber_filtered = lakhIntNumber.filter(function(g) { let f = parseInt(g); if (f > 0) { return f } });

		// If lakh number has non zero unit the Adds place value in Tamil otherwise normal place value in Tamil
		if (lakhIntNumber_filtered.length > 0) {
			numberText += __placesValue_continuous[2] + ' ';
		} else {
			numberText += __placesValue[2] + ' ';
		}
	}

	// Iterating through crore array to assigning corresponding Tamil word
	lakhIntNumber.forEach(function(i, j) {				

		// Getting the number index
		let placeIndex = lakhIntNumber.length - (j+1);
		let hasAnyVoid = true;				
		let nextIndex = j+1;
		let textValue = '';

		// Checks for any other non zero number exist and set void to false otherwise true
		if (parseInt(lakhIntNumber[lakhIntNumber.length - 1]) == 0) {
			hasAnyVoid = true;
		} else {
			hasAnyVoid = false;
		}

		// Splitting lakh array from next index to the last
		let nonZeroInt = lakhIntNumber.slice(j+1, lakhIntNumber.length);
		
		// checking for any other non zero unit exists
		nonZeroInt = nonZeroInt.filter(function(x) { return parseInt(x) });
		if (nonZeroInt.length > 0) {
			hasAnyVoid = false;
		} else {
			hasAnyVoid = true;
		}

		// Checks for whether it is last digit of given number
		let isLastDigit = (lakhIntNumber.length == (j+1));

		// Assigning Tamil words to corresponding number
		textValue = textForNumber(i, placeIndex, isLastDigit, hasAnyVoid);

		// Joining the Tamil words into the same line
		numberText += (textValue === false) ? '' : textValue + ' ';
	});	

	// Trimming any white spaces from text line
	numberText = numberText.trim();

	// Adding currency symbol if currency format checked
	if (isCurrency) {
		rupeeSign = '<i class="fa fa-rupee-sign pe-2"></i>';
	}

	// Displaying result in appropriate location with all other details
	resultContainer.innerHTML = rupeeSign + numberText + ' ' + decimalPartAdditional + ' ' +decimalPartText;

	// Converting number as formated as Indian number system
	let [number1, number2] = formattedNumber.split('.');
	number2 = (isValid(number2)) ? number2 : 0;			
	number2 = number2.toString().padEnd(2, 0);			

	// Displaying formated number into appropriate location
	document.getElementById('formattedNumber').innerHTML = number1 + '.' + number2;

	// Make sure to prevent form being submitted by return false
	return false;
}

// Function to check whether it is valid or not
function isValid(number) {
	if (number == 'undefined' || number == undefined || number == 'null' || number == null || number < 0 || number == '' || isNaN(number)) {
		return false;
	} 

	return true;
}

// Function to validate within a limit or range
function isInLimit(number) {
	if (parseInt(number) <= 99999999999999) {
		return true;
	} 

	return false;
}

// Function to convert from number to Indian number format
function formatNumber(number) {
	var intl = new Intl.NumberFormat('en-IN');
	var formattedNumber = intl.format(number, { minimumFractionDigit: 2 });
	return formattedNumber;
}

// Function that assigns Tamil number text to the correspond given number in unicode
function textForNumber(number, place, isLastDigit,hasAnyVoid = true) { 

	// Getting as integer
	var number = parseInt(number);
	let text = '';
	let i = 0;

	// Checking for whether it is valid number
	if (!isValid(number)) {
		console.warn('Invalid number', number);
		return false;
	}			

	// If it is a zeroth array element or 100th place
	if (place == 0) {
		// If it is completely divisible by 100 then assigning hundreds
		if (number % 100 === 0) { 					
			i = Math.floor(number/100) - 1; 
			text = __hundreds[i];					 
		} else { 					
			i = Math.floor(number/100) - 1; 
			
			// Adds hundreds continuous if it is not completely divisible by 100
			text = __hundreds_continuous[i]; 
			
			// If it is undefined or null then it will be an empty
			if (text == 'undefined' || text == undefined || text == 'null' || text == null) {
				text = '';
			} else {
				text += ' ';
			}

			// convert into limit of 100
			i = parseInt(number%100) - 1; 
			
			// If it is last digit has one then follows alternative Tamil word otherwise normal Tamil word
			if (i == 0 && hasAnyVoid && !isLastDigit) {
				text += __numbers_alt[i];
			} else {
				text += __numbers[i]; 
			}			
		} 
	// If it is a first array element or thousands place
	} else if (place == 1) {
		// convert into limit of 100
		i = parseInt(number%100) - 1; 

		// It it is one the follows alternative Tamil word otherwise normal Tamil word
		if (i == 0) {
			text = __numbers_alt[i];
		} else {
			text = __numbers[i]; 
		}
	// If it is a second array element or lakhs place
	} else if (place == 2) {
		// convert into limit of 100
		i = parseInt(number%100) - 1; 

		// It it is one the follows alternative Tamil word otherwise normal Tamil word
		if (i == 0) {
			text = __numbers_alt[i];
		} else {
			text = __numbers[i]; 
		}
	// Otherwise it will be out of range or limit
	} else if (place > 2) {
		console.warn('Out of range');
		return false;				
	}

	// Adds Place Text for corresponding number 
	let placeIndex = place - 1;
	if (place == 0) {
		text += '';
	} else if (place > 0 && place < 4) {
		text += ' ';
		text += (hasAnyVoid) ? __placesValue[(placeIndex)] : __placesValue_continuous[(placeIndex)];				
	} else {
		console.warn('Invalid range', place);
		return false;
	}

	// returns number with place text for corresponding given number
	return text;			
}