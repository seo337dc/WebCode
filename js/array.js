// 0. array : 배열
// 배열 생성하기

// 1) new 명령어로 생성하기.
let arr0 = new Array();

console.log("arr0 배열 크기 : " + arr0.length); //크기가 0인 배열 생성

let arr1 = new Array(5);
console.log("arr1 배열 크기 : " + arr1.length); //크기가 5인 배열

let arr1_1 = new Array(1,2,3,"서동찬"); // 초기 생성시 값 지정

for (let index = 0; index < arr1_1.length; index++) {
    console.log("arr1_1의"+index+"번째 값 : "+ arr1_1[index]);
}

let arr2 = [];
console.log("arr2 배열 크기 : " + arr2.length);


let arr3 = [1,2,3,4];

console.log("arr3 배열 크기 : " + arr3.length);

for (let index = 0; index < arr3.length; index++) {
    console.log("arr3의"+index+"번째 값 : "+ arr3[index]);
}

// 1. 배열 요소 추가하기
// push

let arr4 = [1,2];
console.log(arr4);

arr4.push(3);
console.log(arr4);

arr4.push("서동찬");
console.log(arr4);

console.log("");
console.log("");

// 2. 배열 요소 제거
// pop
let arr5 = [1,2,3];
let pop_value = arr5.pop();

console.log(pop_value);

console.log(arr5);


// 3. 배열 배열의 일부분을 선택하여 새로운 배열을 만들기
// slice()

let arr6 = [1,2,3,4,5,6,7,"서동찬","김동찬"];
let arr6_1 = arr6.slice(2,8);
console.log(arr6.slice(2,8));

// 4. 배열의 특정 값을 추출하고 새로운 값을 넣기
// splice()

let arr7 = [1,2,3,4,5,6,7,"서동찬","김동찬"];

console.log(arr7.splice(2,4));

let arr7_1 = arr7.splice(2,4);

console.log(arr7_1);

arr7 = [1,2,3,4,5,6,7,"서동찬","김동찬"];

let arr7_2 = arr7.splice(2,4,'aaaa', 'bbb');

console.log(arr7);


console.log(arr7_2);


// filter : 콜백함수에 지정된 조건에 맞는 요소를 반환하여 새로운 배열를 만든다

let arr8 = [1,2,3,4,5,6,7,8,9];

let arr8_1 = arr8.filter( x =>  {   return x > 3   }   );

console.log(arr8_1);


console.log("");
console.log("");
console.log("");

let arr9 = [1,2,3,4,5,6,7,"서동찬","김동찬"];

let arr9_1 = arr9.filter ( x => 
    
    {
            return typeof(x) === 'string';
    }
)  

console.log(arr9_1);

console.log("");
console.log("");
console.log("");


// map
let arr10 = [1,2,3,4,5,6,7,'서동찬'];

let arr10_1 = arr10.map ( x => 
    
    {
        if(typeof(x) === 'number'){
            if(x%2 === 0){
                return '짝수'
            }else{
                return '홀수'
            }
        }
        /*else if(typeof(x) === 'string'){
            return '문자열'
        }*/

    }
)  

console.log(arr10_1);