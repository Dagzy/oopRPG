import Character from '../../Character';

class Mage extends Character{
    constructor(name){
        super(name)
        this.stats.hp -= 2
        this.stats.mp = 10
        this.stats.wis += 4
        this.stats.int += 4
        this.stats.str -= 2 
    }
    dailySpells(){
        return 2 + this.stats.level
    }
}
export default Mage;