import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';



class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        //e.persist();
        this.setState({ description });
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // rexexp full number with 2 decimals only
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({ error: 'Please provide description or amount' })
        } else {
            this.setState({ error: '' });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(), //valueOf => moment method
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="form__error">{this.state.error}</p>}

                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        className="text-input" />

                    <input type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        className="text-input" />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea className="textarea"
                        placeholder="add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <div>
                    <button className="button" type="submit">Add Expense</button>
                    </div>
                    
                </form>
            </div>
        )
    };
};

export default ExpenseForm;

