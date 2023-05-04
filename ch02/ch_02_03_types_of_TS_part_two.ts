type Age = number
type Name = string
type Player = {
    // readonly name:Name, 
    readonly name:Name,
    age?:Age
}
function playerMaker(name:string) : Player// => ({name})
{
    return {
        name: name
    }
}

// const playerMaker = (name:string) => ({name})
const jim = playerMaker("jim")
jim.age = 12
// jim.name = "jake"


// readonly라서 입력안됨
// const numbers: readonly number[] = [1, 2, 3, 4]
// numbers.push(1)

// const names: readonly string[] = ["1", "2"]
// names.push()
// filter, map은 가능하지만 값 변경은 불가, 왜냐하면 readonly니까.
// js에서는 쓰이지 않음

// Tuple = {}
// minmum_length
// ["nico", 12, true]
// ["nico", 12, false]
// const player: string[]
// const player: [string, number, boolean] = []
// const player: [string, number, boolean] = ["jim", 42, true]
// // player[0] = 1 // error
// player[0] = "jake" // work


// # readonly array
// const player: readonly [string, number, boolean] = ["jim", 42, true]
// // player[0] = "jake" // error cause readonly type

// let a : undefined = undefined
// let b : null = null

// type Playera = {
//     age?:number
// }


// any type 
// 비어있으면 any
// any 
// let ab = []

let ab : number
// ab = "42"
// any는 어떤 타입도 가능, 안쓰는 것을 추천 쓰면 js랑 같아짐
const a : any[] = [1, 2, 3, 4]
const  b : any = true
a + b // 문제없이 동작하게됨 js처럼.
// 그러므로 any를 쓰지 않는것을 권장
// 가끔은 써야함 그 변수를어떤 경우에든 써야할때 any를 사용


const a1 = [1, 2, 3, 4]
const  b1 = true
a1 + b1 // 문제발생
// TS에서 이미 타입 추론한 이후이므로 a1, b1의 타입이 달라서 error처리됨