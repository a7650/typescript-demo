;(function () {
  interface Ref<T> {
    value: T
    isRef: true
  }
  function ref<T>(value: T): Ref<T> {
    return { value, isRef: true }
  }

  // function getVal<T extends any>(val: T): UnWrapRef<T> {
  //   if (val.isRef) {
  //     return getVal(val)
  //   }
  //   return val
  // }

  const val = 1

  type val2 = UnWrapRef<typeof val>

  type UnWrapRef<T> = T extends Ref<infer I> ? UnWrapRefSimple<I> : T
  type UnWrapRefSimple<T> = T extends number ? T : UnWrapRefSimple<T>

  interface select {
    a: string
    b?: number
  }
  let a: select = {
    a: '1',
    b: undefined
  }

  //字符串字面量类型
  type Easing = 'in' | 'out' | 'in-out'
  function animationUI(x: number, y: number, easing: Easing): void {
    if (easing === 'in') {
    } else if (easing === 'in-out') {
    } else if (easing === 'out') {
    } else {
      //error
    }
  }
  animationUI(10, 10, 'in')
})()
