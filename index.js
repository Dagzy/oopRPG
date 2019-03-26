import Party from './Game/Characters/Heroes/Heroes';
const Partay = Party()
// const Timmy = new Partay[0]("Timmy");

// console.log(Timmy)
function startGame(){
    let list = document.createElement("ul");
    document.body.appendChild(list)
    for (let i = 0; i < Partay.length; i++) {
        let item = document.createElement("li");
        item.innerText = Partay[i].name
        list.appendChild(item)
    }
}
module.exports = {
    startGame: startGame,
    party: Partay
}