var arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var s="";
const prompt = require('prompt-sync')();
const l = prompt('Enter a number:');
for(let i=0;i<l;i++)
{
    if(i==0) a=Math.floor(Math.random()*(arr.length-1))+1;
    else a=Math.floor(Math.random()*arr.length);
     s+=arr[a];
}
console.log(s);

