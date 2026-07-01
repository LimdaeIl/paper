// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winter"];
let boolArr1: boolean[] = [true, false, true];
let boolArr2: Array<boolean> = [true, false, true]; // 제네릭 문법을 지원

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플 타입: 타입스크립트에서만 제공(길이와 타입이 고정된 배열)
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 'number[]' 형식은 '[number, number]' 형식에 할당할 수 없습니다. 오류 발생
// tup1 = ["1", "2"]; // 'string' 형식은 'number' 형식에 할당할 수 없습니다. 오류 발생

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"]
];






