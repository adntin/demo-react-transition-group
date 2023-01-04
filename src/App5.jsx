import React, { useState, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./app5.css";

function App() {
  const [items, setItems] = useState(() => [
    {
      id: 1,
      text: "Buy eggs",
      nodeRef: createRef(null),
    },
    {
      id: 2,
      text: "Pay bills",
      nodeRef: createRef(null),
    },
    {
      id: 3,
      text: "Invite friends over",
      nodeRef: createRef(null),
    },
    {
      id: 4,
      text: "Fix the TV",
      nodeRef: createRef(null),
    },
  ]);
  return (
    <>
      <TransitionGroup className="todo-list">
        {items.map(({ id, text, nodeRef }) => (
          <CSSTransition
            key={id}
            nodeRef={nodeRef}
            timeout={500}
            classNames="item"
            className="123"
          >
            <div ref={nodeRef} className="456">
              <button
                className="remove-btn"
                onClick={() =>
                  setItems((items) => items.filter((item) => item.id !== id))
                }
              >
                &times;
              </button>
              {text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <button
        onClick={() => {
          const text = window.prompt("Enter todo text");
          if (text) {
            setItems((items) => [
              ...items,
              {
                id: Date.now(),
                text,
                nodeRef: createRef(null),
              },
            ]);
          }
        }}
      >
        Add Item
      </button>
    </>
  );
}

export default App;
