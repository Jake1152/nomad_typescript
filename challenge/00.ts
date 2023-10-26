
const last = (arr : any[]): any => {
    if (arr.length > 0)
        return arr[arr.length - 1]
    return null
}

const prepend = (arr : any[], item : any): any[] => {
    const copy_arr = [item, ...arr]
    return copy_arr
}

const mix = (arr1 : any[], arr2 : any[]): any[] => {
    const concated_arr= arr1.concat(arr2)
    return concated_arr
}

const count = (arr: any[]): number => {
    return arr.length
}

const findIndex = (arr: any[], item: any): number|null => {
    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === item)
            return idx
    }
    return null
}

const slice = (arr: any[], startIndex: number, endIndex: number) : any => {
    if (typeof endIndex === undefined)
        return arr.slice(startIndex)
    return arr.slice(startIndex, endIndex)
}
