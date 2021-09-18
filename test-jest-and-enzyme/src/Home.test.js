import Home from './Home';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('shallow',()=>{
    test('object check', () => {
    let wrapper= shallow(<Home />);
    console.log("wrapper",wrapper.debug())
    expect(wrapper.exists('.home')).toEqual(true);
    });
})