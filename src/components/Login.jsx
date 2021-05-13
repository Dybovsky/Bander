import React, { useState } from "react";
import firebase from 'firebase/app'

// const ui = firebaseui.auth.AuthUI(firebase.auth())
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signinUser = (e, email, password) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Signed in successfully")
                //   const user = userCredential.user;
            })
            .catch((error) => {
                alert(error.message)
                //   let errorCode = error.code;
                //   let errorMessage = error.message;
            });
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <>
            <form id="firebaseui-auth-container">
                <div className="col-sm-4 text-center abc" id="modal_div1" onClick={e => e.stopPropagation()}>
                    {/* <!-- Default form login --> */} 
                    <p className="h4 mb-4 text-left">Login to continue</p>
                    <p className="text-left">Signin to create, discover and connect with the artists community</p>
                    {/* <!-- Email -->  */}
                    <label className="in">Username</label>
                    <input type="email" id="defaultLoginFormEmail" name="userEmail" className="form-control mb-4" placeholder="Enter Username" onChange={(e) => onChangeHandler(e)}></input>
                    {/* <!-- Password --> */}
                    <label className="in">Password</label>
                    <input type="password" id="defaultLoginFormPassword" name="userPassword" className="form-control mb-4" placeholder="Enter Password" onChange={(e) => onChangeHandler(e)}></input>
                    {/* <div className="d-flex justify-content-left">
                     <div>
                            <div className="custom-control custom-checkbox text-left">
                                <input type="checkbox" className="custom-control-input"> </input>  
                                <label className="custom-control-label">Remember me</label> 
                            </div>
                        </div> 
                    </div>
            
                    <button className="btn btn-info btn-block my" type="submit">Forgot Password?</button> */}
                    <button type="submit" className="btn btn-info btn-block" onClick={(e) => { signinUser(e, email, password) }}>LOGIN</button>
                </div>
            </form>
        </>
    );
}

export default Login;