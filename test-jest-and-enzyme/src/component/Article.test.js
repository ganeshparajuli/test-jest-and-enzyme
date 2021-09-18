import Article from "./Article";
import { shallow } from "enzyme";
import Table from "./Table"

describe('check Article page rendered.',()=>{
let wrapper=shallow(<Article />)

test("if click count proper.",()=>{
    expect(wrapper.find('.clicks-0').length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.clicks-1').length).toEqual(2);
})

test("using dive.",()=>{
    expect(wrapper.find(Table).dive().find('.custom-border').length).toBe(1);  
})
test("using snapshot 1.",()=>{
    let wrapper=shallow(<Table />)
    expect(wrapper).toMatchSnapshot();
})

})