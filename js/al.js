function solution(s) {
    var temp = s;
    let answer = true;

    if(s.length === 4 || s.length ===6){
        for(let i = 0; i< temp.length; i++){
            let num = Number(temp.charAt(i));
            if(isNaN(num)){
                answer = false;
                break;
            }   
        }
    }else{
        answer = false;
    }


    console.log(answer);
    
    return answer;
}


let value1 = "a234";
let value2 = "1234";


solution(value1);
solution(value2);