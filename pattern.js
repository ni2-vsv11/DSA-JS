let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number: "));
for(let i = 1; i <= n; i++) {
    for(let s = 1; s <= n; s++){
    console.log("");   
    }
    for(letj=1; j <= (2*i-1); j--){
    console.log("*");
    }
}
