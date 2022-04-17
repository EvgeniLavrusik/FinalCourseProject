import { RuleType, PrevStateType } from '../type';
 
export const deleteRule = (state: PrevStateType, nameRule: string | undefined) => { 
    const filtredRules = Object.keys(state.data).filter(item => item !== nameRule);
    const stateWithFlitredRule = filtredRules.reduce((prevValue: RuleType, currentValue: string) => {
        prevValue[currentValue] = state.data[currentValue];
        return prevValue;
    }, {});
    return { data: { ...stateWithFlitredRule } };
}





