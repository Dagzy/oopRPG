import Heroes from '../Characters/Heroes/Heroes'
import buildList from './buildList'
function showAbilities(player){
    let abilities = document.getElementById("abilities")
    for (let i = 0; i < Heroes.length; i++) {
        if(Heroes[i].name === player.target.id){
            let newPlayer = new Heroes[i]("newPlayer")
            console.log(newPlayer)
        }
    }
}
export default showAbilities