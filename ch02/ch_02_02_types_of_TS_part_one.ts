// // typescript가 추론하게 하는 방법
// // let a : number[] = [1, 2];
// // // 사용자가 명시하는 방법
// // let b : string[] = ["i1", "1"];
// // let c : boolean[] = [true];

// // // optional type
// // // plyer object 

// // const player = {
// //     name: "jake"
// // }

// // player.name


// // const player : {
// //     name: string,
// //     age: number
// // } = {}


// // let a : number = 1;
// // let a : number = []; // error
// // let a : number = [1];
// // let b : string = "i1";
// // // let c : boolean[] = true;
// // let c : boolean[] = [true];

// // const player = {
// //     name: "nico"
// // }


// // age는 옵션일떄 어떻게 할것인가?
// // const player : object ={
// //     name: "nico"
// // }

// // player.name;


// const player : {
//     name:string,
//     age?:number
// } = {
//     name: "jake"
// }

// if (player.age < 10)
// {
    
// }

// if (player.age && player.age < 10)
// {
    
// }


// /*
//     // 여러개 쓰고 싶을때
//     하지만 편리하지 않음
//     내용이 같은데 코드가 중복됨
//     이런 경우 alias를 쓸 수 있음
//     더 적은 코드로 같은 효과를 낼수 있음
// */
// // Alias
// // const playerJake : {
// //     name:string,
// //     age?:number
// // } = {
// //     name: "jake"
// // }

// // const playerJim : {
// //     name:string,
// //     age?:number
// // } = {
// //     name: "Jim"
// // }


// // ## 2
// // type Player = {
// //     name:string,
// //     age?:number
// // }

// // const playerJake : Player = {
// //     name: "jake"
// // }

// // const playerJim : Player = {
// //     name: "Jim"
// // }


// // ## 3
// // type Age = number;
// // type Name = string;
// // type Player = {
// //     name:Name,
// //     age?:Age
// // }

// // const playerJake : Player = {
// //     name: "jake"
// // }

// // const playerJim : Player = {
// //     name: "Jim", // ,를 써야한 enum과 비슷
// //     age: 24,
// // }

// // function도 가능
// // function playerMaker(name:string)
// // {
// //     return {
// //         name: name,
// //         // age: 21,
// //         // name  // 이렇게 적어도 가능
// //     }
// // }

// // const jim = playerMaker("jim")
// // // jim.age = 12 // 동작하지 않음 왜냐하면 age가 없으니까 

// // // Player type을 return한다는 것을 명시하고 싶음
// // // function functionName(parameter:parameter_type) : return_type
// // function playerMaker(name:string) : Player
// // {
// //     return {
// //         name: name,
// //         // age: 21,
// //         // name  // 이렇게 적어도 가능
// //     }
// // }

// // // variable
// // let a : boolean;
// // // parameter
// // function playerMaker(name:string)
// // // function
// // function playerMaker(name:string) : Player

// // memory_things : type

// // function playerMaker(name:string)
// // {
// //     return {
// //         name: name
// //         // name  // 이렇게 적어도 가능
// //     }
// // }


// // arrow function

// type Age = number;
// type Name = string;
// type Player = {
//     name:Name,
//     age?:Age
// }
// function playerMaker(name:string) : Player
// {
//     return {
//         name: name
//     }
// }

// // const playerMaker = (name:string) => ({name})
// const jim = playerMaker("jim")
// jim.age = 12