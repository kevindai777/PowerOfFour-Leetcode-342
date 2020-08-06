//Objective is to see if a number is a power of four

let num = 64


//O(1) solution that uses math 

//Similar solution to 'Power of Three'
return (Math.log10(num) / Math.log10(4)) % 1 == 0