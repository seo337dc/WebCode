function solution(arr, divisor) {
    let answer = [];

    for(let i = 0; i<arr.length; i++){
        let value = arr[i];
        if(value%divisor===0){
            answer.push(value);
        }
    }
    
    if(answer.length == 0 ){
        answer.push(-1);
    }

    answer.sort(function(a, b) { // 오름차순
        return a - b;
        // 1, 2, 3, 4, 10, 11
    });
    return answer;
}

let arr1 =[5,9,7,10]; // 5  [5,10]
let arr2 = [2, 36, 1, 3]; // 1  [1,2,3,36]
let arr3 = [3,2,6];; // 10 [-1]


solution(arr1, 5);
solution(arr2, 1);
solution(arr3, 10);