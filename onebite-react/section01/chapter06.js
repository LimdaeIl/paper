// chapter06: 형변환(Type Casting)
/**
 * Number Type -> String Type
 * 1. 묵시적 형 변환(암묵적 형변환): 개발자가 직접 설정하지 않아도,
 * 알아서 자바스크립트 엔진이 형 변환하는 것을 말함
 *
 * 2. 명시적 형 변환: 개발자가 직접 함수 등을 이용해 형 변환을 일으킴
 */

// 1. 묵시적 형 변환
let num = 1;
let str = "1";
console.log(num + str); // 11

// 2. 명시적 형 변환
let num2 = 1;
let str2 = "1";
console.log(num2 + Number(str2)); // 2

// 3. NaN 발생
let num3 = 1;
let str3 = "1 개";
console.log(num3 + str3); // 11 개

let num4 = 1;
let str4 = "1 개";
console.log(num4 + Number(str4)); // NaN

