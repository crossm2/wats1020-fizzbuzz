// Place your FizzBuzz code here.
/*FizzBuzz Game
Rules*/
//encapsulate with function 
function FizzBuzz(){
var Fizz="Fizz";
//set variable to display results on the page 
	var r ="";
//Check numbers 1-20 to see if they are divisible by 3 or 5 or both. 
for (var x=1; x<=20; x++) {
	//set conditions if divisible by 3 display Fizz and if divisible by 5 display Buzz. If divisible by both display FizzBuzz 
	if (x%3==0 && x%5==0){
		console.log(Fizz+"Buzz");
		r+=document.getElementById("Results").innerHTML=Fizz+"Buzz" + "<br>";
	}
	else if (x%3==0){
		console.log(Fizz);
		r+=document.getElementById("Results").innerHTML=Fizz + "<br>";
	}
	else if (x%5==0){
		console.log("Buzz");
		r+=document.getElementById("Results").innerHTML="Buzz" + "<br>";
	}
	//set condition to display x if the number is not divisible by 3 or 5. 
	else {
		console.log(x);
		r+=document.getElementById("Results").innerHTML=x + "<br>";
	}
	document.getElementById("Results").innerHTML=r;
}
	}