interface Foo {
  name: string
  age: number
}

const foo1 = {
  name: 'zzp',
  age: 22
}
const a = Object.assign
type T = keyof Foo
type P = {
  [p in keyof Foo]: string
}

type MPartial<T> = {
  [p in keyof T]?: T[p]
}
type FooPartial = Partial<typeof foo1>

type MRequired<T> = {
  [p in keyof T]-?: T[p]
}
type FooRequired = MRequired<FooPartial>

type MReadonly<T> = {
  readonly [p in keyof T]: T[p]
}
type Mutable<T> = {
  -readonly [p in keyof T]: T[p]
}
type FooReadonly = Readonly<FooRequired>
type FooMutable = Mutable<FooReadonly>
type FooRecord = Record<keyof Foo, Foo>
type FooPick = Pick<Foo, 'name'>
type FooExclude = Exclude<'name', keyof Foo>
type FooExtract = Extract<'name', keyof Foo>

type MReturnType<T extends (...args: any) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any
function rt() {
  return 'string'
}
type RtType = ReturnType<typeof Object.toString>

const axiosPromise = () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('1')
    })
  })
}

type AxiosReturnType<T> = T extends () => Promise<infer R> ? R : any

type ResType = AxiosReturnType<typeof axiosPromise>

