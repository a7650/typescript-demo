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

        //接口的任意属性
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
        let Func1: Func = {
            getNameLength(name) {
                return name.length
            }
        }

        


    }

)()