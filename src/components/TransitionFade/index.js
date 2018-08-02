import React from 'react';
import { Transition } from 'react-transition-group';


const defaultStyle = {
  transition: `all 500ms linear`,
  opacity: 0,
  
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0}, 
};

const Fade = ({ children, in: inProp }) => (
  <Transition in={inProp} timeout={500}  mountOnEnter={true} unmountOnExit={true}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);

export default Fade;