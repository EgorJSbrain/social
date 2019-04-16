import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import style from './User.module.css'

let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className={style.input_block}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <Field name="fullName" component="input" type="text" className={style.input_user}/>
            </div>
            <div>
                <label htmlFor="aboutMe">About Me</label>
                <Field name="aboutMe" component="input" type="text" className={style.input_user}/>
            </div>
            <div>
                <label htmlFor="vk">VK</label>
                <Field name="vk" component="input" type="email" className={style.input_user}/>
            </div>
            <div>
                <label htmlFor="github">GitHUB</label>
                <Field name="github" component="input" type="email" className={style.input_user}/>
            </div>
            <button type="submit">Submit</button>

        </form>

    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

const mapStateToProps = (state) => {
    return {
        initialValues: state.profilePage.profile
    }
}

ContactForm = connect(mapStateToProps, null)(ContactForm) 
export default ContactForm;