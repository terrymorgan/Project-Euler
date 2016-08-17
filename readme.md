#Project Euler Exercises

###Problem 1 - [The sum of all multiples of 3 or 5 below 1000](https://projecteuler.net/problem=1) 
This code iterates upward from 0, checking each value for divisibility by 3 or 5. An `if ... else if` construction prevents double counting numbers that are divisible by both 3 and 5.

Try it out ...  
[in Javascript](https://repl.it/CjyO/0)  
[in Ruby](https://repl.it/CoEr/0)

###Problem 2 - [The sum of all even Fibonacci numbers less than 4,000,000](https://projecteuler.net/problem=2)
This code begins with seed terms of 1 and 1, generates the Fibonacci sequence and increments the sum upwards by the amount of the new Fibonacci number only if it is an even number.

Try it out ...  
[in Javascript](https://repl.it/CjyQ/0)  
[in Ruby](https://repl.it/CoEt/0)

###Problem 3 - [The largest prime factor](https://projecteuler.net/problem=3)
This code iterates upward looking for any factor, dividing to produce a smaller quotient. My strategy is to extract the lowest factors first, leaving the largest quotients. The first prime quotient found will be the largest prime quotient.

This produced an efficient algorithm. I tested it on a 70 digit number and it's fast.

Try it out ...  
[in Javascript](https://repl.it/CjyW/0)  
[in Ruby](https://repl.it/CoEl/0)

###Problem 4 - [Largest palindrome from product of two 3-digit numbers](https://projecteuler.net/problem=4)

Try it out ...  
[in Javascript](//https://repl.it/CkHF/7)