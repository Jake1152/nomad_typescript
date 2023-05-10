class Words {

}

class Dcit {
    private words: Words
    constructor() {
        this.words = {}
    }

    add (word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
}

class Word {
    constructor (
        public readonly term: string,
        public readonly def: string
    ) { }
}

const kimchi = new Word("kimchi", "korean food")
const dict = new Dict()