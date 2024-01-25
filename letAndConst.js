// 1.
const PI = 3.14159; 
if (true) {
	const PI = 4.561234; 
	console.log(PI);
}
console.log(PI);

// Quiz
// 1. Var can be reassigned and redeclared, let can only be reassigned.
// 2. Const can not be reassigned nor redeclared, both can be done with var.
// 3. Let can be reassigned but not redeclared, neither can be done with const.
// 4. Hoisting is the variable being lifted to the top to be read first.