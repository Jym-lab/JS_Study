function helloSomeone(value){
	if (typeof value === "string"){
		if (value === "")
			console.log("Who are you?");
		else
			console.log(`Hello ${value}!`);
	}
	else if (typeof value === "number")
	{
		if (value > 0)
			console.log(`My age is ${value}`);
		else if (value < 1)
			console.log(`I am Benjamin Button!`);
		else if (isNaN(value))
			console.log(`Age is just a number`);
	}
	else if (!value)
		console.log(`I am null and void`);
	else if (typeof value === "undefined")
		console.log(`Nobody can define me!`);
}
helloSomeone("42");
helloSomeone("");
helloSomeone(null);
helloSomeone(42);
helloSomeone(-1);
helloSomeone(NaN);
helloSomeone(undefined);
