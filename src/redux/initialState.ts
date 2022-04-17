import { initialRuleState } from "../ducks/rule/reducer";
import { initialListComponentState } from "../ducks/listComponents/reducer";
const initialState = {
    rule: initialRuleState,
    listComponent:initialListComponentState,
}

export default initialState;