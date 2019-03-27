import Character from '../../Character';

class Ranged extends Character{
    constructor(name){
        super(name)
        this.stats.hp += 5
        this.stats.dex += 4
        this.stats.str += 2
        this.stats.con += 2
        this.stats.int -= 2 
    }
    focus(){
        return {
            turns: 3,
            boost: ()=>{
                this.stats.dex += 2
            },
            decrement: function(){
                turns --
            }
        }
    }
}
export default Ranged;