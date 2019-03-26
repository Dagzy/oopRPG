import Character from '../../Character';

class Mage extends Character{
    constructor(name){
        super(name)
        this.stats.hp -= 2
        this.stats.mp = 10
    }
}
console.log("Words")