import { ADD_RULE,DELETE_RULE,EDIT_RULE,CLEANING_RULES } from "./actions";
import { ActionType, } from "../../type";
import { deleteRule } from "../../helpers/deleteRule";
export type initialStateRuleType = {
    data: {}
};
export const initialRuleState:initialStateRuleType  = {
    data: {}
}
export const ruleReducer = (state = initialRuleState, action:ActionType ) => {
    switch (action.type) {
        case ADD_RULE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                },
            };
        case DELETE_RULE:
            return deleteRule(state, action.payload.nameRule);
        case EDIT_RULE:
            return {
                ...state,
                data: {
                    ...action.payload,
                }
            };
        case CLEANING_RULES:
            return {
                ...state,
                data:{}
            }
        default:
            return {
                ...state,
            }
    }
}