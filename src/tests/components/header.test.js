import React from 'react';
import { Header } from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
// react-test-renderer


test('should render header corrctly', () => {
const wrapper = shallow(<Header startLogout={ () => {} }/>);
//expect(toJSON(wrapper)).toMatchSnapshot();   
expect(wrapper).toMatchSnapshot();  
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
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