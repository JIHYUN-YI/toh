// 생성자 함수에서의 this의 의미
function Person() {
    this.someValue = 2;
    var someValue2 = 3;
}

console.log(Person()); //실행결과는? 그 이유는? = undefined

console.log(new Person()); // 생성자 함수로 생성시 실행결과는? = Person { someValue: 2 }

console.log(someValue); // 실행결과와, 이유를 말하시오 = 7 line의 경우 2, 9 line의 경우 undefined value로, reference err 발생


// 생성자 함수일 경우 내부 로직
// this가 없을 경우 자기 자신을 가리키는 this가 생성.
// this = {};
// return이 없을 경우 this가 리턴.
