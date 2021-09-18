import Blog from "./Blog";
import { shallow } from "enzyme";

describe('Blog Page test.',()=>{
let wrapper=shallow(<Blog />)

test("if all li tag are rendered.",()=>{
expect(wrapper.find('.licls').length).toBe(3)
})
test("if key present.",()=>{
expect(wrapper.find('.licls').at(0).key()).toBe('angular')
expect(wrapper.find('.licls').at(1).key()).toBe('node')
})
test("if child type are rendered properly.",()=>{
expect(wrapper.find('.number').childAt(0).type()).toBe("span")
})
test("if all ul tag are rendered.",()=>{
expect(wrapper.find('ul').children().length).toBe(3)
})
test("if hasClass.",()=>{
expect(wrapper.find('my-button').hasClass('disabled')).toBe(true)
})

});