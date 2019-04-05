function showModal(e){
    let target = e.target;
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
export default showModal;