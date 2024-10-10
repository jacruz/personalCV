import Button from './Button';
import './Modal.scss';

export default function Modal({onClose,children}){

    const handleClose = ()=>{
        onClose();
    }
    return (
        <div className='modal'>
            <div className="modal-container modal-container-in">
                <Button
                    btnClassNames="btn-icon-1"
                    iconClassNames="fa fa-times"
                    onPress={handleClose}
                ></Button>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}