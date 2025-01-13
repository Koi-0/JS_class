// Promise
// 이전에 사용했던 방법 : then(그러면~)
// 이번에 사용할 방법 : async(비동기) / await(기다리다)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// coffeeMaker 함수에서 호출할 함수, addCoffee 선언
// Promise 반환
var addCoffee = function (name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name);
        }, 500);
    });
};

var coffeeMaker = async function () {
    var coffeeList = "";
    var _addCoffee = async function (name) {
        coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
    };

    // Promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때까지 기다린다.

    // 예를 들어 _addCoffee("에스프레소") 로직이 실행되는데 100초가 걸린다면,
    await _addCoffee("에스프레소");

    // console.log는 100초 뒤에 실행된다.
    console.log(coffeeList);

    await _addCoffee("아메리카노");
    console.log(coffeeList);
    await _addCoffee("카페모카");
    console.log(coffeeList);
    await _addCoffee("카페라떼");
    console.log(coffeeList);
};

coffeeMaker();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
