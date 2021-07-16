import React, {useState} from 'react'
import { connect } from 'react-redux';
import {login} from '../actions/authActions';
import {Redirect}  from 'react-router-dom';

 function Login(props) {
     const [credentials, setCredentials] = useState({email:"", password:""});

function handleOnChange(event) {
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
    });
}
function handleSubmit() {
    props.login(credentials.email, credentials.password)
}

if (props.auth.isLoaded === false ) {
    return <h1>Loading...</h1>;
 }
 if (props.auth.isEmpty === false){
      return <Redirect  path= "/"  />; 
 }

    return (
        <div className="frm">
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email } onChange= {handleOnChange}  />
                </div><br></br>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password }  onChange= {handleOnChange} />
                </div><br></br>
                <div>
                   <button type="button" className="btn" onClick={handleSubmit}>
                      Login
                    </button>
                </div>
            </form>
            
        </div>
    )
}
const mapDispatchToProps = { login };
const mapStateToProps =(state) =>{
    return {
        auth:state.firebaseState.auth,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( Login);
