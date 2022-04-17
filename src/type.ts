import React from "react";
export type ButtonExampleType = {
  color?: string,
  backgraund_color?:string,
}
export type ReturnType = [
  RuleType[],
  (e: OnClickButtonType) => void,
  (e: React.MouseEvent) => void,
  (e: React.MouseEvent) => void,
  
];
export type ReturnTypeUseExampleField = [
    RuleType,
    (e: React.MouseEvent) => void,
    () => void,
    () => void,
    () => void,
];
export type ButtonType = {
  color: string
}
export type PropsType = {
  component: string,
  setContentBasket:React.Dispatch<React.SetStateAction<RuleType[]>>,
}
export type ContentBasketType = {
   contentBasket: RuleType[],
}

export type PropsModalAddRuleType  = {
        setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,  
};

export type ActionFuncType = (payload:PayloadType) => ({
  type: string,
  payload?:PayloadType  ,
})
 export type RequiredFieldsType = {
    name: string,
    id:string
}

export type ListComponentDataStateType = RuleType[];

export type ListComponentStateType = {
  data: ListComponentDataStateType,
};

export type StateListComponentType = {
  rule: { data:  RuleType 
},
  listComponent: {
    data: RuleType[],
  isLoading:boolean,},
};

export type StateRuleType = {
     rule:{data:RuleType},
};

export type OnFormEventType = React.FormEvent<HTMLFormElement> & { preventDefault: () => {}, target: TargetType };

export type TargetType = {
  elements: ElementsType
};

export type ElementsType = {
  nameRule: NameRuleAndValueRuleType,
  valueRule: NameRuleAndValueRuleType,
};

export type NameRuleAndValueRuleType = {
  value: string
};

export type OnClickButtonType =
   (React.MouseEvent<HTMLButtonElement> & { target: TargetElementType });
type TargetElementType = {
  name: string;
  id: string ;
};
export type PropsCustomComponentType = {
  props: RuleType,
};
export type RuleType = {
  [key: string]: string,
};

export type StateType = RuleType[];

export type ActionPostType = {
  type: string,
  payload:PayloadType  ,
}
export type PayloadType = {
    [x: string]: string | undefined,
}
export type ActionType = ActionPostType & ActionDeleteType & ActionGetListType;
    
    
type ActionDeleteType = {
type: string,
    payload: { data: { id: string } }
} 

type ActionGetListType = {
    type: string,
    payload:StateType,
}; 
export type initialStateType = {
  data: [],
  isLoading:boolean,
};

export type idComponentDataType = {
    data: {
        id:string,
    }
}
export type PayloadGetListType = string;
export type ActionGetListFuncType =(payload:PayloadGetListType)=> ({
    type: string,
    payload: PayloadGetListType,
   
})
export type PrevStateType = {
    data: RuleType,
    
}