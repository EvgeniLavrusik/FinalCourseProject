import { OnClickButtonType } from "../../type";
import { useDispatch } from "react-redux";
import { ACTION_GET_LIST_COMPONENTS } from "../../ducks/listComponents/actions";
import { validationComponents } from "../../helpers/validationComponents";

type ReturnType = [
  (e: React.MouseEvent) => void,
]; 

export const useNavHook = (setComponent:React.Dispatch<React.SetStateAction<string>>):ReturnType => {
    const dispatch = useDispatch();

 const handleClickNavButton = (e: OnClickButtonType) => {
     setComponent(e.target.id);
        dispatch(ACTION_GET_LIST_COMPONENTS(validationComponents(e?.target.id)));;
    };
    const handleClick = (e: React.MouseEvent) => {
    handleClickNavButton(e as OnClickButtonType); 
  };
  return [handleClick];
}