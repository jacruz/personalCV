import Button from './Button';
import './Modal.scss';

export default function Modal({onClose,children}){

    const handleClose = ()=>{
        onClose();
    }
    return (
        <div className="modal">
            <Button
                btnClassNames="btn-icon-1"
                iconClassNames="fa fa-heart"
                onPress={handleClose}
            ></Button>
            {children}
        </div>
    )
}