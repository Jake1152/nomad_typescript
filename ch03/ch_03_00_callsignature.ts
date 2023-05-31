// # 1
// function add(a: number, b: number) : number {
//     return a + b
// }

// # 2
// const add = (a: number, b: number) => a + b
// call signature

type Add = (a:number, b:number) => number;


// call signature
// 함수를 만들기 전에 type을 만들 수 있고 함수가 어떻게 동작하는 지 서술해 둘 수 있다.
// const add:Add = (a, b) => a + b
// 프로그램을 디자인하면서 타입을 먼저 생각하고
// 함수를 구현할 수 있어서 좋다


const add:Add = (a, b) => {a + b}
