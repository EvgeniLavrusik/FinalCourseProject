import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ruleSelectors } from "../../../ducks/rule/selectors";
import { OnClickButtonType, RuleType,ReturnTypeUseExampleField } from "../../../type";
import { ACTION_DELETE_RULE } from "../../../ducks/rule/actions";
import { validationComponents } from "../../../helpers/validationComponents";
import { ACTION_POST_COMPONENT,ACTION_PATCH_COMPONENT } from "../../../ducks/listComponents/actions";


export const useExampleField = (setIsShowModal:React.Dispatch<React.SetStateAction<boolean>> ,component:string):ReturnTypeUseExampleField => {
    const dispatch = useDispatch();
    const dataRule:RuleType = useSelector(ruleSelectors);
    const handleClickDeleteRule = (e:OnClickButtonType ):void => {
        const nameRule: string | undefined = e?.target.name;
        const payload = {
            nameRule,
        };
        dispatch(ACTION_DELETE_RULE(payload));
    };
    const handlDeleteRule = (e: React.MouseEvent) =>
        handleClickDeleteRule(e as OnClickButtonType);
        const handleClickAddRule = (): void => {
        if (component) {
            setIsShowModal((): boolean => true);;
        } else {
            return;
        }
    };
    const handleClickSubmit = (): void => {
        console.log(dataRule);
        
        dispatch(ACTION_POST_COMPONENT(validationComponents(component), dataRule));
    };
    const handleClickApplyEdit = (): void => {
        dispatch(ACTION_PATCH_COMPONENT(validationComponents(component), dataRule));
    };
    return [dataRule,handlDeleteRule,handleClickAddRule,handleClickSubmit,handleClickApplyEdit]
}