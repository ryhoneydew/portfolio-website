import React from 'react'

const Modal = ({ children, closeModal, modalState }) => {
  if (!modalState) {
    return null
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Keep in Touch</p>
          <button className="delete" aria-label="close" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div classNameName="content">{children}</div>
        </section>
      </div>
    </div>
  )
}

export default Modal
