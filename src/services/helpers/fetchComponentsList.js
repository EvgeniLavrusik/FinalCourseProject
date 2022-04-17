import { listComponentsGet } from "../listComponentsApi";


export async function fetchComponentList(componentName) {
    const data = await listComponentsGet(componentName);
    return data.data;
}