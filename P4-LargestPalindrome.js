//Find the largest palindrome made from the product of two 3-digit numbers.
var isPalindrome = function(int) {
	var revstr = int.toString().split("").reverse().join("")
	if ( int === parseInt(revstr) ) return true
	else return false
}
isPalindrome(909)

var largestPalindrome = function(high, low) {
	var a = high
	while (a>low) {
		var b = a-1
		console.log("a="+a+", b="+b+", a*a="+(a*a)+", a*b="+(a*b))
		if ( isPalindrome( a*a ) ) {return (a*a)}
		if ( isPalindrome( a*b ) ) {return (a*b)}
		a--
	}
}

largestPalindrome(999,99)