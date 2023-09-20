export const DeleteModal = ({task,onDelete,confirm}) => {

    const handleDelete = () =>{
        onDelete(task.id)
    }

    const handleCancellation = () => {
        confirm(false)
    }
    
    console.log(confirm)
    return (
        <div className="modal-container">
            <div className="confirm-box">
                <div className="confirm-header">
                    <div className="confirm-content">
                        <h5 className="confirm-title">Message Comfirmation</h5>
                    </div>
                    <div className="confirm-body">
                        <p>Are you sure to delete this task ?</p>
                    </div>
                    <div className="confirm-footer">
                        <button className="confirm-button"onClick={handleDelete}>
                            Delete
                         </button>
                        <button className="confirm-button"  onClick={handleCancellation}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}