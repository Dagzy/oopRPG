import Weapon from '../Weapon';

class Sword extends Weapon {
    constructor(n, t = "slashing"){
        super(n, t)
        console.log(this)
    }
}
export default Sword