(function () {
    function output(value, index) {
        return value;
    }
    var val = output("string", 2); //使用时指定T和U的类型
    var val2 = output("string", 2); //也可以不指定类型，ts会自动判断
    /**
     * @Error
     * function getLength<T>(arr: T): number {
        return arr.length //会报错，因为T不一定有length属性
       }
    */
    function getLength(arr) {
        return arr.length; //arr为T类型的数组
    }
    var len = getLength([1, 2, 3]);
    function identity(arg) {
        return arg;
    }
    var myIdentity = identity;
    var myIdentity2 = identity;
    var addFunc = function (x, y) {
        return x;
    };
    var addFunc2 = function (x, y) {
        return "qwe";
    };
    var x = addFunc2(1, 2);
    function getLength2(arg) {
        return arg.length; //这里编辑器就知道arg具有length属性，因为泛型约束
    }
    var len2 = getLength2("123"); //使用时必须传入具有length属性的参数
    var len3 = getLength2([1, 2, 3]);
    // let len4 = getLength2(1)//会报错，因为数值类型无length属性
})();
