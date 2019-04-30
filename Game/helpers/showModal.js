function showModal(e){
    let tempTarget = e.target.id;
    let target = tempTarget + "Div"
    let localStorage = window.localStorage.getItem("party")
    let modal = document.getElementById(target)
    let obj = {}
    console.log(modal)
    if(modal.className === "hide"){
        modal.className = "row"
    }else{  
        modal.className = "hide"
    }
    // if(localStorage){
    //     let storage = JSON.parse(localStorage)
    //     console.log(storage)
    // }else{
    //     let obj = {name}
    //     let s = JSON.stringify(obj)
    //     window.localStorage.setItem("party", s)
    // }
}
export default showModal;