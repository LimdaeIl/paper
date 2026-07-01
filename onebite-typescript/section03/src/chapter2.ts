/**
 * (전체 집합) Unknown 타입은 모든 타입을 포함하는 타입입니다.
 */

// 업캐스팅은 모든 상황에서 가능하기 때문에 모든 타입 작성이 가능합니다.
function unknownTypeExample() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = undefined;
  let e: unknown = null;
  let f: unknown = [];
  let g: unknown = {};

  let unknownVar: unknown;

  // 반대로, 다운 캐스팅은 불가능합니다.
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * (공집합) Never 타입: 모순되는 타입으로, 어떤 값도 가질 수 없는 타입입니다.
 */
function neverExam() {

  function neverFunc(): never {
    while (true) {
    }
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;

}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  };

  let voidVar: void = undefined;
}

/**
 * any 타입: never 타입을 제외한 어떠한 타입도 될 수 있는 타입으로, 타입 검사를 하지 않습니다.
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;
  // neverVar = anyVar; // never 타입은 어떤 값도 가질 수 없기 때문에 any 타입을 할당할 수 없습니다.
}



