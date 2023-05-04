// // #unknow
// let a : unknown
// //  a type이 무엇인지 몰라서 아래 코드를 허용해주지 않음
// // let b = a + 1

// if (typeof a === 'number')
// {
//     let b = a + 1
// }
// // 어떤 타입인지 타입을 알려줄것인가?
// // 타입을 모를떄 unknown으로 한다.
// // 이렇게하면 Typescript로 부터 보호를 받는다고 한다.
// a.toUpperCase()
// if (typeof a === "string")
// {
//     a.toUpperCase()
// }

// # 2 void

// function hello()
// {
//     console.log('x')
// }

// const a = hello()
// a.toUpperCase()


// # 3 never
// function hello() : never
// {
//     // return "x"
//     throw new Error("xxx")
// }

// never는 타입이 2가지 일수도 있는 상황에 발생 가능
function hello(name:string|number)
{
    if (typeof name === "string")
    {
        name
    }
    else if (typeof name === "number")
    {
        name + 1
    }
    else
    {
        name // name is never
    }
}