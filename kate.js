let PhoneBrand = ["iPhone", "Oppo", "Samsung"];
let ModelName = ["13", "AO2", "ZFOLD"];
let ModelColor = ["Navy Blue","Pink", "Black"];
console.log("my cellphone is", PhoneBrand[0]+" "+ModelName[0]+" "+"color "+ModelColor[2]);

let Capcity = ["128GB", "256GB", "512GB"];
console.log("my cellphone capacity is", Capcity[1]);

//conditional statement
let price = 1000;
if(price > 1000){
    console.log("my cellphone is expensive");
}else if(price < 1000){
    console.log("my cellphone is cheap");
}else{
    console.log("my cellphone is neither expensive nor cheap");
}

//looping statement
for(let i = 0; i < PhoneBrand.length; i++){
    console.log("my cellphone brand is", PhoneBrand[i]);
}       