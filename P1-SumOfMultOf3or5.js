var sum = 0
for (var n=0; n<1000; n++) {
	if ( n % 3 === 0 ) { sum += n}
	else if (n % 5 === 0 ) { sum += n}
}
console.log("The sum of all multiples of 3 or 5 below 1000 is " + sum)