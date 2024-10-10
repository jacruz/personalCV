import { useState } from 'react';
import Button from './Button';
import './MenuTopBar.scss';
import Modal from './Modal';

export default function MenuTopBar(){
    const [showModal,setShowModal] = useState(false);

    const handleOnClickOptions = ()=>{
        setShowModal(true);
    }
    const handleOnCloseModal = ()=>{
        setShowModal(false);
    }

    return (
        <div>
            <div className="menu-top-bar">
                <Button
                    btnClassNames="btn-icon-1"
                    iconClassNames="fa fa-cog"
                    onPress={handleOnClickOptions}
                ></Button>
            </div>
            
            {showModal &&
                <Modal
                    onClose={handleOnCloseModal}
                >
                    <p>Test!!!!!!!!!</p>
                </Modal>
            }
        </div>
    );
}