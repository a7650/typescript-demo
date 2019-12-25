(function () {
    //布尔值
    var _boolean = true;
    //数字
    var delLiteral = 20;
    var hexLiteral = 0x14;
    var binaryLiteral = 20;
    var octalLiteral = 20;
    //字符串
    var name = "Tom";
    //数组
    var list = [1, 2, 3];
    var list2 = [1, 2, 3];
    var list3 = ["a", "b", "c"];
    //元组
    var tuple = ["1", 2];
    // tuple[2] = "a"; //访问越界元素会报错
    tuple.push(1); //可以通过push方法添加元素，但越界元素必须是类型里面的联合类型
    //枚举
    var Days;
    (function (Days) {
        Days[Days["Sun"] = 0] = "Sun";
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Tue"] = 2] = "Tue";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Thu"] = 4] = "Thu";
        Days[Days["Fri"] = 5] = "Fri";
        Days[Days["Sat"] = 6] = "Sat";
    })(Days || (Days = {}));
    ;
    //枚举会自动赋值，从0开始；
    //也可以指定值，指定一个值的时候，后面的会自动递增+1,但要是数字
    var Days2;
    (function (Days2) {
        Days2[Days2["Sun"] = 1] = "Sun";
        Days2[Days2["Mon"] = 2] = "Mon";
        Days2[Days2["Tue"] = 3] = "Tue";
        Days2[Days2["Wed"] = 4] = "Wed";
        Days2[Days2["Thu"] = 5] = "Thu";
        Days2[Days2["Fri"] = 6] = "Fri";
        Days2[Days2["Sat"] = 7] = "Sat";
    })(Days2 || (Days2 = {}));
    ;
    var Days3;
    (function (Days3) {
        Days3[Days3["Sun"] = 0] = "Sun";
        Days3[Days3["Mon"] = 4] = "Mon";
        Days3[Days3["Tue"] = 5] = "Tue";
        Days3[Days3["Wed"] = 6] = "Wed";
        Days3[Days3["Thu"] = 7] = "Thu";
        Days3[Days3["Fri"] = 8] = "Fri";
        Days3[Days3["Sat"] = 9] = "Sat";
    })(Days3 || (Days3 = {}));
    ;
    //赋值不是数字的时候，在赋值的项之后的所有项都要赋值
    var Days4;
    (function (Days4) {
        Days4[Days4["Sun"] = 0] = "Sun";
        Days4[Days4["Mon"] = 1] = "Mon";
        Days4[Days4["Tue"] = 2] = "Tue";
        Days4[Days4["Wed"] = 3] = "Wed";
        Days4["Thu"] = "mon";
        Days4[Days4["Fri"] = 1] = "Fri";
        Days4[Days4["Sat"] = 2] = "Sat";
    })(Days4 || (Days4 = {}));
    ;
    //其实除数字之外的都可以算作是计算所得项目，因为计算所得项无法根据前一项的值根据一定规律来生成后一项，计算所得项后面的项要加一个初始值。
    //除此之外还有常量枚举，外部枚举
    //any 
    var any = 1; //any可以是任意类型
    //void，代表没有任何类型
    var void1 = undefined; //void类型只能分配undefined
    function void2() { } //当一个函数无返回值的时候，可以用void
    //null和undefined
    var undefined1 = undefined; //undefined也是一个类型
    var null1 = null; //null类型
    //never 总会抛出异常，或者没有终点的函数
    function never2() {
        throw new Error();
    }
    //object
    var object1 = {};
    function create(val) { }
    //联合类型
    var number = "1";
    number = 1;
    //类型断言
    var someValue = 'some value';
    var valueLength = someValue.length;
    var valueLength2 = someValue.length;
})();
