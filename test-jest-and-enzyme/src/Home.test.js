import Home from './Home';
import { shallow } from 'enzyme';

describe('shallow',()=>{
    test('object check', () => {
    let wrapper= shallow(<Home />);
    console.log("wrapper",wrapper.debug())
    expect(wrapper.exists('.home')).toEqual(true);
    });
})