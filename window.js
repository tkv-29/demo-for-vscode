// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

  console.log(userInput);
    let n = +userInput[0];
    let arr = userInput[1].split(' ');
    let k = +userInput[2];
    let nArray = arr.map(Number)
    // console.log(nArray)
    for(i=0 ; i<=(nArray.length-k) ; i++){
    // console.log(nArray[i],nArray[i+1],nArray[i+2])
    let tempArray = nArray.slice(i,i+k)
     console.log(tempArray)
    for(j=0 ; j<=k ; j++){
        if(tempArray[j]<0){
            console.log(tempArray[j])
            break;
        }else if(j==k-1){
            console.log(0)
        }
    }
    }
    
    
});