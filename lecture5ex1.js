let x = 4; 						
var y;						    

const PI = 3.1415;				

function foo(){
	
	var y = 17;					
	{
		let x = 'hello';		
		console.log( x + ' ' + y + ', ' + PI );
		var y = 'Bob';			
		a = PI;					
	}
	
	console.log( x + ' ' + y);

}

foo();

console.log( x + ' ' + y + ', ' + a);