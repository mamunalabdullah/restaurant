import React from 'react';
import './Login.css';
import logo2 from '../../images/logo2.png';
import auth from '../../Firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    // google authenthication //////////////////////////////////
    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    ///////////////////////////////////////////////////////////////
    
    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <img src={logo2} alt="" className='w-25'/>
                <form>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='text' name='email' id='email' placeholder='Enter your email' />
                        </div>
                        {/* {email.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {email.error}
                            </p>
                        )} */}
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                // onBlur={handlePassword}
                                name='password'
                                id='password'
                                placeholder='Enter your password'
                            />
                        </div>
                            {/* {password.error && (
                            <p className='error'>
                                <AiOutlineExclamationCircle /> {password.error}
                            </p>
                            )} */}
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to restaurant?{" "}
                    <span>Create New Account</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleGoogle}>
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;