

let last = (arr : any[]): any => {
    return arr[arr.length - 1]
}

let prepend = (arr : any[], item : any): any[] => {
    arr[0] = item
    return arr
}

let mix = (arr1 : any[], arr2 : any[]): any[] => {
    let arr0 = arr1.concat(arr2)
    return arr0
}

let count = (arr: any[]): number => {
    return arr.length
}


let findIndex = (arr: any[], item: any): number|null => {
    let flag : boolean

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === item)
            return idx
    }
    return null
}

let slice = (arr: any[], startIndex: number, endIndex: number) : any => {
    if (typeof endIndex === undefined)
        return arr.slice(startIndex)
    return arr.slice(startIndex, endIndex)
}
