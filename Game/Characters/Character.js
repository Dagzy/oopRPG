class Character{
    constructor(name){
        this.name = name;
        this.stats = { 
            maxHP: 10,
            currentHP : 10,
            maxMP : 0,
            currentMP: 0,
            str: 8,
            wis: 8,
            int: 8,
            chr: 8,
            dex: 8,
            con: 8,
            level: 0,
            xp: 0
        };
        this.items = [];
    }
    greeting(){
        return `Hello, my name is ${this.name}`
    }
    levelUp(){
        ++this.stats.level
    }
    attack(w){
        if(w){
            return w.damage + Math.floor(this.stats.str/4)
        }else{
            return Math.floor(this.stats.str/4)
        }
    }
    defend(a){
        if(a){
            return (
                a.defense + this.stats.con/4
            )
        }else{
            return this.stats.con/4
        }
    }
    hitOrMiss(t){
        let mod1 = Math.floor(Math.random()*3)
        let mod2 = Math.floor(Math.random()*3)
        let acc = this.stats.acc? this.stats.acc + this.stats.dex : this.stats.dex
        let eva = t.stats.eva? this.stats.eva + this.stats.dex : this.stats.dex
        let hit = (acc + mod1) - (eva + mod2)
        if(hit > 0){
            return true
        }else{
            return false
        }
    }
}
export default Character