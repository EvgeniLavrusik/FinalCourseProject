import React from 'react';
import { CustomComponents } from '../CustomComponents/CustomComponents';
import { ExampleField } from '../ExampleField/ExampleField';
import { RuleType } from '../../type';

export function Components(props: {component:string,setContentBasket:React.Dispatch<React.SetStateAction<RuleType[]>>}): React.ReactElement {
  return <>
    <CustomComponents {...props}/>
    <ExampleField {...props}/>
  </>
}
export default Components;