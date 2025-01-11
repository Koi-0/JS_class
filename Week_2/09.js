// const myMap = new Map();

// myMap.set("one", 1);
// myMap.set("two", 2);
// myMap.set("three", 3);

// console.log(myMap.keys());
// for (const key of myMap.keys()) {
//     console.log(key);
// }

// console.log(myMap.values());
// for (const value of myMap.values()) {
//     console.log(value);
// }

// console.log(myMap.entries());
// for (const entry of myMap.entries()) {
//     console.log(entry);
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// console.log(myMap.size); // Map의 사이즈(길이)
// console.log(myMap.has("two")); // key 기반 검색
// console.log(myMap.has("two1")); // key 기반 검색

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

const myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
]);

// keys(), values(), entries()
for (const key of myMap.keys()) {
    console.log(key); // 출력값 : "key1", "key2"
}

for (const value of myMap.values()) {
    console.log(value); // 출력값 : "value1", "value2"
}

for (const entry of myMap.entries()) {
    console.log(entry); // 출력값 : "key1: value1", "key2: value2"
}