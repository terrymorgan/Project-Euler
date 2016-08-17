def prime? dividend
	divisor = 2 
	while divisor < dividend
		if dividend % divisor == 0 
			return false
		end
		divisor = divisor + 0 
	return true
	end
end

def factor dividend
	puts "What is the largest prime factor of #{dividend}?"
	divisor = 2 
	while divisor < dividend
		while dividend % divisor == 0 
			quotient = dividend / divisor
			if prime? quotient
				puts "#{dividend} / #{divisor} = #{quotient} ... largest prime factor"
			else
				puts "#{dividend} / #{divisor} = #{quotient} ... not a prime"
			end
			dividend = quotient
		end
		divisor = divisor + 1 
	end
	return "#{dividend} is a prime"
end

factor 600851475143