class A{
    // 멤버 함수
    hello(){
        console.log('hello1', this);
    }
    
    //멤버 변수처럼 사용
    hello2 = () => {
        console.log('hello2', this);
    }
}
new A().hello();  //객체의 멤버 함수 호출
new A().hello2(); //객체의 멤버 함수 호출



class B{
    //객체 멤버 변수
    name = " ajkr";

    //객체 멤버 함수
    hello(){
        console.log('hello', this.name);
    }
}

new B().hello();

