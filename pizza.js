
var pizzaToppings = ['cheese', 'pepperoni', 'sausage', 'mushrooms'];

/*
 function pizzaArray(pizzaToppings){
	var pizzaToppings = ['cheese', 'pepperoni', 'sausage', 'mushrooms'];
	console.log("A mouth-watering pizza with " +pizzaToppings[0] + ", " + pizzaToppings[1] + ", " + pizzaToppings[2] + " and " + pizzaToppings[3] + "!");
	return pizzaToppings;
};

pizzaArray();
*/

function pizza(){
	var addToppings = pizzaToppings.join(' and ');
	return "A mouth-watering pizza with " + addToppings + ".";
};

console.log(pizza());