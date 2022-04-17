import { createInstance } from "./instance";

const api = createInstance();

export const listComponentsGet = async (componentName) => {
    const responce = await api.get(`/${componentName}`);
    return responce;
}
export const createCustomComponent = async (componentName, styleComponent) => {
    const responce = await api.post(`/${componentName}`, styleComponent);
    return responce
}
export const editCustomComponent = async (componentName,editStyleComponent) => {
    const responce = await api.patch(`/${componentName}`, editStyleComponent);
    return responce;
}
export const deleteCustomComponent = async (componentName, idCustomComponent) => {
    const responce = await api.delete(`/${componentName}`, idCustomComponent);
    return responce;
}
