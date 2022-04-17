import {Auth} from "../components/Auth/Auth"
import React from 'react'

describe("test Auth component", () => {
    let component;
    beforeEach(() => {
    component = shallow(<Auth />);
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