// void: 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2() {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined; // strictNullChecks 옵션이 켜져있으면 undefined만 대입 가능

// never: 절대 발생하지 않는 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error("error");
}
