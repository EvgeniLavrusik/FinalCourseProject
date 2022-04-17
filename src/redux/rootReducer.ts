import { ruleReducer } from "../ducks/rule/reducer";
import { listComponentsReducer } from "../ducks/listComponents/reducer";
const rootReducer = {
    rule: ruleReducer,
    listComponent:listComponentsReducer,
}


export default rootReducer;


