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
        console.log(`${this.modelName}는 ${this.modelYear}년도 모델입니다.`);
    }
}

const car1 = new Car("GRANDEUR Hybrid", "2025", "승용차", "4,267만원 ~");
const car2 = new Car("SANTA FE Hybrid", "2024", "SUV", "3,870만원 ~");
const car3 = new Car("PALISADE", "2023", "SUV", "4,383만원 ~");

car1.makeNoise();
car1.printModelYear();

car2.makeNoise();
car2.printModelYear();

car3.makeNoise();
car3.printModelYear();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// [ 요구사항 ]
// 1. Smartphone이라는 새로운 클래스를 만들되,
// 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!

// (1) brand
// (2) model
// (3) releaseYear
// (4) price

// 2. ring() 메서드를 만들어 전화벨 소리를 출력해주세요.
// 3. printReleaseYear() 메서드를 만들어 해당 스마트폰의 출시 연도를 출력해주세요.
// 4. 이후 스마트폰을 3개 정도 만들어주세요. (객체 생성)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

class Smartphone {
    constructor(brand, model, releaseYear, price) {
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
        this.price = price;
    }

    ring() {
        console.log(`${this.model} : 띠로리`);
    }

    printReleaseYear() {
        console.log(`${this.model} 제품은 ${this.releaseYear}년도에 출시되었습니다. `);
    }
}

const Smartphone1 = new Smartphone("Apple", "iPhone 13", "2021", "$ 999");
const Smartphone2 = new Smartphone("Samsung", "Galaxy S21", "2021", "$ 799");
const Smartphone3 = new Smartphone("Google", "Pixel 7", "2022", "$ 599");

Smartphone1.ring();
Smartphone1.printReleaseYear();

Smartphone2.ring();
Smartphone2.printReleaseYear();

Smartphone3.ring();
Smartphone3.printReleaseYear();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
