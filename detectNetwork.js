// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // Check the prefix to identify the potential matching network
  // then check the length to identify the matching network

  // if first prefix is 3, then check which network (Diner's Club or American Express) it belongs
  if (cardNumber[0] === '3') {
  	if (cardNumber.length === 14) {
  		if ((cardNumber[1] === '8') || (cardNumber[1] === '9')) {
  			return 'Diner\'s Club';
  		}
  	} else if (cardNumber.length === 15) {
  		if ((cardNumber[1] === '4') || (cardNumber[1] === '7')) {
  			return 'American Express';
  		}
  	}
  }
  // if first prefix is 4, then check if it belongs to Visa
  else if (cardNumber[0] === '4') {
  	// Swich starting with 4
  	if (cardNumber.length === 13) {
  		return 'Visa';
  	} else if (cardNumber[1] === '9') {
  		if ((cardNumber.substring(2,4) === '03') || (cardNumber.substring(2,4) === '05')) {
  			if ((cardNumber.length === 16) || (cardNumber.length === 18) || (cardNumber.length === 19)) {
  				return 'Switch';
  			}
  		} else if ((cardNumber.substring(2,4) === '11') || (cardNumber.substring(2,4) === '36')) {
  			if ((cardNumber.length === 16) || (cardNumber.length === 18) || (cardNumber.length === 19)) {
  				return 'Switch';
  			}
  		} else if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  			return 'Visa';
  		}
  	} else if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Visa';
  	}

  } else if (cardNumber[0] === '5') {
  	var prefix = ['018', '020', '038', '304'];

  	for (var j of prefix) {
  		//console.log(cardNumber);
  		if (j === cardNumber.substring(1,4)) {
  			for (var k = 12; k <= 19; k++) {
				if (k === cardNumber.length) {
  					return 'Maestro';
 				}
  			}
  		} else {
  			if (cardNumber.length === 16) {
 				// use for loop to check if the prefix matches the range of matching network
  				for (var i = 1; i < 6; i++) {
  					if (i === Number(cardNumber[1])) {
  						return 'MasterCard';
  					} 
  				}
  			} 
  		}
 	}
  // else if (cardNumber[0] === '5') {
  // 	if (cardNumber.substring(1,4) === '018') {
  // 		for (var i = 12; i < 20; i++) {
 	// 		if (i === cardNumber.length) {
  // 				return 'Maestro';
  // 			}
  // 		}
  // 	} else if (cardNumber.substring(1,4) === '020') {
  // 		for (var i = 12; i < 20; i++) {
  // 			if (i === cardNumber.length) {
  // 				return 'Maestro';
  // 			}
  // 		}
  // 	} else if (cardNumber.substring(1,4) === '038') {
  // 		for (var i = 12; i < 20; i++) {
  // 			if (i === cardNumber.length) {
  // 				return 'Maestro';
  // 			}
  // 		}

  		// Check for Discover or Maestro now
  } else if (cardNumber.substring(0,4) === '6011') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,3) === '644') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,3) === '645') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,3) === '646') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,3) === '647') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,3) === '648') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,3) === '649') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,2) === '65') {
  	if ((cardNumber.length === 16) || (cardNumber.length === 19)) {
  		return 'Discover';
  	}
  } else if (cardNumber.substring(0,4) === '6304') {
  	for (var i = 12; i < 20; i++) {
  		if (i === cardNumber.length) {
  			return 'Maestro';
  		}
  	}
  } 
  else {
  	for (var i = 622126; i < 622926; i++) {
  		if (i === Number(cardNumber.substring(0,6))) {
  			for (var j = 16; j < 20; j++) {
  				if (j === cardNumber.length) {
  					return 'China UnionPay';
  				}
  			}
  		}
  	}

  	for (var k = 624; k < 627; k++) {
  		if (k === Number(cardNumber.substring(0,3))) {
  			for (var j = 16; j < 20; j++) {
  				if (cardNumber.length === j) {
  					return 'China UnionPay';
  				}
  			}
  		}
  	}

  	for (var l = 6282; l < 6289; l++) {
  		if (l === Number(cardNumber.substring(0,4))) {
  			for (var j = 16; j < 20; j++) {
  				if (cardNumber.length === j) {
  					return 'China UnionPay';
  				}
  			}
  		}
  	}
  } 
}