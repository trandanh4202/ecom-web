import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Toast from '~/components/ToastMessage/Toast';
import { login, registerUser } from '~/features/auth/authSlice';

function Login2() {
  const [signIn, setSignIn] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  // const [message, setMessage] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const account = useSelector((state) => state.auth?.account);
  const register = useSelector((state) => state.auth?.register);
  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (currentUrl.includes('/login')) {
      setSignIn(false);
    } else if (currentUrl.includes('/register')) {
      setSignIn(true);
    }
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (account?.token) {
      navigate('/');
    }
  }, [account, navigate]);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConFirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  useEffect(() => {
    if (register.message) {
      toast.success(register.message);
    }
  }, [register])
  const handleLogin = () => {
    dispatch(login({ email: emailRef.current.value, password: passwordRef.current.value }));
  }
  const handleRegister = async () => {
    try {
      await dispatch(registerUser({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
      }));
      nameRef.current.value = '';
      phoneRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    } catch (error) {
      toast.error('Đã có lỗi xảy ra khi đăng ký!');
    }
  };

  return (
    <>

      <div className="auth-container">

        <div className={`SignUpContainer ${signIn ? 'signinIn' : ''}`}>
          <div className="form" >
            <div className="name-wrapper border border-1 rounded-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id=""
                className="form-control fs-3 bg-body-tertiary"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                ref={nameRef}

              />
            </div>
            <div className="email-wrapper my-3 border border-1 rounded-3 ">
              <input
                type="email"
                name="email"
                placeholder="Email@example.com"
                className="form-control fs-3 bg-body-tertiary"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}

              />
            </div>
            <div className="tel-wrapper border border-1 rounded-3">
              <input
                type="tel"
                name="tel"
                placeholder="Your Phone number"
                id=""
                className="form-control fs-3 bg-body-tertiary"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                ref={phoneRef}

              />
            </div>
            <div className="password-wrapper my-3 border border-1 rounded-3">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                // value={password}
                ref={passwordRef}

              />
              <span className="password-toggle-icon" onClick={handleTogglePassword}>
                <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
              </span>
            </div>
            <div className="password-wrapper border border-1 rounded-3">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                // onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                // value={confirmPassword}
                ref={confirmPasswordRef}

              />
              <span className="password-toggle-icon" onClick={handleToggleConFirmPassword}>
                <i className={showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
              </span>
            </div>
            {/* <div className="d-flex w-100 align-items-center justify-content-center flex-column"> */}
            <button type="submit" className="Button w-100 mt-3  "
              onClick={handleRegister}
            >
              Register
            </button>
            {/* <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            /> */}
            {/* </div> */}
          </div>
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
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}

              />
            </div>
            <div className="password-wrapper my-3 border border-1 rounded-3 ">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                // value={password}
                ref={passwordRef}

              />
              <span className="password-toggle-icon" onClick={handleTogglePassword}>
                <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
              </span>
            </div>
            <Link className="Anchor" to="/forgotpassword">
              Forgot your password?
            </Link>
            <button className="Button" onClick={handleLogin} >Sign In</button>
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
    </>
  );
}

export default Login2;
