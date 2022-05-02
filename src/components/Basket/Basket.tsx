import React from "react"
import { CustomComponent } from "../../constant";
import { ContentBasketType, OnClickButtonType, RuleType, PropsType } from "../../type";
import uniqid from "uniqid"


export const Basket = ({ contentBasket, component, setContentBasket }:PropsType & ContentBasketType ): React.ReactElement => {
  const handleDeleteComponentIsBasket = (e: OnClickButtonType) => {
    setContentBasket(contentBasket.filter((item: RuleType):boolean => e?.target.id !== item.id));
  }

  const handleClick = (e: React.MouseEvent) => {
    handleDeleteComponentIsBasket(e as OnClickButtonType); 
  };
 
  return <div id={uniqid()} className='custom-components'>
    {contentBasket.length ? contentBasket.map((item:RuleType,index:number) => {
      return <div id={uniqid()}>
        <CustomComponent id={item.id} key={index} as={component} props={item} /><button onClick={handleClick } id={item.id} >X</button>
      </div>
    })  : <p>No Content</p>}
  </div>
}
 