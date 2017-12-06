import React from 'react';
import  ExpenseListItem from '../../components/ExpenseListitem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expenses fixtures', () => {
const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>); 
expect(wrapper).toMatchSnapshot();  
});