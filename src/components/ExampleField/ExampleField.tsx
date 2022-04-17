import { CustomComponent, Button } from "../../constant"
import { useExampleField } from "./hook/useExampleField"
import { ModalAddRule } from "../ModalAddRule/ModalAddRule";
import { useState } from "react";
import { PropsType } from "../../type";

export const ExampleField = ({component}:PropsType) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [dataRule,
    handleClickDeleteRule,
    handleClickAddRule,
    handleClickSubmit,
    handleClickApplyEdit] = useExampleField(setIsShowModal, component);

    return <>
    <div className='example-field' > 
      {dataRule && Object.keys(dataRule).map((item:string,index:number) => {
        return item ==="id" || item ==="name" ? null : 
         <li key={index}>{item}:{dataRule[item]} <button onClick={handleClickDeleteRule} name={item} id={String(index)}>X</button></li>
      })}
      {component ? <CustomComponent as={component} props={dataRule}/> : <span>No Rules</span> }
    </div>
    <Button onClick={handleClickAddRule} >Add Rule</Button>
    <Button onClick={handleClickSubmit}>Submit</Button>
    <Button onClick={handleClickApplyEdit}>Apply edit</Button>
    {isShowModal && <ModalAddRule setIsShowModal={setIsShowModal} />}
  </>
}