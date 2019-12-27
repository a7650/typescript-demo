(function () {

    function output<T, U>(value: T, index: U): T {//T可以在使用的时候指定类型
        return value
    }
    let val = output<string, number>("string", 2)//使用时指定T和U的类型
    let val2 = output("string", 2)//也可以不指定类型，ts会自动判断

    /**
     * @Error
     * function getLength<T>(arr: T): number {
        return arr.length //会报错，因为T不一定有length属性
       }
    */
    function getLength<T>(arr: T[]): number {
        return arr.length //arr为T类型的数组
    }
    let len = getLength<number>([1, 2, 3])


    function identity<T>(arg: T): T {
        return arg
    }
    let myIdentity: <T>(arg: T) => T = identity
    let myIdentity2: { <T>(arg: T): T } = identity

    //泛型接口
    interface Add {
        <T>(x: T, y: T): T
    }
    let addFunc: Add = <T>(x: T, y: T) => {
        return x
    }
    //可以将类型参数提到接口名上
    interface Add2<T> {
        <T>(x: T, y: T): string
    }
    let addFunc2: Add2<string> = (x, y) => {
        return "qwe"
    }

    let x = addFunc2(1, 2)

    //泛型约束
    //如：约束只能传入具有length属性的参数
    interface lengthWise {
        length: number
    }
    function getLength2<T extends lengthWise>(arg: T): number {
        return arg.length //这里编辑器就知道arg具有length属性，因为泛型约束
    }
    let len2 = getLength2("123")//使用时必须传入具有length属性的参数
    let len3 = getLength2([1, 2, 3])
    // let len4 = getLength2(1)//会报错，因为数值类型无length属性

})()