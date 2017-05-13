import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'reactstrap';
import {connect} from 'react-redux';
import moment from 'moment';

//import {getMoodIcon} from 'utilities/weather.js';
//import {createVote, setTooltipToggle, toggleTooltip} from 'states/post-actions.js';

import './HistoryItem.css';

export default class HistoryItem extends React.Component {
    static propTypes = {

        dispatch: PropTypes.func,
        searchText: PropTypes.string,
        searchType: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    render() {
        const {searchText, searchType} = this.props;

        return (
            <div className='history-item d-flex flex-column' onClick={this.handleClick}>
                <div className='history d-flex'>
                    <div className='wrap'>
                        <div className='searchText'>SearchText: {searchText}</div>
                        <div className='searchType'>SearchType: {searchType}</div>
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
