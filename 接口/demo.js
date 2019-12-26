var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Tom = {
        name: "Tom",
        age: 19
    };
    var Tom2 = {
        name: "Tom",
        age: 1
    };
    var Tom3 = {
        name: "Tom",
        age: 19,
        gender: "m",
        id: 1 //任意属性，需要和接口定义的类型一致
    };
    var Tom4 = {
        name: "Tom",
        age: 19
    };
    // Tom4.name = "tom"无法对"name"属性进行修改，因为该属性是只读的
    //只有在对象创建的时候"name"属性才可以被设置，之后无论对象的"name"属性是否存在，该属性都不能再进行修改
    var Tom44 = {
        age: 19
    };
    var func = {
        getNameLength: function (name) {
            return name.length;
        }
    };
    var func2;
    func2 = function (name) { return name.length; };
    var Jack = /** @class */ (function () {
        function Jack() {
            this.name = "Jack";
            this.age = 12;
        }
        return Jack;
    }());
    var Jack2 = /** @class */ (function () {
        function Jack2(name, age) {
            this.name = name;
            this.age = age;
        }
        Jack2.prototype.getName = function () {
            return this.name;
        };
        return Jack2;
    }());
    var jack = new Jack2("Jack", 13);
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.tick = function () {
            console.log(1);
        };
        return Clock;
    }());
    function createClock(ctor, h, m) {
        return new ctor(h, m);
    }
    createClock(Clock, 1, 1);
    //接口继承类
    var Button = /** @class */ (function () {
        function Button() {
        }
        return Button;
    }());
    var MyButton = /** @class */ (function (_super) {
        __extends(MyButton, _super);
        function MyButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MyButton.prototype.click = function () {
            console.log("click");
        };
        return MyButton;
    }(Button));
})();
