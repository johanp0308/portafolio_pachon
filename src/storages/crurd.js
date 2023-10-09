import {env} from "../config/config.js";


/* Consts */
const url = `${env.ssl+env.host}:${env.port}`;
const config = {
    method:undefined,
    headers:{"content-type":"application/json"}
}

export const getAll = async (enpoint) => {
    let res = await (await fetch(`${url}/${enpoint}`)).json();
    return res;
}
export const getOne = async(endpoint,id) => {
    let res = await (await fetch(`${url}/${endpoint}/${id}`)).json();
    return res;
}
export const post = async (obj={},endpoint) => {
    config.method = 'POST';
    config.body = JSON.stringify(obj);
    let res = await(await fetch(`${url}/${endpoint}`,config)).json();
    return res;
}
export const deleteOne = async (endpoint,id) => {
    config.method = 'DELETE';
    let res = await( await fetch(`${url}/${endpoint}/${id}`,config)).json();
    return res;
}
export const putOne = async (obj = {},endpoint,id) => {
    config.method = 'PUT';
    config.body = JSON.stringify(obj);
    let res = await(await fetch(`${url}/${endpoint}/${id}`,config)).json();
    return res;
}
