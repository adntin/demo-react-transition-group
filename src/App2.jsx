import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./app2.css";

function App() {
  const [inProp, setInProp] = useState(true);
  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={200}
        classNames="my-node"
      >
        <div ref={nodeRef}>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp((inProp) => !inProp)}>
        Click to Toggle By CSSTransition Component
      </button>
    </div>
  );
}

export default App;
