import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

class Friends extends React.Component {

//  debugger
constructor(props) {
    super(props);
    this.state = {search: props.search};
    this.onSearchChange = this.onSearchChange.bind(this);
    this._filterTimeoutId = null;
}
// componentWillReceiveProps(nextProps, nextContext) {
//     this.setState({search: nextProps.search})
// }
onSearchChange(e) {
    let value = e.target.value;
    this.setState({ search: value})
    clearTimeout(this._filterTimeoutId)
    this._filterTimeoutId = setTimeout( () => {
        this.props.setFilter(value)
}, 100)
    console.log(e.target.value)
}
    render() {
        return (
            <div className={style.wrapper}>
                <div>
                    <input placeholder={"search"} 
                           value={this.state.search}
                           onChange={this.onSearchChange}/>
                </div>
                {
                    this.props.users
                        .filter( user => user.name.toLowerCase().indexOf(this.props.filter) > -1 )
                        .map( (user) => <Friend user={user} key={user.id} {...this.props}/> )
                }
            </div>         
    )}
    
}


export default Friends;
