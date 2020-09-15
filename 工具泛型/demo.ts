interface Foo {
  name: string
  age: number
}

const foo1 = {
  name: 'zzp',
  age: 22
}

type T = keyof Foo
type P = {
  [p in keyof Foo]: string
}

type MPartial<T> = {
  [p in keyof T]?: T[p]
}

const FooPartial = Partial
