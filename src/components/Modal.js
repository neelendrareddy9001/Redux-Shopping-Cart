const Modal = () => {
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Remover all items from your cart</h4>
                <div className="btn-contanner">
                    <button type="button" className="btn confirm-btn">confirm</button>
                    <button type="button" className="btn clear-btn">cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal;