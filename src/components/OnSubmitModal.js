import React from 'react';
import ReactDOM from 'react-dom';


const MODAL_STYLES = {
    position: 'fixed',
    width: '30%',
    height: '30%',
    position: 'fixed',
    top: '60%',
    left: 'calc(220px + 40%)',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '$FFF',
    padding: '50px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid black'
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: '35%',
    left: 'calc(220px + 20%)',
    right: '20%',
    bottom: "10%",
    backgroundColor: 'rgba(255,255,255,.8)',
    zIndex: 1000,

}

const OnSubmitModal = ({ showModal, toggleShowModal }) => {

    if (!showModal) return null;

    return ReactDOM.createPortal(
        <div style={OVERLAY_STYLE}>
            <div style={MODAL_STYLES}>
                <p>Thanks for your comments</p>
                <button onClick={() => toggleShowModal(false)}>Close</button>
            </div>
        </div>
        , document.getElementById('modal')
    )
}

export default OnSubmitModal
