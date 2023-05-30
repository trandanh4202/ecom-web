import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redic = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/profilelayout/Settings');
  }, []);
  return <div>Redic</div>;
};

export default Redic;
