import { useSelector,useDispatch } from "react-redux";
import {  listComponentSelector } from "../../../ducks/listComponents/selectors";
import { OnClickButtonType,RuleType, StateType,ReturnType } from "../../../type";
import { ACTION_EDIT_RULE } from "../../../ducks/rule/actions";
import { ACTION_DELETE_COMPONENT } from "../../../ducks/listComponents/actions";
import { validationComponents } from "../../../helpers/validationComponents";

export const useCustomComponents = (component: string, setContentBasket:React.Dispatch<React.SetStateAction<RuleType[]>> ):ReturnType => {
    const dispatch = useDispatch();
  
    const dataListComponents:RuleType[] = useSelector(listComponentSelector);
    
    const handleEditComponent = (e: OnClickButtonType): void => {
        dispatch(ACTION_EDIT_RULE(dataListComponents.filter((item: RuleType) => item.id === e?.target.id)[0]));
    };

    const handleClickBuy = (e: OnClickButtonType): void => {
        setContentBasket((prevstate:StateType):StateType => {
            const desiredComponent: RuleType = dataListComponents.find((item: RuleType): boolean => e?.target.id === item.id) || {};
            return !prevstate.includes(desiredComponent) ? [...prevstate, desiredComponent] : prevstate;   
        })
    };

    const handleDeleteCustomComponent = (e: OnClickButtonType): void => {
        dispatch(ACTION_DELETE_COMPONENT(validationComponents(component), { data: { id: `${e?.target.id}` } }));
    };

    const handleDeleteClick = (e: React.MouseEvent) =>
    handleDeleteCustomComponent(e as OnClickButtonType);

    const handlBuyClick = (e: React.MouseEvent) =>
    handleClickBuy(e as OnClickButtonType);

    return [dataListComponents,handleEditComponent,handlBuyClick,handleDeleteClick];
}
