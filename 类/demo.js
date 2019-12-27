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
    //类，ES6 class详细教程：http://es6.ruanyifeng.com/#docs/class
    var AnimalClass = /** @class */ (function () {
        function AnimalClass(speed) {
            if (speed === void 0) { speed = 0; }
            this.speed = speed;
        }
        AnimalClass.prototype.getSpeed = function () {
            console.log("11");
        };
        return AnimalClass;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(speed) {
            var _this = _super.call(this, speed) || this;
            _this.name = 'dog';
            return _this;
        }
        Dog.prototype.getSpeed = function () {
            console.log(this.name + "'s speed is " + _super.prototype.getSpeed.call(this));
        };
        return Dog;
    }(AnimalClass));
    //TS class中声明属性的时候可以使用三种访问修饰符，public、private、protected。
    //TS额外实现了ES7的一些提案，实例方法和静态方法。
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name_1 = "name_1"; //同上
            this.name_2 = "name_2"; //同上
            this.name_3 = "name_3"; //同上
            this.name4 = "name4"; //只读属性，实例化后就不能被修改
            this.age1 = 12; //实例属性，
            this.age_1 = "age_1"; //同public，默认修饰符
            this.name1 = name;
            this.name2 = name;
            this.name3 = name;
            // this.age_1 = name;
        }
        Animal.getName = function () {
            console.log(this.prototype); //如果静态方法中有this，则this指向该class而不是实例，所以constructor中定义的属性在这里不能通过this调用。
            console.log("static function");
        };
        Animal.prototype.getName1 = function () {
            console.log(this.name1);
        };
        Animal.age2 = 1; //静态属性，不能被继承，只能通过class访问
        return Animal;
    }());
    //子类的静态方法中可以访问积累父类的静态方法，子类的实例方法中可以访问父类的实例方法
    var Animal2 = /** @class */ (function (_super) {
        __extends(Animal2, _super);
        function Animal2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name5 = _this.name4;
            return _this;
        }
        Animal2.getName = function () {
            _super.getName.call(this); //在子类中可以通过super对象访问父类的静态方法。
        };
        Animal2.prototype.getName2 = function () {
            _super.prototype.getName1.call(this);
            console.log(this.name_1, this.name_3);
        };
        return Animal2;
    }(Animal));
    var Animal3 = /** @class */ (function () {
        function Animal3(name) {
            this.name = name;
        }
        return Animal3;
    }());
    var Animal4 = /** @class */ (function (_super) {
        __extends(Animal4, _super);
        function Animal4(name, age) {
            var _this = _super.call(this, name) || this;
            _this.age = age;
            return _this;
        }
        Animal4.prototype.getName = function () {
            return this.name;
        };
        return Animal4;
    }(Animal3));
    var animal4 = new Animal4("Tom", 10);
    //抽象类
    var Button = /** @class */ (function () {
        function Button(type) {
            this.type = type;
        }
        Button.prototype.getType = function () {
            return this.type;
        };
        return Button;
    }());
    var MyButton = /** @class */ (function (_super) {
        __extends(MyButton, _super);
        function MyButton(type) {
            var _this = _super.call(this, type) || this;
            //抽象类可以作为被继承的对象，
            //抽象类的派生类中必须实现抽象类中的抽象方法
            _this.name = "myButton";
            return _this;
        }
        MyButton.prototype.click = function () {
            console.log('click');
        };
        MyButton.prototype.getName = function () {
            return this.name;
        };
        return MyButton;
    }(Button));
    var button;
    button = new MyButton("login");
    button.click();
    button.getType();
    // button.getname() //会报错，虽然Button的派生类实现了该方法，但是抽象类Button上不存在该方法
})();
