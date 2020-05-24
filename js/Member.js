// 객체 선언
class A{
    constructor(name, age){
        this.name  = name;
        this.age = age;
    }   
}

// 객체 생성
console.log(new A('Makr',19)); //  A { name : 'Markj', 19}


// class field
class B{
    name; // this.name
    age;  // this.age
}

console.log(new B());//에러 : 클래스에 필드를 직접 넣었으나... 런타임 노드 버전에 따라 실행됨.
console.log(new B('ㅁㄴㅇㅁㄻㄴㅇ', 19));//constructor가 없으므로 생성 안됨.

class C{
    // 초기값
    name = 'no name';
    age = 0;

    //새로 할당 됬을 경우
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
}





