import { addExpense, removeExpense, editExpense } from '../../actions/expensesActions';

test('should setup remove expense action', () => {
const action = removeExpense({id: '123abc'});
expect(action).toEqual({ //toEqual compare objects and arr
    type: 'REMOVE_EXPENSE',
    id: '123abc'
})
});

test('should setup edit expense action', () => {
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
});


test('should setup add expense action with adding some values', () => {
    const expenseData = {
        description: 'rent',
        note: 'this was last month rent',
        amount: 125500,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should setup add expense action with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            note: '',
            description: '',
            amount: 0,
            createdAt: 0,

        }
    })
})