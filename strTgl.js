
let s = prompt("Enter a String ")
console.log(s);

let toggle = "";
for(i=0; i<s.length; i++){
    let ch = s.charCodeAt(i);

    if(ch>=65 && ch<=90){
        toggle = toggle + String.fromCharCode(ch + 32)
    } else if(ch>=97 && ch<=122){
        toggle = toggle + String.fromCharCode(ch - 32)
    }
    
}
console.log(toggle);