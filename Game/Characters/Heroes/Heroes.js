import Cleric from './EliteClasses/Cleric';
import Druid from './EliteClasses/Druid';
import Necromancer from './EliteClasses/Necromancer';
import Ranger from './EliteClasses/Ranger';
import Rogue from './EliteClasses/Rogue';
import Warrior from './EliteClasses/Warrior';

// const Tommy = new Warrior("Tommy");
// const Timmy = new Cleric("Timmy");

// let warcry = Tommy.warcry()
// console.log(Tommy.stats)
// warcry.boost()
// console.log(Tommy.stats)



function Party(){
    return [
        Cleric,
        Druid,
        Necromancer,
        Ranger,
        Rogue,
        Warrior
    ]
}
export default Party;