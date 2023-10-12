
export const valiEstructUser = (obj) => {
    if(obj.constructor.name !== "Object" || Object.keys(obj)==0) return {status:400,message:"This object is incorrect, input again"};
    let {name=null,
        aboutme=null,
        img=null,
        experences=[],
        contacts=[],
        skillsId=[],
        habilitiesId=[],
        languagesId=[],
        statusId=null
    } = obj;
    if(!(contacts.constructor.name !== "Object") && Object.keys(contacts)>0) return {status:400,message:`This ${contacts} is not incorrect`}
    if(typeof img !== "string") return {status:400,message:`this attribute img is incorrect: ${img}`};
    if(typeof name !== "string") return {status:400,message:`this attribute name is incorrect: ${name}`};
    if(typeof aboutme !== "string") return {status:400,message:`this attribute aboutme is incorrect: ${aboutme}`};
    if(experences.constructor.name !== "Array") return {status:400,message:`this attribute experences is incorrect: ${experences}`};
    if(habilitiesId.constructor.name !== "Array") return {status:400,message:`this attribute habilitiesId is incorrect: ${habilitiesId}`};
    if(skillsId.constructor.name!== "Array") return {status:400,message:`this attribute skillsId is incorrect: ${skillsId}`};
    if(languagesId.constructor.name !== "Array") return {status:400,message:`this attribute languagesId is incorrect: ${languagesId}`};
    if(typeof statusId !== "number") return {status:400,message:`This attribute statusId is incorrect: ${statusId}`}
    return obj;
}

export const compareEstructure = (obj,newObj)=>{
    Object.keys(obj).forEach(keys => {
        if(newObj.hasOwnProperty(keys) === obj.hasOwnProperty(keys)){
            obj[keys] = newObj[keys];
        }  
    });
    return obj;
}

// let ser = {
//         name:"Jaider",
//         aboutme:"I am Jaider, i'm from Colombia",
//         contacts:[
//             {"linkedin":"jdiaer.com"},
//             {"email":"yadier@gmail.com"},
//             {"phone":"798165"},
//             {"github":"@jiader"}
//         ],
//         skillsId:[1,2],
//         habilitiesId:[1,2],
//         languagesId:[1,2],
//         statusId:3
// }
// let nada = {}
// console.log(valiEstructUser(ser));