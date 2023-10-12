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


export const addPortDialog = async (dialog) => {
  dialog.textContent = "";
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
    <h3>Habilities</h3>
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
    <h3>Languages you Speak</h3>
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
    <h3>Progamming Languages</h3>
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

  let form = `
  <div class="head">
						<h3>Form</h3>
					</div>
					<!-- conteido --></i>
					<h1>Form of Profile</h1>
					<form action="" class="flex">
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
								<span class="input-group-text" id="basic-addon3">https://example.com/users/img.jpg</span>
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
							  <input type="number" class="form-control" name="phone">
							</div>
							<div class="form-text" id="basic-addon4"></div>
						  </div>
						<div class="mb-3">
							<label for="basic-url" class="form-label">Gihub UserName</label>
							<div class="input-group">
								<span class="input-group-text" id="basic-addon3">@</span>
							  <input type="text" class="form-control" name="github">
							</div>
							<div class="form-text" id="basic-addon4"></div>
						  </div>
						<div class="mb-3">
							<label for="basic-url" class="form-label">Linkedin</label>
							<div class="input-group">
							  <input type="text" class="form-control" name="linkedin">
							</div>
							<div class="form-text" id="basic-addon4"></div>
						  </div>
            <h3>Status</h3>
            ${statuseshtml}
            ${habilitiesHtml}
            ${languageshtml}
            ${skillsHtml}

						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
  
  `
  // console.log(skillsHtml);
  // console.log(habilitiesHtml);
  // console.log(statuseshtml);
  return form;
}