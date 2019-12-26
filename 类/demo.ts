(function () {
    //类，ES6 class详细教程：http://es6.ruanyifeng.com/#docs/class
    class AnimalClass {
        public speed: number
        constructor(speed: number = 0) {
            this.speed = speed
        }
        getSpeed() {
            console.log("11")
        }
    }
    class Dog extends AnimalClass {
        name: string
        constructor(speed: number) {
            super(speed)
            this.name = 'dog'
        }
        getSpeed() {
            console.log(`${this.name}'s speed is ${super.getSpeed()}`)
        }
    }

    //TS class中声明属性的时候可以使用三种访问修饰符，public、private、protected。
    //TS额外实现了ES7的一些提案，实例方法和静态方法。
    class Animal {
        public name1: string;//公有属性，默认的属性修饰符
        public name_1: string = "name_1";//同上
        private name2: string;//私有属性，只能在当前类（Animal）中访问，不能在声明类的外部访问(包括子类)。
        private name_2: string = "name_2";//同上
        protected name3: string;//类似private，但是可以在其子类的声明内部访问
        protected name_3: string = "name_3";//同上
        readonly name4: string = "name4";//只读属性，实例化后就不能被修改
        static age2 = 1;//静态属性，不能被继承，只能通过class访问
        age1 = 12;//实例属性，
        age_1 = "age_1";//同public，默认修饰符
        constructor(name: string) {
            this.name1 = name;
            this.name2 = name;
            this.name3 = name;
            // this.age_1 = name;
        }
        static getName() {//静态方法不能通过实例调用，只能通过类(Animal.getName)调用，而且可以被子类继承。
            console.log(this.prototype);//如果静态方法中有this，则this指向该class而不是实例，所以constructor中定义的属性在这里不能通过this调用。
            console.log("static function");
        }
        getName1() {
            console.log(this.name1)
        }
    }
    //子类的静态方法中可以访问积累父类的静态方法，子类的实例方法中可以访问父类的实例方法
    class Animal2 extends Animal {
        name5 = this.name4;
        static getName() {//子类可以继承父类的静态方法，也可以重写方法来覆盖父类的静态方法
            super.getName()//在子类中可以通过super对象访问父类的静态方法。
        }
        getName2() {
            super.getName1()
            console.log(this.name_1, this.name_3)
        }
    }

    abstract class Animal3 {
        public name: any;
        constructor(name: any) {
            this.name = name;
        }
        abstract getName(): string;
    }

    class Animal4 extends Animal3 {
        // public name: string;
        public age: number;
        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }
        getName(): string {
            return this.name
        }
    }
    let animal4: Animal4 = new Animal4("Tom", 10);


    //抽象类
    abstract class Button {//抽象类不能被实例化
        public type: string
        constructor(type: string) {
            this.type = type
        }
        abstract click(): void//抽象类可以定义抽象方法，该方法不需要具体的实现，类似接口，在其派生类中必须实现该方法
        getType(): string {//抽象类中的普通方法可以被其派生类继承
            return this.type
        }
    }

    class MyButton extends Button {
        //抽象类可以作为被继承的对象，
        //抽象类的派生类中必须实现抽象类中的抽象方法
        public name: string = "myButton"
        constructor(type: string) {
            super(type)
        }
        click() {
            console.log('click')
        }
        getName() {//该方法在MyButton类的实例上不能被使用，因为MyButton的抽象基类Button中没有实现该方法
            return this.name
        }
    }

    let button: Button
    button = new MyButton("login")
    button.click()
    button.getType()
    // button.getname() //会报错，虽然Button的派生类实现了该方法，但是抽象类Button上不存在该方法





})()