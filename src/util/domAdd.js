import { getRelationShipsUser } from "../storages/users";

const capitalizeEachWord = (text) => {
  const words = text.split(" ");
  const wordsCapitalized = words.map((word) => capitalize(word));
  return wordsCapitalized.join(" ");
};

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
  dialog.insertAdjacentHTML(
    "beforeend",
     `
    <div id="portafolio-sidebar">
        <section id="image-perfil">
            <img src="${img}" alt="foto">
        </section>
        <section id="contact-me">
            
        </section>

        <section id="about-me">
            <h3 class="title">About-me</h3>
            <p class="text"></p>
        </section>
        <section id="habilities">
            
        </section>
    </div>
    <div id="portafolio-contmain">
        <section id="name title">
            
        </section>
        <section class="experence">

        </section>
        <section class="skills">

        </section>
        <section class="lenguagues2">

        </section>
    </div>
    `);



};
