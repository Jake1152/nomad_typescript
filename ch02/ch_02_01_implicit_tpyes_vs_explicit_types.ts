// js는 변슈 생성하기만하면됨
// c, cpp은 타입을 해주어야함
// 모든것을 정해주어야함

// java는 명시적이어야함

// 1이 들어있는 변수를 한다면
// number는 항상 nuymber라는 것을 코드에 명시해야함
// 컴파일러에 그것을 알려줘야함
// typescropt는 2개자 접근법
// ㅌ=데이터와 변수의 타입을명시적으로 정의할 수도 있다.
// javascript처럼 변수만 생성하고 넘어가줌
// typescript


let a = "hello";
// a의 타입을 추론해줌
// a가 string이어야한다는 것을 알게됨 

a = "bye" 
// 문제없이 변경됨
// string -> string이기에
// a = 1
// string을 number로 하기에 문제 발생
// 버그가 될수 있음 그러므로 error 발생시킴

let b : boolean = "x" // error
// let b : boolean = true
// : type checker
// 타입스크립트에서 데이터 타입이 어때야하는지 알려줌 
// let b = true // nico는 이렇게하는 것이 코드도 짧아서 가독성이 좋아서 추천한다고함

let c = [1,2,3]
// c.push("1") // 다른 타입이 있어서 에러 발생시킴 이런경우 명시적으로 하기도함
let d : number[] = []
d.push(42)
c.push(42)

const player = {
    name: "jake"
}

// player.name = 1
player.name = "jim"
player.hello()
