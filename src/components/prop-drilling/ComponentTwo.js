import { useState } from "react";

function ComponentTwo(props) {
  const [fname, setfname] = useState("Chris");
  const { pOnContinue } = props;

  return (
    <div className="componentTwo">
      <h3>Enter your name</h3>
      <div className="form-container">
        <input
          className="input-field"
          type="text"
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <button className="submit-btn" onClick={() => pOnContinue(fname)}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default ComponentTwo;
