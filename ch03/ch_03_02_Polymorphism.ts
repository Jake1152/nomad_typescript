// type SuperPrint = {
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): void
//     (arr: (number|boolean)[]): void // 이렇게하면 모든 조합을 적어야한다는 단점이 있다.
// }


// # 2 generic
// 이렇게 바꾼 이후로 여러 타입에 대해 다 커버되게 되었다.
// any와 다른 점은 무엇인가? => 정적검사유무
// type SuperPrint = {
//     <TypePlaceholder>(arr: TypePlaceholder[]): void
// }
// const superPrint: SuperPrint = (arr) => {
//     arr.forEach(i => console.log(i))
// }

// # 3 generic with generic return type
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
    <T>(arr: T[]): T
}

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["true"," false", "true"]) // string 
superPrint([1, 2, true, false]) // 원하는 것은 어떤 타입이든 출력되게하는것

// generic이란 type의 placeholder같은 것이다.
// 타입스크립트는 그 타입이 뭔지 알게 될 것이다.
// 
