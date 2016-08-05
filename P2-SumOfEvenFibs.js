var prev2=1, prev1=1, current=prev2+prev1;
var sum=0;

//console.log("first term = " + prev2)
//console.log("second term = " + prev1)

while (current < 4000000) {
	if (current % 2 === 0) {sum += current}
	//console.log("next term = " + current)
	//console.log("sum = " + sum)
	
	prev2 = prev1
	prev1 = current
	current = prev2 + prev1
}
console.log("The sum of all even Fibonacci numbers less than 4,000,000 is " + sum)