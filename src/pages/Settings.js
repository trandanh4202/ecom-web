import React from 'react';

const Settings = () => {
  return (
    <>
      <div className="col-9">
        <div className="w-100 bg-body rounded-4 p-4 shadow infor-sidebar d-flex justify-content-center align-items-center flex-column">
          <h1>Hello, Sir</h1>
          <form action="" method="" className="d-flex justify-content-center align-items-center flex-column w-100">
            <div className=" name-wrapper border border-1 rounded-3 w-50">
              <input
                type="text"
                name="name"
                // placeholder="Your Name"
                id=""
                value={'example'}
                className="form-control fs-3 bg-body-tertiary"
              />
            </div>
            <div className=" email-wrapper my-3 border border-1 rounded-3 w-50 ">
              <input
                type="email"
                name="email"
                // placeholder="Email@example.com"
                value={'example@gmail.com'}
                className="form-control fs-3 bg-body-tertiary"
              />
            </div>
            <div className=" tel-wrapper border border-1 rounded-3 w-50">
              <input
                type="tel"
                name="tel"
                // placeholder="Your Phone number"
                value={'example'}
                id=""
                disabled
                className="form-control fs-3 bg-body-tertiary"
              />
            </div>
            <div className=" password-wrapper my-3 border border-1 rounded-3 w-50">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control fs-3 bg-body-tertiary"
              />
            </div>
            <div className="w-100 d-flex align-items-center justify-content-center flex-column">
              <button
                type="submit"
                className="round-black-btn w-50 my-3 text-uppercase d-flex align-items-center justify-content-center "
              >
                Update Profile
              </button>
            </div>
            {/* <div className=" password-wrapper border border-1 rounded-3 w-75">
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirm password"
                      className="form-control fs-3 bg-body-tertiary"
                    />
                  </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
