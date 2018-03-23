import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-3';

import * as actions from '../actions';
import './Landing.css';

class Landing extends Component {


    render() {
        console.log('this.props', this.props)
        return (
            <div className="landing">
                <section className="landing__header">
                    <div className="landing__header__content">
                        <h1 className="landing__header__content__learn">learn / share </h1>
                        <h1 className="landing__header__content__tobe">what it's like to be</h1>
                        <div className="landing__header__content__animation">
                            <h1 className="landing__header__content__animation__nurse">a nurse</h1>
                            <h1 className="landing__header__content__animation__bipolar">bipolar</h1>
                            <h1 className="landing__header__content__animation__brother">an older brother</h1>
                            <h1 className="landing__header__content__animation__ceo">a ceo</h1>
                            <h1 className="landing__header__content__animation__unfulfilled">unfulfilled</h1>
                            <h1 className="landing__header__content__animation__powerful">powerful</h1>
                            <h1 className="landing__header__content__animation__you">you</h1>
                        </div>

                        <div className="landing__header__content__buttons">
                            <Link className="landing__header__button__learn" to={'learn'}>
                                <p>learn</p>
                            </Link>
                            <Link className="landing__header__button__share" to={'share'}>
                                <p>share</p>
                            </Link>
                        </div>
                    </div>
                    <div className="background-video">
                  
                        <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" className="background-video__landing" playsInline autoPlay muted loop>
                           
                            <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm" />>
                            <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4" />>
                        </video>
                    </div>
                </section>

                <section className="landing__content">
                    <div className="landing__content__why">
                        <div className="landing__content__why__title">
                            <h2>our purpose</h2>
                        </div>
                        <div className="landing__content__why__body">
                            <ul className="landing__content__why__body__list">
                                <li className="landing__content__why__body__list-item">
                                    encourage openness
                                </li>
                                <li className="landing__content__why__body__list-item">
                                    celebrate honesty
                                </li>
                                <li className="landing__content__why__body__list-item">
                                    build empathy & understanding
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }

}
{/* <video className="background-video__content">
<source src="videos/Triple_Date.mp4" type="video/mp4" />
<source src="videos/Triple_Date.webm" type="video/webm" />
Your browser is not supported!
</video> */}

function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps, actions)(Landing);