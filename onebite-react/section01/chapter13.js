/** 콜백 함수(Callback Function)
 * 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
 */

function main(value) {
  value();
}

function sub() {
  // console.log("sub");
}

main(sub); // 콜백 함수

// 1. 콜백 함수
function main1(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

main1(() => {
  console.log("i am sub1");
});

// 2. 콜백 함수의 활용
function repeat(count) {
  for (let idx = 1; idx < count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx < count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx < count; idx++) {
    console.log(idx * 3);
  }
}

// 중복 코드가 발생하는 경우 콜백 함수를 활용
// repeat(5);
// repeatDouble(5);
// repeatTriple(5);

function repeat1(count, callback) {
  for (let idx = 1; idx < count; idx++) {
    callback(idx);
  }
}

repeat1(5, (idx) => {
  console.log(idx);
});

repeat1(5, (idx) => {
  console.log(idx * 2);
});

repeat1(5, (idx) => {
  console.log(idx * 3);
});



