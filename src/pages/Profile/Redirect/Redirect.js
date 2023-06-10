import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/profilelayout/Settings');
  }, []);
  return <div>Redirect</div>;
};

export default Redirect;
