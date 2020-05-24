document.write("<table width='100%' height='100%' border='1' cellspacing='0' cellpadding='0'>")

var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

var checkValue = function (array) {


}

let arr = [];
let temp = [];

//arr.push(generateRandom(1, 13));
//temp = arr.filter((item, index) => arr.indexOf(item) === index);
// 1 ~ 13 값 랜덤으로 가지고 오기
for(let i = 0; i < 20; i++){
    arr.push(generateRandom(1, 13))
    temp = arr.filter((item, index) => arr.indexOf(item) === index);
    if(temp.length ===5){
        break;
    }
}
console.log("몇개 ??" +  temp);



//배열에 두개씩 넣기
let i = 0;
do {
    let data = temp[i];
    console.log("data : " + data);
    temp.push(temp[i]);
    i++;
} while (i < 5)




//랜덤으로 배열 정렬하기
let result = temp.sort(function (a, b) {
    return .5 - Math.random();
});

console.log("result : " + result);



//테이블에 출력
for (i = 0; i < 2; i++) {
    if (i === 0) {
        document.write("<tr>");
        for (kan = 0; kan < result.length / 2; kan++) {
            document.write(`<td  id="test${kan}" width='80' height='200' bgcolor='#FFFFFF'><a href="#" id="test${kan}"  onclick="ChangeFunc(${result[kan]},${kan}); "><img src="img/game/joker.png" width='40%' height='90%'></a></td>`);
            //document.write(`<td  id="test${kan}" width='80' height='200' bgcolor='#FFFFFF'><a href="#" id="test${kan}"  onclick="ChangeFunc(${result[kan]},${kan}); "><img src="img/game/${result[kan]}.png" width='40%' height='90%'></a></td>`);
        }
        document.write("</tr>");
    } else {
        document.write("<tr>");
        for (kan = 5; kan < result.length; kan++) {
            document.write(`<td id="test${kan}" width='80' height='200' bgcolor='#FFFFFF'><a href="#"  onclick="ChangeFunc(${result[kan]},${kan}); "><img src="img/game/joker.png" width='40%' height='90%'></a></td>`);
            //document.write(`<td  id="test${kan}" width='80' height='200' bgcolor='#FFFFFF'><a href="#" id="test${kan}"  onclick="ChangeFunc(${result[kan]},${kan}); "><img src="img/game/${result[kan]}.png" width='40%' height='90%'></a></td>`);
        }
        document.write("</tr>");
    }
}

document.write("</table>");
