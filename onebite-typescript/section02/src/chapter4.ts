// 타입 별칭

type User = {
  id: number,
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winter",
  birth: "1997.01,01",
  bio: "안녕하세요.",
  location: "부천시"
}

// 인덱스 시그니처
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
}

type CountryCodes1 = {
  [key: string]: string;
}

let countryCodes1: CountryCodes1 = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
}

type CountryNumberCodes = {
  [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}

type CountryNumberCodes2 = {
  [key: string]: number;
  Korea: number
};

let countryNumberCodes2: CountryNumberCodes2 = {
  Korea: 410
};

// let countryNumberCodes3: CountryNumberCodes2 = {
//   Korea: "ko" // 'string' 형식은 'number' 형식에 할당할 수 없습니다. 오류 발생
// };

