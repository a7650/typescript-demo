(function () {
    function add(x, y) {
        return x + y;
    }
    var add1; //定义add1的函数类型，参数只定义类型，参数名可以不一样
    add1 = function (m, n) {
        return "" + n + n;
    };
    // add1(1)//参数必须和类型定义里的参数一致，不能少传参数
    function add2(x, y) {
        if (y === void 0) { y = 1; }
        return x + y;
    }
    add2(1); //如果制定了默认值，可以少传参数
    function add3(x, y) {
        if (!y) {
            return x;
        }
        else {
            return x + y;
        }
    }
    add3(1); //指定可选参数后 也可以少传参数
    //访问多个参数
    function add4(first) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return first + rest.join("/");
    }
    function add5(x, y) {
        if (typeof x === 'string') {
            return x + y;
        }
        else {
            return x - y;
        }
    }
})();
