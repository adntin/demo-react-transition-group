import { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./app3.css";

function App() {
  const [state, setState] = useState(false);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? goodbyeRef : helloRef;
  return (
    <SwitchTransition>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        nodeRef={nodeRef}
        addEndListener={(done) =>
          nodeRef.current.addEventListener("transitionend", done, false)
        }
        classNames="fade"
      >
        <button ref={nodeRef} onClick={() => setState((state) => !state)}>
          {state ? "Goodbye, world!" : "Hello, world!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
