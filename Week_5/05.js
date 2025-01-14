// Class 연습하기

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// [ 요구사항 ]
// 1. Car라는 새로운 클래스를 만들되,
//    처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!

// (1) modelName
// (2) modelYear
// (3) type
// (4) price

// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 3. printModelYear() 메서드를 만들어 해당 자동차가 몇 년도의 모델인지 출력해주세요.
// 4. 이후 자동차를 3개 정도 만들어주세요. (객체 생성)

// [ 추가 요구사항 ]
// 1. modelName, modelYear, type, price를 가져오는 메서드
// 2. modelName, modelYear, type, price를 세팅하는  메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직 만들기

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

class Car {
    constructor(modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    // modelName을 위한 Getter
    get modelName() {
        return this._modelName;
    }

    // modelName을 위한 Setter
    set modelName(value) {
        if (value.length <= 0) {
            // 검증 1 : value의 길이가 0보다 작거나 같을 때 오류 발생!!
            console.log("오류 : 모델 명을 입력해주세요.");
            return;
        } else if (typeof value !== "string") {
            // 검증 2 : value가 문자 타입이 아닐 때 오류 발생!!
            console.log("오류 : 문자 타입으로 모델 명을 다시 입력해주세요.");
            return;
        }

        this._modelName = value;
    }

    // modelYear 위한 Getter
    get modelYear() {
        return this._modelYear;
    }

    // modelYear 위한 Setter
    set modelYear(value) {
        if (value.length !== 4) {
            // 검증 1 : value의 길이가 4가 아닐 때 오류 발생!!
            console.log("오류 : 연도를 네 자리로 입력해주세요.");
            return;
        } else if (typeof value !== "string") {
            // 검증 2 : value가 문자 타입이 아닐 때 오류 발생!!
            console.log("오류 : 입력된 모델 명이 문자 타입이 아닙니다.");
            return;
        }

        this._modelYear = value;
    }

    // type 위한 Getter
    get type() {
        return this._type;
    }

    // type 위한 Setter
    set type(value) {
        if (value.length <= 0) {
            // 검증 1 : value의 길이가 0보다 작거나 같을 때 오류 발생!!
            console.log("오류 : 타입이 입력되지 않았습니다.");
            return;
        } else if (value !== "승용차" && value !== "전기차" && value !== "SUV") {
            // 검증 2 : value가 승용차, 전기차, SUV가 아닐 때 오류 발생!!
            console.log("오류 : 입력된 타입이 잘못 되었습니다.");
            return;
        }

        this._type = value;
    }

    // price 위한 Getter
    get price() {
        return this._price;
    }

    // price 위한 Setter
    set price(value) {
        if (typeof value !== "number") {
            // 검증 1 : value가 숫자 타입이 아닐 때 오류 발생!!
            console.log("오류 : 숫자 타입으로 가격을 다시 입력해주세요.");
            return;
        } else if (value < "1000000") {
            // 검증 2 : value가 1000000원 보다 작을 때 오류 발생!!
            console.log("오류 : 가격은 100만원 보다 작을 수 없습니다.");
            return;
        }

        this._price = value;
    }

    makeNoise() {
        console.log(`${this._modelName} : Clarksion`);
    }

    printModelYear() {
        console.log(`${this._modelName}는 ${this._modelYear}년도 모델입니다.`);
    }
}

const car1 = new Car("GRANDEUR Hybrid", "2025", "승용차", "4,267");
const car2 = new Car("SANTA FE Hybrid", "2024", "SUV", "3,870");
const car3 = new Car("PALISADE", "2023", "SUV", "4,383");

// getter 예시 1
console.log(car1.modelName);

// setter 예시 1
car1.modelName = 1;
console.log(car1.modelName);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
