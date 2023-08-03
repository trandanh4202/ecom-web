import React from 'react'

const Toast = ({ message }) => {
    return (
        <div className="toast-container">
            <div className="toast">{message}</div>
        </div>
    );
};

export default Toast