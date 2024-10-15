import { useContext, useState } from 'react';
import Button from './Button';
import './MenuTopBar.scss';
import Modal from './Modal';
import { Global, GlobalDispatch } from '../../contexts/GlobalContext.jsx';

export default function MenuTopBar(){
    const [showModal,setShowModal] = useState(false);
    const global = useContext(Global);
    const globalDispatch = useContext(GlobalDispatch);
    const CONSTANTS = require("../../utils/constants/Constants");
    
    const handleOnClickOptions = ()=>{
        setShowModal(true);
    }
    const handleOnCloseModal = ()=>{
        setShowModal(false);
    }
    const handleToggle = ()=>{
        let theme = "";
        global.themeMode === 'dark'?theme='light':theme='dark';
        document.documentElement.setAttribute('theme-mode', theme);
        globalDispatch({
            type:CONSTANTS.ACTION_UPDATE_THEME_MODE,
            val:theme
        })
        
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
                    <p>Test: !</p>
                    <button onClick={()=>handleToggle()}>Cambiar tema</button>
                </Modal>
            }
        </div>
    );
}