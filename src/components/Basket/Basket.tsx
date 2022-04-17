import React from "react"
import { CustomComponent } from "../../constant";
import { ContentBasketType, OnClickButtonType, RuleType, PropsType } from "../../type";

export const Basket = ({ contentBasket, component, setContentBasket }:PropsType & ContentBasketType ): React.ReactElement => {
  const handleDeleteComponentIsBasket = (e: OnClickButtonType) => {
    setContentBasket(contentBasket.filter((item: RuleType):boolean => e?.target.id !== item.id));
  }

  const handleClick = (e: React.MouseEvent) => {
    handleDeleteComponentIsBasket(e as OnClickButtonType); 
  };
  
  return  <div className='custom-components'> 
    {contentBasket.length ? contentBasket.map((item:RuleType,index:number) => {
      return <div>
        <CustomComponent id={item.id} key={index} as={component} props={item} /><button onClick={handleClick } id={item.id} >X</button>
      </div>
    })  : <p>No Content</p>}
  </div>
}
 