let x = 4; 						
var y;						    

const PI = 3.1415;		

const myArray = [14, 15, 16, 82, 19];

const myOtherArray = [56, 22, 18];

myArray.concat(myOtherArray);

console.log(myArray);

function foo(){
	
	let y = 17;					
	{
		let x = 'hello';		
		console.log( x + ' ' + y + ', ' + PI );
		y = 'Bob';			
		a = PI;					
	}
	
	console.log( x + ' ' + y);

}

foo();

console.log( x + ' ' + y + ', ' + a);

