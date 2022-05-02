import {Basket} from "../components/Basket/Basket"

const contentBasket = [{
    "background-color": "green",
    "border-radius": "5px",
    "name": "secondary",
    "id": "95350190-d5d0-480c-8d0b-7584cd579624",
}, {
    "background-color": "blue",
    "border-radius": "10px",
    "name": "secondary",
    "id": "95350190-d5d0-480c-8d0b-7584cd579624",
}, {
    "background-color": "black",
    "border-radius": "14px",
    "name": "secondary",
    "id": "d2ce16c2-a153-4402-8dc7-c12a6a0dc44f",
}, {
    "background-color": "yellow",
    "border-radius": "50px",
    "name": "secondary",
    "id": "95350190-d5d0-480c-8d0b-7584cd579624",
},{
    "background-color": "yellow",
    "border-radius": "50px",
    "name": "secondary",
    "id": "95350190-d5d0-480c-8d0b-7584cd579624",
}];
const props = (contentBasket,component)=> ({
    contentBasket,
    component,
    setContentBasket: ()=>{},
})
const setUp = (props) => render(<Basket {...props} />);
const setUpshallow = (props) => shallow(<Basket {...props} />);
describe("test Basket component with props", () => {
    
    it("should contain custom-components block", () => {
       const component = setUpshallow(props(contentBasket, "button"));
        expect(component.find(".custom-components")).toHaveLength(1);
})
    it("check rendering dependency on empty array contentBasket in props", () => {
        const component = setUp(props([], "input"));
        const textComponent = component.find("p");
        const customComponent = component.find("input");
        expect(textComponent.length).toEqual(1);
        expect(customComponent.length).toEqual(0);
    });
    it("check rendering dependency on array contentBasket in props and component", () => {
        const component = setUp(props(contentBasket, "a"));
        const textComponent = component.find("p");
       
        const customComponent = component.find("a");
        expect(textComponent.length).toBe(0);
        expect(customComponent.length).toEqual(5);
    });
    it("check rendering dependency on component ip props", () => {
        const component = setUp(props(contentBasket, "input"));
        expect(component.find("input").length).toEqual(5);
    })
})