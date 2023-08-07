class Player {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string
    ) {}
}

const nico = new Player("ja", "ke", "제이크")
nico.firstName