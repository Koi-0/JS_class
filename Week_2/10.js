// Set

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 고유한 값을 저장하는 자료구조다.
// 값(value)만  저장한다.
// 키(key)는 저장하지 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 값 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

const mySet = new Set();

mySet.add("value1");
mySet.add("value2");
// mySet.add("value2"); // 똑같은 값을 추가했을 때 : 중복된 값으로 인식함
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");

// console.log(mySet.size);
// console.log(mySet.has("value1"));
// console.log(mySet.has("value2"));
// console.log(mySet.has("value3"));

// Iterator : 반복한
for (const value of mySet.values()) {
    console.log(value);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
