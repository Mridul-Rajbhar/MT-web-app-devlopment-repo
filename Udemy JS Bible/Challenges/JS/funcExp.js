let i = 1;
const myInterval = setInterval(function(){    
    console.log("Here is message number " + i);
    i++;
}, 2000);

setTimeout(function(){
    clearInterval(myInterval);
}, 10000);
