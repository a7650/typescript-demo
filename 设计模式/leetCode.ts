interface Action<T> {
  payload?: T
  type: string
}

interface Module {
  count: number
  message: string
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>
  syncMethod<T, U>(action: Action<T>): Action<U>
}

type PickFunction<T> = Pick<
  T,
  { [P in keyof T]: T[P] extends Function ? P : never }[keyof T]
>
type FF = PickFunction<Module>

type Connect<M, F = PickFunction<M>> = {
  [P in keyof F]: F[P] extends (
    input: Promise<infer T>
  ) => Promise<Action<infer U>>
    ? <T, U>(input: T) => Action<U>
    : F[P] extends (action: Action<infer T>) => Action<infer U>
    ? <T, U>(action: T) => U
    : never
}

type Res = Connect<Module>

//////////////

interface Person {
  name: string
  age: number
  location: string
}
type K3 = keyof { [x: string]: Person }
