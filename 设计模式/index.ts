type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never
type Test = UnionToIntersection<{ a: string } | { b: number }> // => { a: string } & { b: number }
type Weird = UnionToIntersection<string | number | boolean> // => never

type A = (k: { name: string }) => void
type B = (k: { age: string }) => void

type Fooo<T> = T extends { name: infer U; age: infer U } ? U : never
type Fooo1 = Fooo<{ name: A; age: B }>

type Tun =
  | (A extends (k: infer I) => void ? I : never)
  | (B extends (k: infer I) => void ? I : never)

type Tun2 = A | B extends (k: infer I) => void ? I : never

const Utils = {
  getName(name: A) {
    return name
  },
  getAge(age: B) {
    return age
  }
}
