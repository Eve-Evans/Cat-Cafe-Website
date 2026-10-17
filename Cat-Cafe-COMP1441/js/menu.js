// --------------------------------------
// JavaScript for the drinks menu
// --------------------------------------
const drink = document.getElementById("drink");
const size = document.getElementById("size");
const milk = document.getElementById("milk");
const drinkPrice = document.getElementById("price");

const food = document.getElementById("food");
const side = document.getElementById("side");
const foodPrice = document.getElementById("food-price");


// --------------------------------------
// Function to update the price
// --------------------------------------
function updatePrice() {
    // Calculate the total price based on the selected options
    // Convert the values to numbers and sum them up
    let drinksTotal = Number(drink.value) + Number(size.value) + Number(milk.value);
    
    // Update the price display, putting it to 2 decimal places to look like a price
    // w3schools (2026) HTML DOM Element textContent. Available at: https://www.w3schools.com/Jsref/prop_node_textcontent.asp (Accessed: 23 April 2026).
    // w3schools (2026) JavaScript Number toFixed(). Available at: https://www.w3schools.com/jsref/jsref_tofixed.asp (Accessed: 23 April 2026).
    drinkPrice.textContent = drinksTotal.toFixed(2);
}

function updateFoodPrice() {
    let foodTotal = Number(food.value) + Number(side.value);
    foodPrice.textContent = foodTotal.toFixed(2);
}

// --------------------------------------
// Event listeners to update the price 
// -------------------------------------- 
if (drink && size && milk) {
    drink.addEventListener("change", updatePrice);
    size.addEventListener("change", updatePrice);
    milk.addEventListener("change", updatePrice);
}

if (food && side) {
    food.addEventListener("change", updateFoodPrice);
    side.addEventListener("change", updateFoodPrice);
}