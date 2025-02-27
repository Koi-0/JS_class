// bind

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

var obj1 = {
    name: "obj1",
    func: function () {
        console.log(this.name);
    },
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 기존에 선언해 놓은 this를 바인딩 하는 방법
var boundObj1 = obj1.func.bind(obj1);
setTimeout(boundObj1, 1000);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 어떤 this든 원하는 대로 바인딩 하는 방법
var obj2 = { name: "obj2" };
setTimeout(obj1.func.bind(obj2), 1500);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
