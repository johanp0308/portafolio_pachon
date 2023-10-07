import {env} from "../config/config.js";
const enpoint = "users";
const url = `${env.ssl+env.host}:${env.port}/${enpoint}`;

export const getAll = () => {
}
export const getOne = (id) => {
}
export const post = (obj = {}) => {
}
export const deleteOne = (id) => {
}
export const putOne = (obj = {}) => {
}

console.log(env);