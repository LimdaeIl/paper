// object
// let user: {id: number, name: string} = {
//   id: 1,
//   name: "이정환"
// };
//
//
// let user: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: "이정환",
// };
//
// user.id;

/*
let dog: {name: string; color: string} = {
  name: "돌돌이",
  color: "brown"

}
*/

let config: {
   readonly apikey: string;
} = {
  apikey: "My API key",
}

// config.apikey = "My API key"; // 'readonly' 속성은 'config' 형식에 할당할 수 없습니다. 오류 발생

