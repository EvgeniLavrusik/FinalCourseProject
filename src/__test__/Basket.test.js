import {Basket} from "../components/Basket/Basket"
import React from 'react'


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
}];
const props = (contentBasket,component)=> ({
    contentBasket,
    component,
    setContentBasket: ()=>{}
})
const setUp = (props) => shallow(<Basket {...props} />);
describe("test Basket component with props", () => {
    
    
    it("should contain custom-components block", () => {
       const component = setUp(props(contentBasket, "button"));
        const customComponents = component.find(".custom-components");
        expect(customComponents.length).toBe(1);
})
    it("check rendering dependency on empty array contentBasket in props", () => {
        const component = setUp(props([], "button"));
        const textComponent = component.find("p");
        const customComponent = component.find("button");
        expect(textComponent.length).toBe(1);
        expect(customComponent.length).toEqual(0);
    });
     it("check rendering dependency on array contentBasket in props", () => {
       const component = setUp(props(contentBasket, "button"));
        const textComponent = component.find("p");
        const customComponent = component.find("button");
        expect(textComponent.length).toBe(0);
        expect(customComponent.length).toEqual(4);
    })
})