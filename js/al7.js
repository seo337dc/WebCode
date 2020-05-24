function solution(a, b) {
    var answer = 0;
    if(a > b){
        for(let i=b; i< a+1; i++){
            console.log("현재 값 : "+ i);
            answer = answer +i;
        }
    }else if(a < b){
        for(let i=a; i< b+1; i++){
            console.log("현재 값 : "+ i);
            answer = answer +i;
        }

    }else{
        answer = a;
    }
    console.log(answer);

    return answer;
}


solution(3,5);
solution(5,3);