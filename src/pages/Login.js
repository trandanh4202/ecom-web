import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section className="login-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-card p-5 bg-body d-flex flex-column align-items-center justify-content-center  ">
                <h2 className="fs-1 text-uppercase mb-3">Login</h2>
                <form action="" className="w-100" method="POST">
                  <div className="email-wrapper my-3 border border-1 rounded-3 ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email@example.com"
                      className="form-control fs-3 bg-body-tertiary"
                    />
                  </div>
                  <div className="password-wrapper border border-1 rounded-3">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control fs-3 bg-body-tertiary"
                    />
                  </div>
                  <div className="forgot-password">
                    <Link to="/ForgotPassword" className="text-primary fs-3 my-2">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <button
                      type="submit"
                      className="w-100 text-uppercase d-flex align-items-center justify-content-center "
                    >
                      Login
                    </button>
                    <Link to="/Register">
                      <p className="fs-3">Create Account</p>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
