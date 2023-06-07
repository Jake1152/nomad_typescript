

interface ILocalStorage<T> {
    [key:T]: T
}

class LocalStorage<T> {
	private storage : ILocalStorage<T> = {}
	setItem(key: T, value: T) {}
    getItem(key: T):T {
        return this.storage[key]
    }
	clearItem(key: T) {
		delete this.storage[key]
	}
	clear() {

	}
}


abstract class AGeolocation {
    getCurrentPosition(any)
    getCurrentPosition(any, any)
    getCurrentPosition(any, any, any)
    watchPosition(any)
    watchPosition(any, any)
    watchPosition(any, any, any)
    clearWatch(any)
}

class Geolocation extends AGeolocation {
    getCurrentPosition(any)
    getCurrentPosition(any, any)
    getCurrentPosition(any, any, any)
    watchPosition(any)
    watchPosition(any, any)
    watchPosition(any, any, any)
    clearWatch(any)
}


interface SStorage<T> {

    [key:string]: T
}

class LocalStorage<T> {
	private stroage : SStorage<T> = {}
	set(key:string, value: T) {}
	remove(key:string) {
		delete this.storage[key]
	}
	get(key: string):T {
		return this.storage[key]
	}
	clear() {

	}
}

const stringsStorage = new LocalStorage<string>()

stringStorage.get("key")

const booleansStroage = new LocalStorage<boolean>();