import { useState } from "react";
import Fade from "./Fade";

function App() {
  const [inProp, setInProp] = useState(true);

  return (
    <>
      <Fade in={inProp}>123456</Fade>
      <button onClick={() => setInProp((inProp) => !inProp)}>
        Click to Toggle By Transition Component
      </button>
    </>
  );
}

export default App;
