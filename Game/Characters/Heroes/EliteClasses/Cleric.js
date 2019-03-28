import Mage from '../BaseClasses/Mage';
import Magic from '../../../Magic/WhiteMagic/WhiteSpells'

class Cleric extends Mage{
    constructor(name){
        super(name)
        this.cure = Magic.Cure
    }
}

export default Cleric