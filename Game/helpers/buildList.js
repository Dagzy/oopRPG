import showAbilities from './showAbilities'
function buildList(arr, t){
    console.log(t)
    let target = document.getElementById(t)
    let list = document.createElement("ul");
    target.appendChild(list)
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement("li");
        item.innerText = arr[i].name
        item.id = arr[i].name
        item.addEventListener('click', showAbilities)
        list.appendChild(item)
    }
}

export default buildList