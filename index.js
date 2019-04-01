import Game from './Game/Game'
import buildList from './Game/helpers/buildList'
import buildParty from './Game/helpers/buildParty'

const game = new Game()
const helpers = {
    buildList: buildList,
    buildParty: buildParty,
    addPlayer: addPlayer
}
function startGame(){
    helpers.buildList(game.heroes, "newplayer")
}

function addPlayer(e){
    e.preventDefault()
    let localStorage = window.localStorage.getItem("party")
    let intro = document.getElementById("intro")
    let name = document.getElementById("name").value
    let obj = {}
    if(intro.className === "hide"){
        intro.className = "row"
    }else{  
        intro.className = "hide"
    }
    if(localStorage){
        let storage = JSON.parse(localStorage)
        console.log(storage)
    }else{
        let obj = {name}
        let s = JSON.stringify(obj)
        window.localStorage.setItem("party", s)
    }
}
module.exports = {
    helpers: helpers,
    startGame: startGame
}
