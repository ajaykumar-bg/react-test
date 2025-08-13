import React, { useState } from "react";

const Message = () => {
  const [showMessage, setShowMessage] = useState(false);
  const toggleClick = () => setShowMessage((m) => !m);
  return (
    <React.Fragment>
      <a href="#" onClick={toggleClick}>
        Want to buy a new car?
      </a>
      {showMessage && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>
  );
};

export default Message;
