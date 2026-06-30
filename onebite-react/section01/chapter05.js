// chapter05: JavaScript 자료형(Data Type)
/**
 * 자료형(DataType): 원시 타입, 객체 타입
 * 원시 타입: Number, String, Boolean, Null, Undefined
 * 객체 타입: Object -> Array, Function, RegexExp
 */

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // + 무한
let mInf = -Infinity; // - 무한
let nam = NaN; // 연산이 실패 했을 때, NaN 응답
// console.log(1 * "hello"); // NaN

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation; // 문자열1 + 문자열2
console.log(introduce);

// 3-1. Template Literal 문법
let introduceText = `안녕하세요. 저는 ${myLocation}에 사는 ${myName}입니다.`; // 문자열 내 변수 사용
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type(아무것도 없다는 의미)
let empty = null;

// 5. Undefined Type(정의되지 않은 상태)
let none;
console.log(none); // undefined



