// 2. 문자 : String(문자열 = 문자의 나열)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// ' ' = " " (감싸줘야 문자열이 된다.)
let str = "Hello World";
// console.log(str);
// console.log(typeof str);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 2-1. 문자열 길이 확인하기
// console.log(str.length);

// 2-2. 문자열 결합하기(concatenation)
let str1 = "Hello, ";
let str2 = "World";
let result = str1.concat(str2);
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 6)); // 시작 위치부터 몇 개까지 자를 건지 설정 - 7번째부터 6개까지만 잘라서 보여줘!
console.log(str3.slice(7, 12)); // 시작 위치부터 끝 위치까지 지정 - 7번째부터 12번째까지만 보여줘

// 2-4. 문자열 검색
let str4 = "Hello, World!";
// console.log(str4.search("World"));

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result1 = str5.replace("World", "javascript");
// console.log(result1);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result2 = str6.split(",");
console.log(result2);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
