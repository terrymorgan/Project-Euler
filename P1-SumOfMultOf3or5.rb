#Project Euler - Sum of Multiples of 3 or 5 < 1000
sum=0
n=0
while n<1000
	if n % 3 == 0 
		sum = sum + n 
	elsif n % 5 == 0 
		sum = sum + n 
	end
	n = n + 1 
end
puts "The sum of all multiples of 3 or 5 below 1000 is #{sum}"