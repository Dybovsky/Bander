import React, { useEffect } from 'react'
 import '../CSS/modal_sign.css'
import Login from './Login'

const Modal_login = props => {

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
                <Login onClose={props.onClose} />
            </div>
        </>
    )
}

export default Modal_login