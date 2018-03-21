import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import './Learn.css';

class Learn extends Component {

    async componentDidMount() {
        await this.props.fetchVideos();
        console.log('this.props', this.props)
    }
    render() {

        return (
            <section className="learn">
                howdy learn
            </section>
        )
        
    }
}


function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps, actions)(Learn);