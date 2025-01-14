// Getter와 Setter
// 객체지향 프로그래밍 언너 -> G, S
// Class -> constructor(객체)
// 프로퍼티(constructor)
// new Class(a, b, c);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // width를 위한 Getter
    get width() {
        return this._width;
    }

    // width를 위한 Setter
    set width(value) {
        if (value <= 0) {
            // 검증 1 : value가 음수일 때 오류 발생!!
            console.log("오류 : 가로 길이는 0보다 커야 합니다.");
            return;
        } else if (typeof value !== "number") {
            // 검증 2 : value가 숫자 타입이 아닐 때 오류 발생!!
            console.log("오류 : 가로 길이에 입력한 값이 숫자 타입이 아닙니다.");
            return;
        }

        this._width = value;
    }

    // height를 위한 Getter
    get height() {
        return this._height;
    }

    // height를 위한 Setter
    set height(value) {
        if (value <= 0) {
            // 검증 1 : value가 음수일 때 오류 발생!!
            console.log("오류 : 세로 길이는 0보다 커야 합니다.");
            return;
        } else if (typeof value !== "number") {
            // 검증 2 : value가 숫자 타입이 아닐 때 오류 발생!!
            console.log("오류 : 세로 길이에 입력한 값이 숫자 타입이 아닙니다.");
            return;
        }

        this._height = value;
    }

    // getArea : 가로 * 세로 = 넓이
    getArea() {
        const width = this._width * this._height;
        console.log(`넓이는 ${width}입니다.`);
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

const rect1 = new Rectangle(100, 30);
const rect2 = new Rectangle(30, 30);

rect1.getArea();
rect2.getArea();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// Class에서는 getter와 setter를 사용하여 Class의 속성에 접근할 수 있다.
// getter는 속성 값을 반환하는 메소드이다
// setter는 속성 값을 설정하는 메소드이다.
// 이를 통해 생성한 인스턴스를 정해진 규격 안에서 자유자제로 변경할 수 있다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// underscore (_) : praivate(은밀하고, 감춰야 할 때)
// this._ ~~ => (ex : this._width = width)
// getter와 setter 안에서 this가 겹치는 상황을 방지하기 위해 분리해놓은 것이다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
