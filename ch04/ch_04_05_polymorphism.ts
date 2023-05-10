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