import {
    valiEstructUser as validation,
    compareEstructure as compare
} from '../util/validation.js'

import {
    getAll,
    getOne,
    post,
    deleteOne,
    putOne
} from './crurd.js'

/* Consts */
const enpointUser = 'users'

export const getAllUsers = () =>{
    return getAll(enpointUser);
}

export const getOneUser = (id) =>{
    return getOne(enpointUser,id);
}

export const postUser = (obj={}) =>{
    let objVal = validation(obj);
    if(objVal.status) return objVal.message;
    return post(objVal,enpointUser);
}

export const deleteOneUser = (id) =>{
    return deleteOne(enpointUser,id)
}

export const putOneUser = async (obj,id) =>{
    let objVal = validation(obj);
    if(objVal.status) return objVal.message;
    let newEdit = compare(await getOneUser(id),objVal);
    return putOne(newEdit,enpointUser,id);
}

export const getRelationShipsUser = async (id) =>{
    let data = await getOneUser(id);
    let {skillsId:idSkil,habilitiesId:idhabili,languagesId:idlengua,statusId:idstatus,contacts:contactsId} = data;
    
    data.skillsId = await Promise.all(idSkil.map(async (id) => await getOne("skills",id)));

    data.habilitiesId = await Promise.all(idhabili.map(async(id)=> await getOne("habilities",id)));

    data.languagesId = await Promise.all(idlengua.map(async(id)=> await getOne("languages",id)));

    data.statusId = await getOne("statuses",idstatus);

    data.contacts =await Promise.all( contactsId.map(async(e)=>{
        let {socialId:id} = e;
        e.socialId = await getOne("social",id);
        return e;
    }))
    return data; 
}

console.log(await getRelationShipsUser(1));

// let ser = {
//     name:"Jaider",
//     aboutme:"I am Papucho",
//     contacts:[
//         {"linkedin":"jdiaer.com"},
//         {"email":"yadier@gmail.com"},
//         {"phone":"798165"},
//         {"github":"@jiader"}
//     ],
//     skillsId:[1,2],
//     habilitiesId:[1,2],
//     languagesId:[1,2],
//     statusId:3
// }

// console.log(await putOneUser(ser,3))