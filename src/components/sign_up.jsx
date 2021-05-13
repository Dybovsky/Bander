import React, { useState } from "react";
import firebase from 'firebase/app'

const SignUp = (props) => {
    const createUser = (e, email, password) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('')

    // const [displayName, setdisplayName] = useState('')
    const onChangeHandler = (e) => {
        const { name, value } = e.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
        else if (name === 'userPasswordConf') {
            setConfirmPassword(value);
        }
        else if (name === 'userFLname') {
            const newFL = JSON.stringify(value);
            localStorage.setItem('userFLname', newFL);
        }
    };

    const onVerifyNewPassword = () => {
        if (password !== confirmpassword) {
            alert("Passwords don't much")
            return
        }
    }

    return (
        <>
            <form id="firebaseui-auth-container">
                <div className="col-sm-8 xyz text-center" id="modal_div2" onClick={e => e.stopPropagation()}>
                    <button type="button" onClick={props.onClose} className="close" aria-label="Close" >
                        <span aria-hidden="true" >&times;</span>
                    </button>
                    <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
                    <h2 className="account-text">Create Your Account</h2>
                    <h4 className="account-description">Signup to create, discover and connect with the artists community</h4>
                    <label className="in" >E-mail</label>
                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" name="userEmail" placeholder="Enter e-mail" onChange={(e) => onChangeHandler(e)}></input>
                    <label className="in">Password</label>
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password" name="userPassword" onChange={(e) => onChangeHandler(e)}  ></input>
                    <label className="in">Confirm the password</label>
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Confirm Password" name="userPasswordConf" onChange={(e) => onChangeHandler(e)} onBlur={onVerifyNewPassword}></input>
                    <label className="in">First and last name</label>
                    <input type="text" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="first and last name" onChange={(e) => onChangeHandler(e)} name="userFLname"></input>          
                    <button disabled={password !== confirmpassword} type="submit" className="btn btn-primary btn-block" onClick={(e) => { createUser(e, email, password) }}>Sign Up</button>
                </div>
            </form>
        </>
    );
}

export default SignUp;