/* Imports */
import {addPortDialog, loadedForm, getListCheck,loadedTable} from './src/util/domAdd.js'
import { postUser } from './src/storages/users.js';
/* Const */
const d = document;
const dialog = d.querySelector("#portafolio")
const content = d.querySelector(".content-data");
const btn_cvs = d.querySelector(".btn-Cvs")
const btn_form = d.querySelector(".btn-Form")
const title = d.querySelector(".title");

// console.log(content)

const initForm = async () =>{
    content.innerHTML = "";
    content.insertAdjacentHTML("beforeend", await loadedForm())
}

const initTable = async () =>{
    content.innerHTML = "";
    content.style.cssText="display:flex; flex-direction:row; flex-wrap:wrap; justify-content:space-evenly";
    loadedTable(content)
}


/* Declare Events*/
d.addEventListener("DOMContentLoaded",(e)=>{
    dialog.style.display = "none";
    initForm();
});

d.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(e.target.matches("#form-profile, form-profile-add")){
        let checkSkills = getListCheck(d.querySelectorAll("input[name='skills']"));
        let checkLanguages = getListCheck(d.querySelectorAll("input[name='languages']"));
        let checkHabilities = getListCheck(d.querySelectorAll("input[name='habilities']"));
        
        console.log(Object.fromEntries(new FormData(e.target)))
        let dataobj = Object.fromEntries(new FormData(e.target));

        let exper = [1,2,3]

        exper = exper.map((e)=>{
            return {
                company:dataobj[`company${e}`],
                position:dataobj[`position${e}`],
                description:dataobj[`description${e}`],
                duration:dataobj[`duration${e}`]
            }
        })

        // Esto botara Error si se cambia en el html el name del atributo
        let contact = [
            {socialId:1,data:dataobj.linkedin,},
            {socialId:2,data:dataobj.github},
            {socialId:3,data:dataobj.email},
            {socialId:4,data:dataobj.phone},
        ]

        let newObj = {
            name:dataobj.name,
            img:dataobj.img,
            skillsId:checkSkills,
            habilitiesId:checkHabilities,
            languagesId:checkLanguages,
            statusId:(typeof dataobj.status !== 'number') ? Number(dataobj.status) : null,
            contacts:contact,
            experences:exper,
            aboutme:dataobj.aboutme,
        }
       postUser(newObj);
    }

})

d.addEventListener("click", async (e)=>{
    if(e.target.matches("button#dialog-close.btn-close")){
        dialog.innerHTML=""
        console.log(e.target)
        dialog.close();
        dialog.style.display = "none";
    }
    if(e.target.matches("#sidebar .btn-Cvs")){
        console.log(e.target)
        btn_form.classList.remove("active");
        btn_cvs.classList.add("active");
        title.textContent="Resume"
        initTable();

    }
    if(e.target.matches("#sidebar .btn-Form")){
        btn_form.classList.add("active");
        btn_cvs.classList.remove("active");
        title.textContent="Form"
        initForm();
    }

    if(e.target.matches("a.card-portafo")){
        console.log(e.target.id);
        dialog.insertAdjacentHTML("beforeend",await addPortDialog(e.target.id)) ;
        dialog.style.display = "block";
        dialog.showModal()
    }
});

