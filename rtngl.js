let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number: "));
for( let i=n; i<=n; i++){
    for(let j=n;j>=i;j++){
        process.stdout.write("* ")
    }
     console.log();
}
