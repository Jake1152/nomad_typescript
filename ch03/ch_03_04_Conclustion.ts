// const superPrint: SuperPrint = (a) => a[0]
// type SuperPrint = <T>(a: T[]) => T
function superPrint<T>(a: T[]) {
    return a[0]
}

// 항상 타입스크립트가 타입을 유추하도록 하는 것이 좋다.
// const a = superPrint([1,2,3,4])
// const a = superPrint<boolean>([1, 2, 3, 4])
// 알맞는 타입이라 제대로 컴파일 된다.
const a = superPrint<number>([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])

/*
-any로 놔두기보다는 generic을 이용해서 타입추론되게 만든다.
*/
// type Player<blah> = {
type Player<E> = {
    name: string
    extraInfo:E
}

type NicoExtra = {
    favFood:string
}

// with callsiginature
type NicoPlayer = Player<NicoExtra>
// # without callsiginature
// type NicoPlayer = Player<{favFood:string}>

const nico: Player<{favFood: string}> = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
}
/*
type끼리는 일종의 상속을 할수 있다.
상속이라기 보다는 재사용이다
one things
*/

// type arrNumbers = Array<number>
// function printAllNumbers(arr: number[])
function printAllNumbers(arr: Array<nubmer>)
let a:A = {1, 2, 3, 4}

// # ReactJS에 나오는 문법이라고 한다.
// useState<number>() 