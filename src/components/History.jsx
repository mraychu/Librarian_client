import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

//import WeatherDisplay from 'components/WeatherDisplay.jsx';
import HistoryList from 'components/HistoryList.jsx';

import './History.css';

class History extends React.Component {
    static propTypes = {
        historyLists: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.dispatch(getBook('Hsinchu', this.props.unit));
    //     this.props.dispatch(listPosts(this.props.searchText));
    // }
    //
    // componentWillUnmount() {
    //     if (this.props.weatherLoading) {
    //         cancelWeather();
    //     }
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.searchText !== this.props.searchText) {
    //         this.props.dispatch(listPosts(nextProps.searchText));
    //     }
    // }

    render() {
        // const {city, group, description, temp, unit, masking, posts, postLoading} = this.props;
        const historyLists = this.props.history.historyLists;
        // console.log(this.props);
        // console.log(historyLists);
        //document.body.className = `weather-bg ${group}`;

        // document.body.className = `weather-bg ${group}`;
        // document.querySelector('.weather-bg .mask').className = `mask ${masking ? 'masking' : ''}`;

        return (
            <div className='history'>
                <div className='historyList'>
                    <h4 className='label'>
                        <i className='fa fa-paper-plane' aria-hidden="true"></i>&nbsp;&nbsp;History:
                    </h4>
                    <HistoryList historyLists={historyLists}/>
                </div>
            </div>
        );

    }
}

export default connect(state => ({history: state.history}))(History);
