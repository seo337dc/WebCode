
var test = function (num1, num2) {

    console.log(num2.length);

    for (let i = 0; i < num2.length; i++) {
        num1.push(num2[i]);
    }
    // [5, 7, 9, 3, 1,13,11,7,9,];

    var uniq = num1.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);

    console.log("중복 제거 ㅣ결과 :" + uniq);

    uniq.sort(function (a, b) { // 내림차순
        return b - a;
    });

    console.log(uniq);
    console.log(uniq[1]);

}

const first = [5, 7, 9, 3, 1];
const second = [13, 11, 7, 9, 3, 5, 2];

test(first, second);