import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import './_share_form.css';

const required = value => (value ? undefined : 'Required')

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength30 = maxLength(30)

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const ShareForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="shareForm">

        <form onSubmit={handleSubmit}>
        <Field
            name="name"
            type="text"
            component={renderField}
            label="What\'s your name?"
            validate={[required, maxLength30, minLength2]}
            
        />
        <Field
            name="title"
            type="text"
            component={renderField}
            label="What's a title for your share?"
            validate={required}
            
        />
        <Field
            name="description"
            type="text"
            component={renderField}
            label="What's a description for your share?"
            validate={required}
            
        />
        <Field
            name="keywords"
            type="text"
            component={renderField}
            label="What are some related keyword people can use to find your share?"
            validate={required}
        />
        <div>
            <button type="submit" disabled={submitting}>
            Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
            </button>
        </div>
        </form>
    </div>
  )
}

export default reduxForm({
  form: 'shareForm' // a unique identifier for this form
})(ShareForm)