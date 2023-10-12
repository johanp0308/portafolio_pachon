import { getRelationShipsUser } from "../storages/users.js";
import { getAll } from "../storages/crurd.js";
import { endpoints } from "../config/config.js";

const capitalizeEachWord = (text) => {
  const words = text.split(" ");
  const wordsCapitalized = words.map((word) => capitalize(word));
  return wordsCapitalized.join(" ");
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
}


export const getListCheck = (elements) =>{
  let list = [];
  elements.forEach(ele => {
    if(ele.checked){
      list.push(ele.value);
    }
  });
  return list;
}


export const addPortDialog = async (dialog) => {
  dialog.innerhtml = "";
  let data = await getRelationShipsUser(1);
  let {
    name,
    img,
    aboutme,
    contacts,
    experences,
    skillsId,
    habilitiesId,
    languagesId,
    statusId,
  } = data;

  dialog()
};

export const loadedForm = async () => {
  let statuseshtml;
  let habilitiesHtml;
  let languageshtml;
  let skillsHtml;

  let allStatuses = await getAll(endpoints.statuses);
  let allhabili = await getAll(endpoints.habilities);
  let allLanguages = await getAll(endpoints.languages);
  let allskills = await getAll(endpoints.skills);
  
  statuseshtml = /* */`
  <select class="form-select" required aria-label="Default select example" name="status">
    ${allStatuses.map((e=>{
      return `<option value="${e.id}">${capitalize(e.status)}</option>`;
    })).join("")}
	</select>
  `
  habilitiesHtml = `
  <div class="content">
    <h5>Habilities</h5>
    ${allhabili.map( (e) =>{
      return `
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${e.id}" id="flexCheckDefault" name="habilities">
      <label class="form-check-label" for="flexCheckDefault">
        ${e.icon} ${e.name}
      </label>
      </div>`
    }).join("")}
  </div>`

  languageshtml = `
  <div class="content">
    <h5>Languages you Speak</h5>
    ${allLanguages.map( (e) =>{
      return `
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${e.id}" id="flexCheckDefault" name="languages">
      <label class="form-check-label" for="flexCheckDefault">
        ${capitalize(e.language)}
      </label>
      </div>`
    }).join("")}
  </div>`
  
  skillsHtml = `
  <div class="content">
    <h5>Progamming Languages</h5>
    ${allskills.map( (e) =>{
      return `
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${e.id}" id="flexCheckDefault" name="skills">
      <label class="form-check-label" for="flexCheckDefault">
        ${e.icon}${capitalize(e.name)}
      </label>
      </div>`
    }).join("")}
  </div>`

  let form =/* html*/ `
  <div class="head">
						<h3>Form</h3>
					</div>
					<!-- conteido --></i>
					<h1>Form of Profile</h1>
					<form action="" class="form-profile-add" id="form-profile">
						<div class="mb-3">
							<label for="basic-url" class="form-label">Name</label>
							<div class="input-group">
							  <input type="text" class="form-control" required name="name">
							</div>
							<div class="form-text" id="basic-addon4">Here you must put your full name - required</div>
						  </div>

						<div class="mb-3">
							<label for="basic-url" class="form-label">Your image URL</label>
							<div class="input-group">
								<span class="input-group-text" id="basic-addon3">https://example.com/img.jpg</span>
								<input type="url" class="form-control" required id="basic-url" aria-describedby="basic-addon3 basic-addon4" name="img">
							</div>
							<div class="form-text" id="basic-addon4">Here you must put the url where your photo is on the web - required</div>
						</div>

						<!-- Aqui empieza la parte dificil -->
						<div class="mb-3">
							<label for="basic-url" class="form-label">Email</label>
							<div class="input-group">
							  <input type="text" class="form-control" required name="email">
							</div>
						  </div>

						<div class="mb-3">
							<label for="basic-url" class="form-label">Phone</label>
							<div class="input-group">
								<span class="input-group-text" id="basic-addon3">+57</span>
							  <input type="number" required class="form-control" name="phone">
							</div>
							<div class="form-text" id="basic-addon4"></div>
						  </div>
						<div class="mb-3">
							<label for="basic-url" class="form-label">Gihub UserName</label>
							<div class="input-group">
								<span class="input-group-text" id="basic-addon3">@</span>
							  <input type="text" required class="form-control" name="github">
							</div>
							<div class="form-text" id="basic-addon4"></div>
						  </div>
						<div class="mb-3">
							<label for="basic-url" class="form-label">Linkedin</label>
							<div class="input-group">
							  <input type="text" required class="form-control" name="linkedin">
							</div>
							<div class="form-text" id="basic-addon4"></div>
						  </div>
            <div class="input-group">
              <span class="input-group-text">Description</span>
              <textarea class="form-control" required aria-label="Description" name="aboutme"></textarea>
            </div>
            <h5>Status</h5>
            ${statuseshtml}
            ${habilitiesHtml}
            ${languageshtml}
            ${skillsHtml}
            <div class="experences-form">
            <h3>Experiencs</h3>
            <div class="mb-3">
              <label for="basic-url" class="form-label"><b>Experence 1</b></label>
              <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Company</span>
                <input type="text" class="form-control" name="company1">
              <span class="input-group-text" id="basic-addon3">Position</span>
                <input type="text" class="form-control" name="position1">
              </div>
              <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect02" name="duration1">
                  <option value="menos de 1 año">Menos de 1 año</option>
                  <option value="mayor a 1 año y menor a 5">Mayor a 1 año y menor a 5</option>
                  <option value="mayor a 5 años">Mayor a 5 años</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">Duration</label>
                </div>
              <div class="input-group">
                <span class="input-group-text">Description</span>
                <textarea class="form-control" aria-label="With textarea" name="description1"></textarea>
                </div>
              <div class="form-text" id="basic-addon4"></div>
            </div>
            <div class="mb-3">
              <label for="basic-url" class="form-label"><b>Experence 2</b></label>
              <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Company</span>
                <input type="text" class="form-control" name="company2">
              <span class="input-group-text" id="basic-addon3">Position</span>
                <input type="text" class="form-control" name="position2">
              </div>
              <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect02" name="duration2">
                  <option value="menos de 1 año">Menos de 1 año</option>
                  <option value="mayor a 1 año y menor a 5">Mayor a 1 año y menor a 5</option>
                  <option value="mayor a 5 años">Mayor a 5 años</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">Duration</label>
                </div>
              <div class="input-group">
                <span class="input-group-text">Description</span>
                <textarea class="form-control" aria-label="With textarea" name="description2"></textarea>
                </div>
              <div class="form-text" id="basic-addon4"></div>
            </div><div class="mb-3">
              <label for="basic-url" class="form-label"><b>Experence 3</b></label>
              <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Company</span>
                <input type="text" class="form-control" name="company3">
              <span class="input-group-text" id="basic-addon3">Position</span>
                <input type="text" class="form-control" name="position3">
              </div>
              <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect02" name="duration3">
                  <option value="menos de 1 año">Menos de 1 año</option>
                  <option value="mayor a 1 año y menor a 5">Mayor a 1 año y menor a 5</option>
                  <option value="mayor a 5 años">Mayor a 5 años</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">Duration</label>
                </div>
              <div class="input-group">
                <span class="input-group-text">Description</span>
                <textarea class="form-control" aria-label="With textarea" name="description3"></textarea>
                </div>
              <div class="form-text" id="basic-addon4"></div>
            </div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
  
  `
  // console.log(skillsHtml);
  // console.log(habilitiesHtml);
  // console.log(statuseshtml);
  return form;
}