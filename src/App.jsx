import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="mainContainer">
      <div className="leftBtn" onClick={() => setNum((n) => --n)}>
        <FaArrowCircleLeft />
      </div>
      <div className="content">{num}</div>
      <div className="rightBtn" onClick={() => setNum((n) => ++n)}>
        <FaArrowCircleRight />
      </div>
    </div>
  );
};

export default App;
