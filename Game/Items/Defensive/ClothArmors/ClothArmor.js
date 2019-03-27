import Armor from '../Armor';
class ClothArmor extends Armor{
    constructor(name, type){
        super(name, type)
        this.defense = 3
    }
}
export default ClothArmor