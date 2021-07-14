print("Starting...");

var number;
number = 0;
print(number);
while (number < 100) {
	number = number + 1;
  if (number % 3 == 0 && number % 5 == 0){
  	print("FizzBuzz")
  } else if (number % 3 == 0){
  	print("Fizz")
  } else if (number % 5 == 0){
  	print("Buzz")
  } else {
  	print(number)
  }
}