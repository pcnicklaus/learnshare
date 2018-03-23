import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';
import './Share.css';


class Share extends Component {

    state = {
        title: '',
        name: '',
        description: '',
        videoURL: '',
        keywords: ''
    }

    isEnabled = this.state.title.length > 0 && this.state.videoURL.length > 0

    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        // console.log('ths.state in handle change', this.state)
    };

    async createNewVideo() {
        // const callup_id = this.props.params.id;
        const formData = { 
            title: this.state.title, 
            name: this.state.name, 
            description: this.state.description,
            videoURL: this.state.videoURL,
            keywords: this.state.keywords,
        };
    
        const callback = async () => {
        //   await this.props.fetchVideos;
          const newState = {title: '', name:'',  description: '', videoURL: '', keywords: '' };
          await this.setState(newState);
          console.log('this.props callback', this.props)
          await this.props.router.push('/');
        }
        console.log(this.props);
        await this.props.createShare(formData, callback);
        // await this.props.history.push('/');

    }


    render() {
        return (
        <div className="shareContainer">

            <div className="shareForm">

                <div className="shareForm__content">

                    <div className="shareForm__title">
                        <h1>New Share</h1>
                        {/* <p></p> */}
                    </div>
                    
                    <div className="shareForm__body">

                        <div className="shareForm__body__container">
                            <fieldset className='shareForm__fieldset'>
                                <div className="shareForm__explanation">
                                    <label className="shareForm__label">title</label>
                                    <p>what's a good, descriptive title?</p>
                                </div>
                                <input id='formTitle' className='shareForm__input' name='title' type='text' required onChange={this.handleChange} value={this.state.title} />
                            </fieldset>
                        </div>
                        <div className="shareForm__body__container">
                            <fieldset className='shareForm__fieldset'>
                                <div className="shareForm__explanation">
                                    <label className="shareForm__label">name</label>

                                    <p>what'dya want us to call you?</p>
                                </div>
        
                                <input id='formName' className='shareForm__input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
                            </fieldset>
                        </div>
                        <div className="shareForm__body__container">
                            <fieldset className='shareForm__fieldset'>
                                
                                <div className="shareForm__explanation">
                                    <label className="shareForm__label">video url</label>
                                    <div className="shareForm__video__box">
                                        <p>1) record a  
                                            <a href="https://record-a-soarless.herokuapp.com/home.html" target="_blank">
                                                video
                                            </a>.
                                        </p>
                                        <p>2) upload it to<a href="https://www.youtube.com/upload?redirect_to_classic=true">youtube</a>. 
                                        </p>
                                        <p>3) Paste the url in here!</p>
                                    </div>
                                    
                                </div>
                                
                                <input id='formVideoURL' className='shareForm__input' name='videoURL' type='text'  onChange={this.handleChange} value={this.state.videoURL} />
                            </fieldset>
                        </div>                    

                        <div className="shareForm__body__container">
                            <fieldset className='shareForm__fieldset'>
                                <div className="shareForm__explanation">
                                    <label className="shareForm__label">keywords</label>
                                    <p>what are some keywords that people could search for to find your share?</p>
                                </div>
                                <input id='formKeywords' className='shareForm__input' name='keywords' type='text'  onChange={this.handleChange} value={this.state.keywords} />
                            </fieldset>
                        </div>

                        <div className="shareForm__body__container">
                            <fieldset className='shareForm__fieldset'>
                                
                                <div className="shareForm__explanation">
                                    <label className="shareForm__label">description</label>
                                    <p>how would you describe / what is your share going to be about? </p>
                                </div>
                                <textarea id='formDescription' className='shareForm__input' rows="4" name='description' type='textarea'  onChange={this.handleChange} value={this.state.description} />
                            </fieldset>
                        </div>
                        
                        <div className="shareForm__buttons">
                            <button
                                type="button"
                                className="button__cancel"
                                onClick={ () => { 
                                    this.setState({
                                        title: '',
                                        name: '',
                                        description: '',
                                        videoURL: '',
                                        keywords: ''
                                    })
                                    this.props.router.push('/') } }
                                
                            >
                                <p>Cancel</p>
                            
                            </button>
                            
                            <button
                                type="button"
                                className="button__submit"
                                disabled={ !this.isEnabled }
                                onClick={ () => this.createNewVideo() }
                            >
                                <p>Create</p>
                            </button>
                        </div>
                        
                    
                    </div>
                </div>

            </div>
            
        </div>
        )
    }

}

export default connect(null, actions)(Share)

{/* <a href="https://ctrlq.org/images/" target="_blank">
here
</a>. After that, you'll need to load it to youtube. They'll give you the embed URL and just paste that in right here!!! Sorry for all the steps but we hope to be able to host them ourselves soon!</p> */}
// class Share extends Component {

    // handleFormSubmit = (formData) => {
    //     console.log('formData', formData)
    //     const { resetForm } = this.props;
    //     this.props.createShare(formData, () => { this.props.history.push('/') });
    // }

    // renderField(configObject, field) {
    //     //there's one field helper per field. it has all the good stuff
    //     const fieldHelper = this.props.fields[field]
    
    //     return (
    //       <fieldset className={`form-group ${configObject.class} ${ fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`} key={ configObject.label }>
    //         <label>{ configObject.label }</label>
    //         <configObject.type type={ field.type } className="form-control" {...fieldHelper} />
    //         <div className="text-help">
    //           { fieldHelper.touched ? fieldHelper.error : '' }
    //         </div>
    //       </fieldset>
    //     )
    // }

//     render() {

//         return (
//             <div>
//                 <ShareForm onSubmit={ this.handleFormSubmit } />
//             </div>
//         )
        
//     }
// }

// <form
//                     className="shareForm"
//                     onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }
//                 >
//                     <div className="shareForm__container">
//                         { _.map(FORM_FIELDS, this.renderField.bind(this)) }
                        
//                         <div className="shareForm__container__buttons">
//                             <button action="submit" className="btn pull-right" style={{ backgroundColor: '#FF9632', color: '#fff' }}>Call Up</button>
//                         </div>
//                     </div>
//                 </form>

// function validate(values) {
//     const errors = {};
  
//     _.map(FORM_FIELDS, (field, value) => {
//       if(!values[value]) {
//         errors[value] = `enter a ${value}`
//       }
//     })
  
//     return errors;
// } 
// export default connect(null, actions)(Share);

// export default reduxForm({
//     form: 'shareForm',
//     fields: _.keys(FORM_FIELDS),
//     validate
// }, null, actions)(Share);
  