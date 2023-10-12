/* Imports */
import {addPortDialog, loadedForm} from './src/util/domAdd.js'

/* Const */
const d = document;
const dialog = d.querySelector("#portafolio")
const content = d.querySelector(".content-data");
// console.log(content)

const initForm = async () =>{
    content.innerHTML = "";
    console.log()
    content.insertAdjacentHTML("beforeend", await loadedForm())
}

const initTable = () =>{
    
}


/* Declare Events*/
d.addEventListener("DOMContentLoaded",(e)=>{
    dialog.style.display = "none";
    initForm();
});

d.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
})

d.addEventListener("click",(e)=>{
    if(e.target.matches("button#dialog-close.btn-close")){
        console.log(e.target)
        dialog.close();
    }
});

