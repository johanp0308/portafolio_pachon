

const valiEstructUser = (obj) => {
    if(!(obj.constructor.name !== "Object" && Object.keys(obj)>0)) return {status:400,message:"This object is incorrect"};
    let {name,aboutme,contacts,skillsId,habilitiesId,languages,statusId} = obj;
    if(!(contacts.constructor.name !== "Object") && Object.keys(contacts)>0) return {status:400,message:`This ${contacts} is not incorrect`}
    
    if(typeof name !== "string") return {status:400,message:`this attribute is incorrect: ${name}`};
    if(typeof aboutme !== "string") return {status:400,message:`this attribute is incorrect: ${aboutme}`};
    if(habilitiesId.constructor.name !== "Array") return {status:400,message:`this attribute is incorrect: ${name}`};
    if(skillsId.constructor.name!== "string") return {status:400,message:`this attribute is incorrect: ${name}`};
    if(typeof name === "string") return {status:400,message:`this attribute is incorrect: ${name}`};
    
}

const valiEstructSkill = (obj) => {
    if(!(obj.constructor.name !== "Object" && Object.keys(obj)>0)) return {status:404,message:"This object is incorrect"};

}