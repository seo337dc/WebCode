// 1. 선언 방식
class A {};
console.log(new A());


//2. 표현 방식 : 변수에 클래스를 할당
const B = class {};
console.log(new B());

// 문제 있음
//new C;
//class C{}; //


class C{};
console.log(new C());

class D{
    constructor(){
        console.log("");
    }
};

console.log(new D());


class E{
    constructor(name, age){
        console.log('constructor', name, age);
    }
}

console.log(new E('Mark', 19)); // MAKR 19
console.log(new E()); // UNDEFINED가 들어가게 됨
