Array.prototype.isPrime= function(n){
    let isT=true;
    if(n==1)
    console.log("1 is neither a prime nor a composite number");
    if(n>1){
        for(let i=2;i<n;i++)
        if(n%1==0)
        isT=false;
        break;
    }
    if(isT)
    console.log("n is a prime number");
    else
    console.log("n is not a prime number");
}