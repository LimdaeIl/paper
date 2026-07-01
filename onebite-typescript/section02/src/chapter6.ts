// any: 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};
//
// anyVar.toUpperCase(); // any 타입이기 때문에 에러가 발생하지 않음
// anyVar.toFixed(); // any 타입이기 때문에 에러가 발생하지 않음
//
let num: number = 10;
num = anyVar;

// unknown: any와 비슷하지만, any보다 안전한 타입
let unknownVar:unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // unknown 타입이기 때문에 에러 발생
// unknownVar.toUpperCase(); // unknown 타입은 사용할 수 없음

// 타입 정제에서만 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}


