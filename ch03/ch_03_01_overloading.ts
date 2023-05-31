// call siginature는 short cut같은 것
// type Add = (a:number, b:number) => number;

// 여러 타입 명시
// type Add = {
//     (a: number, b: number) : number
//     (a: number, b: string) : number
// } 

// // 오버로딩 사용
// type Add = {
//     (a: number, b: number) : number
//     (a: number, b: string) : number
// } 


// // bad example
// // 매우 일부의 함수만 이런식으로 할수 있다
// // 오버로딩으로 유연하게 가능하다.
// const add: Add = (a, b) => {
//     if (typeof b === "string") return a
//     return a + b
// }

// call signature

// Router.push("/home") 
// object type
// Router.push({
//     path: "/home",
//     state: 1
// }) 
// // string
// .push("/home")

type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {console.log(config)}
    else {
        console.log(config.path)
    }
}

type Add = {
    (a: number, b: number): number,
    (a: number, b: number, c?: number): number,
}

const add:Add = (a, b, c?: number) => {
    if (c) return a + b + c
    return a + b
}