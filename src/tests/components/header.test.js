import React from 'react';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
// react-test-renderer


test('should render header corrctly', () => {
const wrapper = shallow(<Header />);
//expect(toJSON(wrapper)).toMatchSnapshot();   
expect(wrapper).toMatchSnapshot();  
});



/*
// snapshot of composant and advert any change, press u in console to save the new one
// sans enzyme simple shallowrenderer
test('should render header corrctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    console.log(renderer.getRenderOutput());
});
*/