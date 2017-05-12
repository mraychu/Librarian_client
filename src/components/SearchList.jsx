import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from 'reactstrap';

import SearchItem from 'components/SearchItem.jsx';
// import {createVote} from 'api/posts.js';

import './SearchList.css';

export default class PostList extends React.Component {
    static propTypes = {
        lists: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {lists, hasSearched} = this.props;

        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                {hasSearched && <div className='empty-text'>No Result.<br/>Try another searchText.</div>}
                {!hasSearched && <div className='empty-text'>Try to search something!</div>}
            </ListGroupItem>
        );
        if (lists.length) {
            children = lists.map(p => (
                <ListGroupItem key={p.bookName} action>
                    <SearchItem {...p}/>
                </ListGroupItem>
            ));
        }

        return (
            <div className='post-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}