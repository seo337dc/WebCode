class A{
    _name = 'no name';

    get name(){
        return this._name + "%%%%%%";
    }

    set name(value){
        this._name = value + "!!!!";
    }
}


const a = new A();
console.log(a); // 빈 값이 들어가지므로  : no name


a.name = 'Makr'; // set을 통해 값이 들어가짐.
console.log(a);

console.log(a.name); //get을 통해 name() 함수를 가지고 오게됨.

// set , get 외부에서 접근하는 것에 사용됨


//readonly
class B{
    _name = 'no name';
    get name(){
        return this.name + "^^^^^^"
    }
}

const b = new B();
b.name = 'Makr'; //set을 하지 않았기 때문에 값이 들어가지 않음



