

import { ActionFuncType,PayloadType,RuleType } from '../../type';
export const ADD_RULE: string = 'ADD_RULE';
export const ACTION_ADD_RULE: ActionFuncType = (payload:PayloadType) => ({
    type: ADD_RULE,
    payload,
}) 
export const DELETE_RULE: string = 'DELETE_RULE';
export const ACTION_DELETE_RULE: ActionFuncType = (payload: PayloadType) => ({
    type: DELETE_RULE,
    payload,
})
export const EDIT_RULE: string = 'EDIT_RULE';
export const ACTION_EDIT_RULE = (payload:RuleType) => ({
    type: EDIT_RULE,
    payload,
})
export const CLEANING_RULES: string = 'CLEANING_RULES';
export const ACTION_CLEANING_RULES:ActionFuncType = () => ({
    type:CLEANING_RULES,
})