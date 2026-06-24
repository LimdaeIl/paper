// 연산자(Operator): 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8;
num8++;

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
// 6-1. 동등 연산자(==): 값을 비교하기 전에 데이터 타입이 다르면 자동으로 변환하여 비교
let comp1 = 1 == "1"; // true

// 6-2. 일치 연산자(===): 값뿐만 아니라 데이터 타입까지 엄격하게 비교
let comp2 = 1 === "1"; // false
let comp3 = 1 !== 2; // true

let comp4 = 2 > 1;
let comp5 = 2 < 1;

let comp6 = 2 >= 2;
let comp7 = 2 <= 2;
