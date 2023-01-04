import React, { createRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function TransitionView({ children }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const nodeRef = createRef();
  // console.log("TransitionView", location);
  // TransitionGroup.className: 过渡动画效果，比如: slide-left: 从右往左, slide-right: 从左往右, slide-top: 从下往上, slide-down: 从上往下 fade: 淡入淡出
  // CSSTransition.classNames: 过渡动画前缀, 比如: "fade-enter, fade-enter-active, fade-enter-done", 参与链接: https://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames
  // div.className: 具体页面
  // let mode = "slide";
  console.log(11111, navigationType);
  let direction = "slide-left";
  if (navigationType === "POP") {
    // direction = "slide-right";
  }
  return (
    <TransitionGroup className="transition-container">
      <CSSTransition
        key={location.key}
        nodeRef={nodeRef}
        timeout={5000}
        classNames={direction}
      >
        <div ref={nodeRef} className="page">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default TransitionView;
