//arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
//arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

function solution(arr) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }

        
        
    }
    console.log(answer)
    return answer;
}




let arr = [4, 4, 4, 3, 3];
solution(arr);