import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <section className="forgotpassword-wrapper py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="forgotpassword-card p-5 bg-body d-flex flex-column align-items-center justify-content-center  ">
              <h2 className="fs-1 text-uppercase mb-3">Forgot Password</h2>
              <form action="" className="w-100" method="POST">
                <div className="email-wrapper my-3 border border-1 rounded-3 bg-secondary">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email@example.com"
                    className="form-control fs-3 secondary bg-body-tertiary"
                  />
                </div>

                <div className="d-flex align-items-center justify-content-center flex-column">
                  <button
                    type="submit"
                    className="w-100 my-3 text-uppercase d-flex align-items-center justify-content-center "
                  >
                    Submit
                  </button>
                  <Link to="/Login">
                    <p className="fs-3">Cancel</p>
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

export default ForgotPassword;
