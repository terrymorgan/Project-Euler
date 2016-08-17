#Project Euler - Sum of even Fibs < 4,000,000

prev2=1
prev1=1
current=prev2+prev1
sum=0

while current < 4000000
	if current % 2 === 0 
		sum = sum + current
	end
	
	prev2 = prev1
	prev1 = current
	current = prev2 + prev1
end
puts "The sum of all even Fibonacci numbers less than 4,000,000 is #{sum}"