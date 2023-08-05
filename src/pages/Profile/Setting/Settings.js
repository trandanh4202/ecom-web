import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getProfile, putProfile } from '~/features/auth/authSlice';

const Settings = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.auth?.profile)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  const updateProfile = (e) => {
    e.preventDefault();
    const profileData = {
      name: name, phone: phone, currentPassword: currentPassword, newPassword: password, confirmNewPassword: confirmPassword
    };
    console.log(profileData)
    dispatch(putProfile(profileData));
    // window.location.reload();
  }
  useEffect(() => {
    if (profile?.message && profile?.data) {
      toast.success(profile?.message);
    } else if (profile?.message && (profile?.data === null)) {
      toast.error(profile?.message);
    }
  }, [profile])
  return (
    <>
      <div className="col-9">
        <div className="w-100 bg-body rounded-4 p-4 shadow infor-sidebar d-flex justify-content-center align-items-center flex-column">
          <h1>Hello, {profile?.name}</h1>
          <div className="form d-flex justify-content-center align-items-center flex-column w-100">
            <div className=" name-wrapper border border-1 rounded-3">
              <input
                type="text"
                name="name"
                placeholder={`${profile?.name}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                required
              />
            </div>
            <div className=" email-wrapper my-3 border border-1 rounded-3  ">
              <input
                type="email"
                name="email"
                // placeholder={`${profile?.email}`}
                value={profile?.email}
                // onChange={(e) => setEmail(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"

              />
            </div>
            <div className=" tel-wrapper my-3 border border-1 rounded-3  ">
              <input
                type="tel"
                name="phone"
                placeholder={`${profile?.phoneNumber}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                required

              />
            </div>
            <div className=" password-wrapper my-3 border border-1 rounded-3 ">
              <input
                type="password"
                name="currentPassword"
                placeholder={`currentPassword`}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                required

              />
            </div>
            <div className=" password-wrapper my-3 border border-1 rounded-3 ">
              <input
                type="password"
                name="password"
                placeholder={`new password`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                required

              />
            </div>
            <div className=" password-wrapper my-3 border border-1 rounded-3 ">
              <input
                type="password"
                name="password"
                placeholder={`confirm password`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control fs-3 bg-body-tertiary"
                required

              />
            </div>
            <div className="w-100 d-flex align-items-center justify-content-center flex-column">
              <button
                type="submit"
                className="round-black-btn w-75  my-3 text-uppercase d-flex align-items-center justify-content-center "
                onClick={(event) => updateProfile(event)}
              >
                Update Profile
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
