import {Basket} from "../components/Basket/Basket"
import React from 'react'

const  setUp = (props) => shallow(<Basket {...props}/>)


describe("test Auth component", () => {
    let component;
    beforeEach(() => {
    component = setUp();
    });
    afterEach(() => {
        component = null;
    })
    
    it("should contain .auth wrapper", () => {
        const wrapper = component.find(".auth");
        expect(wrapper.length).toBe(1);
    });
    it("should contain two button", () => {
        const buttons = component.find("button");
        expect(buttons.length).toBe(2);
    })
})