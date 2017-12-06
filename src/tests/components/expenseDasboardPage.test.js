import React from 'react';
import ExpenseDashboardPage from '../../components/expenseDashboardPage';
import { shallow } from 'enzyme';



test('should render ExpenseDashboardPage corrctly', () => {
const wrapper = shallow(<ExpenseDashboardPage />); 
expect(wrapper).toMatchSnapshot();  
});
