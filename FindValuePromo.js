
function findValuePromo(num) {
    if(typeof num !== 'number'){
       console.log('Code must be a number!');        
    }
    
    let arr = [];   
    let promNumber = num;
    let pairNumOdd = 0;
    let pairIncreas = 0;
    let result = 0;

    for (let i = 0; i < 8; i++) {
        let res = promNumber % 10;
        arr.push(res);
        promNumber = Math.trunc(promNumber / 10);        
    }   
    arr.reverse();

    let sumOddNum = arr.filter(el => el % 2 !== 0).reduce((a, b) => a + b);
    let sumEvenNum = arr.filter(el => el % 2 == 0).reduce((a, b) => a + b);

    for (let i = 0; i < arr.length; i++) {  
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 == 0) {
            pairNumOdd++            
            if (arr[i] < arr[i + 1]) {
                pairIncreas++
            }
        }
    }
    
    if(pairNumOdd > 1 && pairIncreas > 1){
        result = 2000;
    }
    else if(pairNumOdd > 1 && pairIncreas < 2){
        result = 1000;
    }
    else if(sumEvenNum > sumOddNum){
        result = 100;
    }
    else{
        result = 0;
    }

return result 

}



