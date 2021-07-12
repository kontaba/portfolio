import React from 'react';
import ReactDom from 'react-dom';
import './modal.scss';
import CloseIcon from '@material-ui/icons/Close';


const Modal = ({ open, children, onClose }) => {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay">{children}</div>
            {/* <div className="modal">
                <span onClick={onClose}>
                    <CloseIcon />
                </span>
                {children}
                
            </div> */}
        </>,
        document.getElementById('portal')
    );
}

export default Modal;
