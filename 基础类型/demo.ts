(function () {
    //布尔值
    let _boolean: boolean = true

    //数字
    let delLiteral = 20
    let hexLiteral = 0x14
    let binaryLiteral = 0b10100
    let octalLiteral = 0o24

    //字符串
    let name: string = "Tom"

    //数组
    let list: Array<number> = [1, 2, 3]
    let list2: number[] = [1, 2, 3]
    let list3: string[] = ["a", "b", "c"]

    //元组
    let tuple: [string, number] = ["1", 2];
    // tuple[2] = "a"; //访问越界元素会报错
    tuple.push(1)//可以通过push方法添加元素，但越界元素必须是类型里面的联合类型

    //枚举
    enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
    //枚举会自动赋值，从0开始；
    //也可以指定值，指定一个值的时候，后面的会自动递增+1,但要是数字
    enum Days2 { Sun = 1, Mon, Tue, Wed, Thu, Fri, Sat };
    enum Days3 { Sun, Mon = 4, Tue, Wed, Thu, Fri, Sat };
    //赋值不是数字的时候，在赋值的项之后的所有项都要赋值
    enum Days4 { Sun, Mon, Tue, Wed, Thu = "mon", Fri = 1, Sat };
    //其实除数字之外的都可以算作是计算所得项目，因为计算所得项无法根据前一项的值根据一定规律来生成后一项，计算所得项后面的项要加一个初始值。
    //除此之外还有常量枚举，外部枚举

    //any 
    let any = 1;//any可以是任意类型

    //void，代表没有任何类型
    let void1: void = undefined;//void类型只能分配undefined
    function void2(): void { }//当一个函数无返回值的时候，可以用void

    //null和undefined
    let undefined1: undefined = undefined//undefined也是一个类型
    let null1: null = null//null类型


    //never 总会抛出异常，或者没有终点的函数
    function never2(): never {
        throw new Error()
    }

    //object
    let object1: object = {}
    function create(val: object | null) { }
})()


