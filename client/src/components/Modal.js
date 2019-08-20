import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
  return ReactDom.createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>Modal</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
