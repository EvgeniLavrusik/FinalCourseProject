import { useCustomComponents } from "./hooks/useCustomComponents"
import { CustomComponent } from "../../constant";
import { PropsType, RuleType } from "../../type";


export const CustomComponents = ({ component, setContentBasket }: PropsType): React.ReactElement => {
  const [dataListComponents,
    handleEditComponent,
    handlBuyClick,
    handleDeleteClick,
  ] = useCustomComponents(component, setContentBasket);
    
  return <div className='custom-components'>
      {dataListComponents.length ? dataListComponents.map((item: RuleType, index: number) => {
        return <div>
          <CustomComponent id={item.id}
            onClick={handleEditComponent}
            key={index} as={component}
            props={item} />
          <button className='delete_button'
            id={item.id}
            onClick={handleDeleteClick}>X</button>
          <button id={item.id} onClick={handlBuyClick}>Buy</button>
        </div>
      }) : <p>No Content</p>}
    </div> 
}