import About from './About'
import {shallow} from 'enzyme';

describe('if About component is render.',()=>{
    test("class check", ()=>{
        let wrapper=shallow(<About />)
    })
})
