class Character{
    constructor(name){
        this.name = name;
        this.stats = { 
            hp : 10,
            mp : 0,
            str: 8,
            wis: 8,
            int: 8,
            chr: 8,
            dex: 8,
            con: 8,
            level: 0
        };
    }
    greeting(){
        return `Hello, my name is ${this.name}`
    }
    levelUp(){
        ++this.stats.level
    }
}
export default Character