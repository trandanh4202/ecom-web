import React, { useState } from 'react';

function Login2() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="Container">
      <div className={`SignUpContainer ${signIn ? 'signinIn1' : ''}`}>
        <div className="Form">
          <div className="Title">Create Account</div>
          <input className="Input" type="text" placeholder="Name" />
          <input className="Input" type="email" placeholder="Email" />
          <input className="Input" type="password" placeholder="Password" />
          <button className="Button">Sign Up</button>
        </div>
      </div>

      <div className={`SignInContainer  ${signIn ? 'signinIn2' : ''}`}>
        <div className="Form">
          <div className="Title">
            <h1>Sign in</h1>
          </div>
          <input className="Input" type="email" placeholder="Email" />
          <input className="Input" type="password" placeholder="Password" />
          <a className="Anchor" href="#">
            Forgot your password?
          </a>
          <button className="Button">Sign In</button>
        </div>
      </div>

      <div className={`OverlayContainer ${signIn ? 'signinIn3' : ''}`}>
        <div className={` Overlay ${signIn ? 'signinIn4' : ''}`}>
          <div className={` OverlayPanel LeftOverlayPanel ${signIn ? 'signinIn5' : ''}`}>
            <div className="Title">Welcome Back!</div>
            <p className="Paragraph">To keep connected with us please login with your personal info</p>
            <button className="GhostButton" onClick={() => setSignIn(false)}>
              Sign In
            </button>
          </div>

          <div className={`  OverlayPanel RightOverlayPanel ${signIn ? 'signinIn6' : ''}`}>
            <div className="Title">Hello, Friend!</div>
            <p className="Paragraph">Enter Your personal details and start journey with us</p>
            <button className="GhostButton" onClick={() => setSignIn(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
