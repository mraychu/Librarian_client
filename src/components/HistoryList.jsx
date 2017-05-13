import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from 'reactstrap';

import HistoryItem from 'components/HistoryItem.jsx';
// import {createVote} from 'api/posts.js';

import './HistoryList.css';

export default class HistoryList extends React.Component {
    static propTypes = {
        historyLists: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {historyLists} = this.props;
        // console.log('hi');
        // console.log(this.props);
        // console.log(historyLists);
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No Searching History.<br/>Try searching something!</div>
            </ListGroupItem>
        );
        if (historyLists.length) {
            children = historyLists.map(p => (
                <ListGroupItem key={p.searchText} action>
                    <SearchItem {...p}/>
                </ListGroupItem>
            ));
        }

        return (
            <div className='history-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}
