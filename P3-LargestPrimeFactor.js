var isPrime = function (dividend) {
	var divisor = 2;
	while(divisor < dividend) {
		if (dividend % divisor === 0) {
			return false
		}
		divisor++
	}
	return true
}

var factor = function (dividend) {
	console.log("\nWhat is the largest prime factor of " + dividend + "?")
	var divisor = 2;
	while(divisor < dividend) {
		while (dividend % divisor === 0) {
			var quotient = dividend / divisor
			if (isPrime(quotient)) {
				console.log(dividend+" / "+divisor+" = "+quotient+" ... largest prime factor")
			}
			else {console.log(dividend+" / "+divisor+" = "+quotient+" ... not a prime")}
			dividend = quotient
		}
		divisor++
	}
	return dividend + " is a prime"
}
factor(600851475143)