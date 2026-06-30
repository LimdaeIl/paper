/**
 * 객체(Object)란 무엇인가?
 * 객체(Object): 여러 개의 데이터를 하나로 묶어서 관리할 수 있는 자료형
 * 객체는 속성(Property)과 메서드(Method)를 가질 수 있다.
 * 속성(Property): 객체가 가지고 있는 데이터(변수)
 * 메서드(Method): 객체가 가지고 있는 기능(함수)
 */

// 1. 객체 생성 방법
// 1-1. 객체 리터럴 방식
let objA = {
  name: "홍길동",
  age: 20,
  sayHello: function () {
    console.log("안녕하세요");
  },
};

console.log(objA.name);
console.log(objA.age);
objA.sayHello();

// 1-2. 생성자 함수 방식
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("안녕하세요");
  };
}

let objB = new Person("홍길동", 20);
console.log(objB.name);
console.log(objB.age);
objB.sayHello();
console.log(objB.name);

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자로 생성
let obj2 = {}; // 객체 리터럴로 생성 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age2"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);