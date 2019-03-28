import Spell from '../Spell'

class Cure extends Spell{
    constructor(target){
        super("Cure", "Healing")
        this.cost = 2
        const max = target.stats.maxHP
        const current = target.stats.currentHP 
        const damage = max - current
        if(damage > 4){
            target.stats.currentHP += 5
        }else{
            target.stats.currentHP = max
        }
    }
}
export default Cure