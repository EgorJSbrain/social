import React from 'react'
import ContactForm from './UserWithReduxForm';
import { connect } from 'react-redux';
import { setProfile } from '../../BLL/ProfileReducer';



class ContactPage extends React.Component {
    
    submit = values => {
      this.props.setProfile(values)
  }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile(profile) {
      dispatch(setProfile(profile))
    }
  }
}

export default connect(null, mapDispatchToProps)(ContactPage);