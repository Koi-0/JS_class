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
// 1. Car 클래스를 상속받는 ElectricCar 클래스를 만들어주세요.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(`${this.modelName} : Clarksion`);
    }

    printModelYear() {
        console.log(`${this.modelName}는 ${this.modelYear}년도 모델이며, 가격은 ${this.price}입니다.`);
    }
}

class ElectricCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) {
        // Car(부모 클래스)에게도 알려줘야 한다.
        super(modelName, modelYear, "E", price);
        this._chargeTime = chargeTime;
    }

    get chargeTime() {
        return this._chargeTime;
    }

    set chargeTime(value) {
        this._chargeTime = value;
    }
}

const eleCar1 = new ElectricCar("GENESIS", "2025", "5,000만원", "60분");
eleCar1.makeNoise();
eleCar1.printModelYear();

console.log("------------");
console.log(eleCar1.chargeTime);
eleCar1.chargeTime = "20분";
console.log(eleCar1.chargeTime);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
