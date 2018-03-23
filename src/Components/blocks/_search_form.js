import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SearchForm extends React.Component {
   
    state = {
        value: '',
        videos: []
    };
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    filter = (query="") => {
        if(!query) { 
            this.setState({ videos: this.props.videos.videos }); 
            return 
        }
        const selectedVideos = this.state.videos.filter( (video) => {
            console.log('selected video', video.what.includes(query))
            return video.what === query;
        })
        this.setState({
            videos: selectedVideos
        });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default connect(null, actions)(SearchForm);