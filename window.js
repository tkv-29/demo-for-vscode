/*Assume you are a student studying in school.You are given a task to find first negative integer for each and every window of size k.

Input Description:
First line contains an integer n denoting the size of the array. The next line contains n space separated integers forming the array. The last line contains the window size k.

Output Description:
Print the first negative integer in that window.If all the numbers are positive print 0

Sample Input :
7
1 -2 -3 -4 5 6 -7
3
Sample Output :
-2 -2 -3 -4 -7
*/


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

//   console.log(userInput);
    let n = +userInput[0];
    let arr = userInput[1].split(' ');
    let k = +userInput[2];
    let nArray = arr.map(Number)
    let opArray = [];
    // console.log(nArray)
    for(i=0 ; i<=(nArray.length-k) ; i++){
    // console.log(nArray[i],nArray[i+1],nArray[i+2])
    let tempArray = nArray.slice(i,i+k)
    //  console.log(tempArray)
    for(j=0 ; j<=k ; j++){
        if(tempArray[j]<0){
            opArray.push(tempArray[j])
            break;
        }else if(j==k-1){
            opArray.push(0)
        }
    }
    
    }
    console.log(opArray.join(' '))
    
});

// dummy 