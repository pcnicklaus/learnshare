import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import * as actions from '../actions';

import SearchForm from '../Components/blocks/_search_form';
import SearchIcon from '../assets/icons/search';
import './Learn.css';


class Learn extends Component {

    state = {
        value: ''
    };

    async componentDidMount() {
        await this.props.fetchVideos();
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.filterVideos(this.state.value)
    }

    filter = (query="") => {
        console.log("in filter", query)
        if(!query) {
            console.log('in !query')
            this.setState({ videos: this.props.videos.videos });
            return
        }
        const selectedVideos = this.state.videos.filter( (video) => {
            console.log('selected video', video.what, typeof video.what)
            return video.what === query;
        })
        this.setState({
            videos: selectedVideos
        });
    }

    renderVideos() {
        const videos = this.props.videos.videos;

        return videos.map((vid) => {
            return (
                <div className="video__box" key={ vid._id }>
                    <div className="video__wrapper">
                        <ReactPlayer
                            url={ vid.videoURL } className="video__player"
                            width="100%"
                            height="100%"

                        />
                        <div className="video__wrapper__content">
                            <h2 className="video__wrapper__content__title">{ vid.title }
                                <span className="video__wrapper__content__title__by">by </span>
                                author to come
                            </h2>
                            <p className="video__wrapper__content__description">description to come</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {

        if (!this.props.videos.videos) { return <div>loading</div> }
        console.log('videos in render', this.props, this.state)

        return (
            <section className="learn">

                <div className="learn__title">
                    <h1>learn</h1>

                    <div className="learn__controls">
                        <form className="learn__controls__search-form" onSubmit={this.handleSubmit}>
                            {/* <label className="learn__controls__search-form__label">
                                Search: */}
                                <input
                                    type="text"
                                    value={ this.state.value } onChange={ this.handleChange }
                                    className="learn__controls__search-form__label__input"
                                />
                            {/* </label> */}
                            <input className="learn__controls__search-form__submit-button" type="submit" value=""/>
                        </form>
                    </div>
                </div>



                <div className="learn__container">
                    { this.renderVideos() }
                </div>
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
