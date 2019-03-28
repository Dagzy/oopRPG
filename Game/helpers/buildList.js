import showAbilities from './showAbilities'
function buildList(arr, t){
    console.log(t)
    let target = document.getElementById(t)
    let list = document.createElement("ul");
    target.appendChild(list)
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        let button = document.createElement("button");
        button.className = "btn btn-warning"
        button.innerText = arr[i].name
        button.id = arr[i].name
        button.addEventListener('click', showAbilities)
        li.appendChild(button)
        list.appendChild(li)
    }
}

export default buildList