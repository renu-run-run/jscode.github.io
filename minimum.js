const min=(numbers)=>{
    let max=numbers[0],min=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>max)
        max=numbers[i];
        if(numbers[i]<min)
        min=numbers[i];
        console.log("max:"+max);
        console.log("min:"+min);
    }
}