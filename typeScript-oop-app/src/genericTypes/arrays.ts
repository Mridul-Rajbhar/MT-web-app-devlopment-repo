const names:Array<string|number> = [];

const promise: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("This is done"), 2000);
});


promise.then(data => {
    
})