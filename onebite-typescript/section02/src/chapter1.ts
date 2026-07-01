// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "Hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// tsconfig.json: "strictNullChecks": false" 설정하면 아래 코드도 가능
// let numA: number = null;

// 리터럴 타입
let numA: 10 = 10;
// numA = 12; // '10' 형식은 '10' 형식에 할당할 수 없습니다. 오류 발생

let strA: "hello" = "hello";
// strA = "World"; // 'hello' 형식은 'hello' 형식에 할당할 수 없습니다. 오류 발생
let booleanA: true = true;
// booleanA = false; // 'true' 형식은 'true' 형식에 할당할 수 없습니다. 오류 발생

