class A{
    static age = 37;
    static hello(){
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();


class B{
    age = 37;
    static hello (){
        console.log(this.age);
    }
}

//console.log(B, B.age); //static이 없어서 호출 불가능
//new B.hello(); //static 함수는 이렇게 호출 불가능

class C{
    static name = 'asdfasdfasdf';
}