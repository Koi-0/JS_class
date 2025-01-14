const x = 1;

function outer() {
    const x = 10;
    const inner = function () {
        console.log(x); // 출력값 : 10
    };

    return inner;
}

// outer()를 실행해서, innerFunc에 담는다.
// 즉, outer()의 return값을 innerFunc에 담는다.
const innerFunc = outer();

innerFunc();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
