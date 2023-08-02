import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Login2() {
  const [signIn, setSignIn] = useState(false);
  useEffect(() => {
    // Lấy URL hiện tại
    const currentUrl = window.location.pathname;

    // Kiểm tra xem URL có chứa '/login' hay '/register' không và cập nhật trạng thái signIn tương ứng
    if (currentUrl.includes('/login')) {
      setSignIn(false);
    } else if (currentUrl.includes('/register')) {
      setSignIn(true);
    }
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConFirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="auth-container">
      <div className={`SignUpContainer ${signIn ? 'signinIn' : ''}`}>
        <form action="" className="form" method="POST">
          <div className="name-wrapper border border-1 rounded-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
              className="form-control fs-3 bg-body-tertiary"
            />
          </div>
          <div className="email-wrapper my-3 border border-1 rounded-3 ">
            <input
              type="email"
              name="email"
              placeholder="Email@example.com"
              className="form-control fs-3 bg-body-tertiary"
            />
          </div>
          <div className="tel-wrapper border border-1 rounded-3">
            <input
              type="tel"
              name="tel"
              placeholder="Your Phone number"
              id=""
              className="form-control fs-3 bg-body-tertiary"
            />
          </div>
          <div className="password-wrapper my-3 border border-1 rounded-3">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control fs-3 bg-body-tertiary"
              value={password}
            />
            <span className="password-toggle-icon" onClick={handleTogglePassword}>
              <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
            </span>
          </div>
          <div className="password-wrapper border border-1 rounded-3">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control fs-3 bg-body-tertiary"
              value={confirmPassword}
            />
            <span className="password-toggle-icon" onClick={handleToggleConFirmPassword}>
              <i className={showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
            </span>
          </div>
          {/* <div className="d-flex w-100 align-items-center justify-content-center flex-column"> */}
          <button type="submit" className="Button w-100 mt-3 ">
            Register
          </button>
          {/* </div> */}
        </form>
      </div>

      <div className={`SignInContainer  ${signIn ? 'signinIn' : ''}`}>
        <div className="form">
          <div className="Title">
            <h1>Sign in</h1>
          </div>
          <div className="email-wrapper my-3 border border-1 rounded-3 ">
            <input
              type="email"
              name="email"
              placeholder="Email@example.com"
              className="form-control fs-3 bg-body-tertiary"
            />
          </div>
          <div className="password-wrapper my-3 border border-1 rounded-3 ">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control fs-3 bg-body-tertiary"
              value={password}
            />
            <span className="password-toggle-icon" onClick={handleTogglePassword}>
              <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
            </span>
          </div>
          <Link className="Anchor" to="/forgotpassword">
            Forgot your password?
          </Link>
          <button className="Button">Sign In</button>
        </div>
      </div>

      <div className={`OverlayContainer ${signIn ? 'signinIn' : ''}`}>
        <div className={` Overlay ${signIn ? 'signinIn' : ''}`}>
          <div className={` OverlayPanel LeftOverlayPanel ${signIn ? 'signinIn' : ''}`}>
            <div className="Title">Welcome Back!</div>
            <p className="Paragraph">To keep connected with us please login with your personal info</p>
            <button className="GhostButton" onClick={() => setSignIn(false)}>
              <Link to="/login">Sign In</Link>
            </button>
          </div>

          <div className={`  OverlayPanel RightOverlayPanel ${signIn ? 'signinIn' : ''}`}>
            <div className="Title">Hello, Friend!</div>
            <p className="Paragraph">Enter Your personal details and start journey with us</p>
            <button className="GhostButton" onClick={() => setSignIn(true)}>
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
