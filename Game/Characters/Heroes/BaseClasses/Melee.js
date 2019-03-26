import Character from '../../Character';

class Melee extends Character{
    constructor(name){
        super(name)
        this.stats.hp += 5
        this.stats.str += 4
        this.stats.dex += 2
        this.stats.con += 2
        this.stats.int -= 2 
        // this.warcry = this.warcry.bind(this)
    }
    warcry(){
        let _cooldown = 30
        return {
            turns: 3,
            boost: ()=>{
                this.stats.str += 2
            },
            decrement: function(){
                turns --
            }
        }
    }
}
export default Melee;