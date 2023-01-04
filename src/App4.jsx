import { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./app4.css";

const modes = ["out-in", "in-out"];

export default function App() {
  const [state, setState] = useState(true);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? helloRef : goodbyeRef;
  return (
    <SwitchTransition mode={modes[1]}>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef.current.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <div ref={nodeRef}>
          <button className="btn" onClick={() => setState((state) => !state)}>
            {state ? "Hello, world!" : "Goodbye, world!"}
          </button>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
