
// ARRAY: Cellphone Information
let phoneBrands = ["iPhone", "Oppo", "Samsung"];
let modelNames = ["13", "A02", "Z Fold"];
let modelColors = ["Navy Blue", "Pink", "Black"];
let storageCapacities = ["128GB", "256GB", "512GB"];

// DISPLAY: My Personal Cellphone
console.log("========== MY CELLPHONE ==========");

console.log("Phone Brand:", phoneBrands[0]);
console.log("Model:", phoneBrands[0] + " " + modelNames[0]);
console.log("Color:", modelColors[2]);
console.log("Storage Capacity:", storageCapacities[1]);

// CONDITIONAL STATEMENT
let price = 1000;

console.log("\n========== CELLPHONE PRICE ==========");
console.log("Phone Price: ₱" + price);

if (price > 1000) {
    console.log("My cellphone is expensive.");
} else if (price < 1000) {
    console.log("My cellphone is affordable.");
} else {
    console.log("My cellphone has an average price.");
}

// LOOPING STATEMENT
console.log("\n========== AVAILABLE PHONE BRANDS ==========");

for (let i = 0; i < phoneBrands.length; i++) {
    console.log((i + 1) + ". " + phoneBrands[i]);
}

// ADDITIONAL: DISPLAY ALL PHONE MODELS
console.log("\n========== PHONE MODELS ==========");

for (let i = 0; i < phoneBrands.length; i++) {
    console.log(phoneBrands[i] + " - " + modelNames[i]);
}
