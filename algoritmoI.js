for(var i=0; i<5;i++){   
   console.log(i);
}
//console:0,1,2,3,4

for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}
//console:1,3,5

for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
//console:3,7

function y(num1, num2){   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 //console:

 function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 //console:

 a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);
//console:

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);
//console: