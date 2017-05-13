import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'reactstrap';
import {connect} from 'react-redux';
import moment from 'moment';

//import {getMoodIcon} from 'utilities/weather.js';
//import {createVote, setTooltipToggle, toggleTooltip} from 'states/post-actions.js';

import './SearchItem.css';

export default class PostItem extends React.Component {
    static propTypes = {
        // id: PropTypes.string,
        // mood: PropTypes.string,
        // text: PropTypes.string,
        // clearVotes: PropTypes.number,
        // cloudsVotes: PropTypes.number,
        // drizzleVotes: PropTypes.number,
        // rainVotes: PropTypes.number,
        // thunderVotes: PropTypes.number,
        // snowVotes: PropTypes.number,
        // windyVotes: PropTypes.number,
        // tooltipOpen: PropTypes.bool,
        dispatch: PropTypes.func,
        bookName: PropTypes.string,
        author: PropTypes.string,
        location: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    render() {
        const {bookName, author, location, status} = this.props;

        return (
            <div className='post-item d-flex flex-column' onClick={this.handleClick}>
                <div className='post d-flex'>
                    <div className='wrap'>
                        <div className='bookName'>Name: {bookName}</div>
                        <div className='author'>Author: {author}</div>
                        <div className='location'>Location: {location}</div>
                        <div className='status'>Status: {status}</div>
                    </div>
                </div>
            </div>
        );
    }

    handleClick() {
        //this.props.dispatch(setTooltipToggle(this.props.id, true));
    }

    handleTooltipToggle() {
        //this.props.dispatch(toggleTooltip(this.props.id));
    }

    handleVote(vote) {
        // this.props.dispatch(createVote(this.props.id, vote));
        // this.props.dispatch(setTooltipToggle(this.props.id, false));
    }
}
//
// export default connect((state, ownProps) => ({
//     tooltipOpen: state.postItem.tooltipOpen[ownProps.id]
//         ? true
//         : false
// }))(PostItem);
