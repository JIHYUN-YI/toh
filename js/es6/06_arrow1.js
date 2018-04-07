/*
* js는 익명function을 arrow function으로 선언가능하다.
 - 람다 대수식에서 유래됨. (java 등 모두 문법이 같다.)
 - function을 없애고, 파라메터와 {} 사이에 => 삽입
 - 파라메터가 한 개면 괄호 생략 가능
 - 중괄호가 한 줄이면 중괄호 생략 가능
 - 한 줄일 경우에는 return 생략 가능
 */
/*let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};*/
let circleArea = (pi, r) => pi * r * r

// 위의 문장을 한줄로 작성하시오.
let circleArea = (pi, r) => pi * r * r;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
