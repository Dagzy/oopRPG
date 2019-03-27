import Game from './Game/Game'

const game = new Game()
// console.log(Timmy)
function startGame(){
    console.log(game.party)
    let list = document.createElement("ul");
    document.body.appendChild(list)
    for (let i = 0; i < game.party.length; i++) {
        let item = document.createElement("li");
        item.innerText = game.party[i].name
        list.appendChild(item)
    }
}
module.exports = {
    startGame: startGame
}