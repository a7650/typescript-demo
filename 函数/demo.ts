;(function () {
  function add(x: number, y: number): number {
    return x + y
  }

  let add1: (x: number, y: number) => string //定义add1的函数类型，参数只定义类型，参数名可以不一样
  add1 = function (m, n) {
    //指定类型后ts会自动匹配到类型，此时函数表达式内部可以不写参数和返回值的类型
    return `${n}${n}`
  }

  // add1(1)//参数必须和类型定义里的参数一致，不能少传参数

  function add2(x: number, y: number = 1): number {
    return x + y
  }
  add2(1) //如果制定了默认值，可以少传参数

  function add3(x: number, y?: number): number {
    //可选参数必须在必须参数的后面
    if (!y) {
      return x
    } else {
      return x + y
    }
  }
  add3(1) //指定可选参数后 也可以少传参数

  //访问多个参数
  function add4(first: string, ...rest: string[]): string {
    return first + rest.join('/')
  }

  //重载
  function add5(x: number, y: number): number
  function add5(x: string, y: string): string
  function add5(x: any, y: any) {
    if (typeof x === 'string') {
      return x + y
    } else {
      return x - y
    }
  }
  add5('a', 's')
})()
