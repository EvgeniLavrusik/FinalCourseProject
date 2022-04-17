import React from "react";
import { PropsModalAddRuleType,OnFormEventType  } from '../../type';
import { useDispatch } from 'react-redux';
import { ACTION_ADD_RULE } from "../../ducks/rule/actions";

export const ModalAddRule: React.FC<PropsModalAddRuleType> = ({ setIsShowModal }:any) => {
    const dispatch = useDispatch();
    const handleClickAddStyle = (e:OnFormEventType):void => {
        e.preventDefault();
        const { target } = e;
        const { elements } = target;
        const payload = {
            [elements.nameRule.value]:elements.valueRule.value,
        }
        dispatch(ACTION_ADD_RULE(payload));
        setIsShowModal(false);
    }
    return <form className="modalAddRule" onSubmit={handleClickAddStyle }>
        <input id='nameRule'/> :
        <input name='valueRule' />
        <button >Add Style</button>
    </form>
}