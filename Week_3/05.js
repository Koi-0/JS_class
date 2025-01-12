// undefined : 사용자(개발자)가 직접 지정할 수도 있지만, 일반적으로는 자바스크립트 엔진에서 값이 있어야 할 것 같은데 없는 경우, 자동으로 부여한다.

// 1. 값을 대입하지 않은 변수 접근
var a;
console.log(a); // 출력값 : undefined

// 2. 존재하지 않는 프로퍼티(속성) 접근
var obj = { a: 1 };
console.log(obj.a); // 출력값 : 1
console.log(obj.b); // 출력값 : undefined
// console.log(b); // 오류 발생

// 3. 반환 값이 없는 function 접근
var func = function () {};
var c = func();
console.log(c); // 출력값 : undefined

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// null

var n = null;
console.log(typeof n); // 출력값 : object ->  javascript 자체 버그

// 동등연산자(equality operator)
console.log(n == undefined); // 출력값 : true
console.log(n == null); // 출력값 : true

// 일치연산자(identity operator)
console.log(n === undefined); // 출력값 : false
console.log(n === null); // 출력값 : true

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
