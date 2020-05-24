let what; // 타입을 모름

what = 37; // 숫자형 타입이 된다.

what = true ;// boolean 형이 됨
// 값에 따라서 타입이 달라진다. 
// 정해지지 않는 타입이라고 해서  다이나믹 타입이라고 한다

//null
const a = null; // 값이 없다.  값이 비워져 있다.,
console.log(a, typeof a); // null이 출력 , 타입 : object


//undefined
let b; // 아무 값도 없을 경우...
console.log(b, typeof b); // undefined출력, 타입 : undefined

const c = NaN;
console.log(c, typeof c);

const d = `dasfasdfasdf`;


const g = Symbol('g');
const f = Symbol('g');
console.log(g, typeof g);
console.log(f, typeof f);

if(false) console.log(false);
if(0) console.log(0);
if('') console.log('');
if(undefined) console.log(undefined);
if(NaN) console.log(NaN);



if(true) console.log(true);
if(1) console.log(0);
if('a') console.log('a');
if({}) console.log({});
if([]) console.log([]);


// for of
for(const i of [1,2,3]){
    console.log(i);
}

// for in
Object.prototype.test = function(){};
//의도한데로 안나올수 있음

for(const value1 in  { a : 1 , b :  2, c : 3 } ){
    console.log('값 : '+value1);
}




function hello(){
    console.log("??????");
}

hello();


function hello1(name){
    console.log(name);
}

let name = "ㅅ덩촨";
hello1(name);

function hello2(name){
    return `Hello :  ${name}`;  //템플릿 리터널 방식
}

console.log( hello2("서동찬") );


let name2= "서ㅏ덩찬ㄴ";



const fun1 = function(){
    console.log("fun1 함수 출력 됬음");    
    //return `내용 : ${name2}`;
}
fun1();

 const sum =  new Function('a', 'b', 'return a+b');
 console.log("출력 : "+ sum(1,2));



global.num2 = 2
 {
    const num2 = 1;
    const test = new Function('return num2');
    // num2 -->  const num2 가 되지 않음
    // global.num2에 적용됨
 }


const fun2 = () =>{
    console.log("fun2");
}


const fun3 = name =>{
    console.log("fun3 : " + name);
}

const fun4 = (name, age) =>{
    console.log("fun3 : " , name, age);
}

const fun5 = name   => `Hello5 ${name}`;
console.log("함수 출력 : "+ fun5("서동찬"));



function pulus(base){
    
    return  function(num){
        return base + num;
    }
}

const pulus5 = pulus(5); // base = 5
const result5 = pulus5(10); // num : 10

console.log(result5);



function helloC(c){
    console.log("asdfasdfasd");
    c();
}

helloC(function() { console.log("콜백")});




function A(){

}

const ObjectA = new A();

function B(name, age){
    console.log(name, age);
}

const ObjectB = new B("aa",1);



function ObjectC(){
    this.name = 'Makr';
    this.age = 37;
}

const ObjectD = new ObjectC();  
console.log(ObjectD);



function ObjectC(){
    this.helloFunc = function(){
        console.log('hello');
    }
}



function Person(name, age){
    this.name = name;
    this.age = age;
    this.func = function(){ console.log('Hello', this.name, this.age) };
}

const p = new Person('Mark', 37);
p.func();



function Person2(){

}

Person2.prototype.helloFunc2 = function(){ console.log('Hello')};

function Korean(region){
    this.region = region;
    this.where = function(){ console.log("ㅎㅁㄴㅇㄴㅁㅇㄻㄴㅇ", this.region) };
}


const liter_Ob = {
    name : 'Mark',
    age : 31,
    func5 : function(){ console.log("Hello5 : ", this.name, this.age); },
    func6 : () => { console.log("Hello6 : ", this.name, this.age); }

};

liter_Ob.func5();
liter_Ob.func6();

let testvalue = new Person('a',1);
let testvalue1 = {a:1}
let testvalue2 = new Object();
let testvalue3 = function (){};
let testvalue4 = undefined;

console.log(typeof testvalue);
console.log(typeof testvalue1);
console.log(typeof testvalue2);
console.log(typeof testvalue3);
console.log(typeof testvalue4);

