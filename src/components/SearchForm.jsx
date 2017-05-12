import React from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {connect} from 'react-redux';

import {input, toggleSearchType, selectSearchType} from 'states/search-actions.js';

import './SearchForm.css';

class SearchForm extends React.Component {
    static propTypes = {
        inputValue: PropTypes.string,
        searchTypeToggle: PropTypes.bool,
        searchType: PropTypes.string,
        defaultSearchType: PropTypes.string,
        submitAction: PropTypes.func,
        dispatch: PropTypes.func
    };

    static getSearchTypeString(searchType) {
        return searchType === 'isbn'
            ? 'ISBN'
            : 'Name';
    }

    constructor(props) {
        super(props);

        this.inputEl = null;

        //this.handleFormToggle = this.handleFormToggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameSearchType = this.handleNameSearchType.bind(this);
        this.handleISBNSearchType = this.handleISBNSearchType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchTypeToggle = this.handleSearchTypeToggle.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(selectSearchType(this.props.defaultType));
        console.log(this.props.defaultType);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchText !== this.props.searchText) {
            this.props.dispatch(input(nextProps.searchText));
        }
    }

    render() {
        const {inputValue, searchTypeToggle, searchType, searchText} = this.props;

        return (
            <div className={`search-form`}>
                <Form className='form-inline justify-content-center' onSubmit={this.handleSubmit}>
                    <Input type='text' name='input' getRef={el => {
                        this.inputEl = el
                    }} value={inputValue
                        ? inputValue
                        : ''} onChange={this.handleInputChange}></Input>&nbsp;
                    <ButtonDropdown type='buttom' isOpen={searchTypeToggle} toggle={this.handleSearchTypeToggle}>
                        <DropdownToggle type='button' caret color="secondary">
                            {SearchForm.getSearchTypeString(searchType)}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem type='button' onClick={this.handleNameSearchType}>Name</DropdownItem>
                            <DropdownItem type='button' onClick={this.handleISBNSearchType}>ISBN</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>&nbsp;
                    <Button color="info">Check</Button>
                </Form>

            </div>
        );
    }

    // handleFormToggle() {
    //     //this.props.dispatch(toggleForm());
    // }

    handleInputChange(e) {
        this.props.dispatch(input(e.target.value));
    }

    handleNameSearchType(e) {
        this.props.dispatch(selectSearchType('name'));
    }

    handleISBNSearchType(e) {
        this.props.dispatch(selectSearchType('isbn'));
    }

    handleSubmit(e) {
        e.preventDefault();

        this.inputEl.blur();
        const {inputValue, searchText, searchType, dispatch} = this.props;
        if (inputValue && inputValue.trim()) {
            dispatch(this.props.submitAction(inputValue, searchType));
            //this.handleFormToggle();
        } else {
            dispatch(input(searchText));
        }
    }

    handleSearchTypeToggle(e) {
        this.props.dispatch(toggleSearchType());
    }
}

export default connect(state => state.searchForm)(SearchForm);
