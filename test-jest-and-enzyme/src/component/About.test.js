import About from './About'
import {shallow} from 'enzyme';

describe('if About component is render.',()=>{
    let wrapper=shallow(<About />)
    test("class check", ()=>{
        expect(wrapper.exists('.h1cls')).toEqual(true);
    })
    test("check state.", ()=>{
        expect(wrapper.state()).toEqual({name: 'code improve', id: 111})
    })
    test("check html mesage.", ()=>{
        expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true)
    })
    test("check only  html mesage.", ()=>{
        expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true)
        // if you wanna a check only msg about you dont care whats that class name then,
        expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true)
    })
    test("check any  html mesage.", ()=>{
        expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true)
        expect(wrapper.containsAnyMatchingElements([<div>Hello</div>,<div>Help programmer</div>])).toEqual(true)
    })

})
