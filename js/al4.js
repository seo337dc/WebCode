function factorial(num) {

    var result = 0;
   

    if (num == 0) {

        result = 1;
    
    } 

        for(let i = num; i > 0; i-- ){

            if(i > 1){

                num = num * (i-1)
                console.log(num);
            
            }
            
        }
    
}

function factorial2(num) {
    var result = 0;
    let temp = num;

    if (num === 0) {

        result = 1;
    
    }else if(num > 0){

        num = factorial2(num-1) * num;
    
    }
    
}

factorial(5);


//factorial2(4);