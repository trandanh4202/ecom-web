import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="register-wrapper py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="register-card p-5 bg-body d-flex flex-column align-items-center justify-content-center  ">
              <h2 className="fs-1 text-uppercase mb-3">Forgot Password</h2>
              <form action="" className="w-100" method="POST">
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control fs-3 bg-body-tertiary"
                  />
                </div>
                <div className="password-wrapper border border-1 rounded-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm password"
                    className="form-control fs-3 bg-body-tertiary"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <button
                    type="submit"
                    className="w-100 my-3 text-uppercase d-flex align-items-center justify-content-center "
                  >
                    Register
                  </button>
                  <Link to="/Login">
                    <p className="fs-3">I have a account</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
