function solution(seoul) {

    var answer = "";
    let x = 0;
    for(let i = 0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            x = i;
            break;
        }
    }
    answer = "김서방은 " + x+"에 있다";

    return answer;
}


let seoul = ["Jane", "Kim"];

solution(seoul);