import React, { useEffect } from 'react'
 import '../CSS/modal_sign.css'
import Signup from './sign_up'

const Modal_sign = props => {

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return async function cleanup() {
            await document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    return (
        <>
            <div className={`modal1 ${props.show ? 'show' : ''}`} role="dialog">
                <Signup onClose={props.onClose} />
            </div>
        </>
    )
}

export default Modal_sign