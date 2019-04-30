import Game from './Game/Game'
import buildList from './Game/helpers/buildList'
import buildParty from './Game/helpers/buildParty'
import addPlayer from './Game/helpers/addPlayer'
import showModal from './Game/helpers/showModal'
const game = new Game()
const helpers = {
    buildList: buildList,
    buildParty: buildParty,
    addPlayer: addPlayer,
    showModal: showModal
}
function startGame(){
    helpers.buildList(game.heroes, "newplayer")
}


module.exports = {
    helpers: helpers,
    startGame: startGame
}
