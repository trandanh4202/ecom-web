import React from 'react';

const Chat = () => {
  (function (d, m) {
    var kommunicateSettings = {
      appId: '306ecde1896827933af14568972668e0f',
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
    var h = document.getElementsByTagName('head')[0];
    h.appendChild(s);
    window.kommunicate = m;
    m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  return <div></div>;
};

export default Chat;
