(
    function () {

        //接口的基本实现
        interface Person {
            name: string,
            age: number
        }
        let Tom: Person = {
            name: "Tom",
            age: 19,//属性不能少，必须和接口定义里面的实现一致
            // gender:"m" //不能添加多余的属性
        }

        //接口的可选属性
        interface Person2 {
            name: string,
            age?: number //该属性可选
        }
        let Tom2: Person2 = {
            name: "Tom",
            age: 1,//"age"属性可有可无，因为他是可选的
            // gender:"m"//此时仍不能有多余的属性
        }

        //接口的任意属性/索引类型
        interface Person3 {
            name: string,
            age?: number,
            [propName: string]: string | number | undefined//定义了该接口的任意属性，该接口内已经明确确定的属性的类型必须是任意属性的子类型
        }
        let Tom3: Person3 = {
            name: "Tom",
            age: 19,
            gender: "m",
            id: 1//任意属性，需要和接口定义的类型一致
        }

        //接口的只读属性
        interface Person4 {
            readonly name?: string,//该属性是只读的
            age: number
        }
        let Tom4: Person4 = {
            name: "Tom",
            age: 19
        }
        // Tom4.name = "tom"无法对"name"属性进行修改，因为该属性是只读的
        //只有在对象创建的时候"name"属性才可以被设置，之后无论对象的"name"属性是否存在，该属性都不能再进行修改
        let Tom44: Person4 = {
            age: 19
        }
        // Tom44.name = "Tom44" //即使name没有值，也不能进行修改

        //接口中的函数
        interface Func {
            getNameLength: (name: string) => number //该函数参数为string类型，返回值为number类型
        }
        let func: Func = {
            getNameLength(name) {
                return name.length
            }
        }
        //函数类型
        interface Func2 {
            (name: string): number
        }
        let func2: Func2
        func2 = (name: string) => name.length

        //类类型
        //类可以实现(implements)接口
        interface Person {
            name: string
            age: number
        }
        class Jack implements Person {
            name: string = "Jack"
            age: number = 12
        }
        class Jack2 implements Person {
            public readonly name: string
            public readonly age: number
            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
            getName(): string {
                return this.name
            }
        }
        let jack = new Jack2("Jack", 13)

        //当一个类去实现接口时，类型检查不会去检查静态属性，只会检查实例属性，
        //constructor是静态类型，所以如果一个接口定义了constructor的实现方式（new），
        //那么用一个类去实现接口的时候，将不会通过类型检查，
        //通常用法是将构造函数作为参数，参数的类型是类的接口，这样接口就可以检查到类的构造函数。
        interface ClockConstructor {
            new(h: number, m: number): ClockInterface
        }
        interface ClockInterface {
            tick(): void
        }
        class Clock {
            constructor(h: number, m: number) {

            }
            tick() {
                console.log(1)
            }
        }
        function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
            return new ctor(h, m)
        }
        createClock(Clock, 1, 1)

        //接口继承类
        class Button {
            protected type: any
        }
        interface ButtonInterface extends Button {
            click(): void
        }
        class MyButton extends Button implements ButtonInterface {
            click() {
                console.log(`${this.type} click`)
            }
        }














    }

)()