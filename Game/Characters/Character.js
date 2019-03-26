class Character{
    constructor(name){
        this.name = name;
        this.stats = {};
    }
    greeting(){
        return `Hello, my name is ${this.name}`
    }
}
export default Character