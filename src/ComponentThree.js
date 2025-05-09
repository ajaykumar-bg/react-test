import React from "react";

function ComponentThree(props) {
  const { userName } = props;
  return (
    <div className="componentThree">
      <h1>
        Hello <b className="userName">{userName}</b>
      </h1>
    </div>
  );
}

export default ComponentThree;
