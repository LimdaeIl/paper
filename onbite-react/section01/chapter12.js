// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
  console.log("funcB");
};
// funcB(); // ReferenceError: funcB is not defined
varB();

// 1-1. 익명 함수
let varB1 = function () {
  //   console.log("funcB");
};
varB1();

// 2. 화살표 함수
let varC = function () {
  console.log("varC");
}
varC();

let varC1 = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC1(10));

let varC2 = (value) => { value + 1 }; // return이 없기 때문에 undefined
console.log(varC2(10));
