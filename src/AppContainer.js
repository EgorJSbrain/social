import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { me } from './BLL/AuthReducer';

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.me()
    }
    render() {
        return <App {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
        isLogin: state.login.isLogin,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        me: () => {
            dispatch(me())
        }
    }
}

const ContainerApp = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default ContainerApp;