import { useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import Button from './Button';
import './MenuTopBar.scss';
import Modal from './Modal';
import { Global, GlobalDispatch } from '../../contexts/GlobalContext.jsx';
import Toggle from './Toggle.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { c } from '../../utils/format.js';


export default function MenuTopBar(){
    const [showModal,setShowModal] = useState(false);
    const global = useContext(Global);
    const globalDispatch = useContext(GlobalDispatch);
    const CONSTANTS = require("../../utils/constants/Constants");
    const { t } = useTranslation();

    const handleOnClickOptions = ()=>{
        setShowModal(true);
    }
    const handleOnCloseModal = ()=>{
        setShowModal(false);
    }
    const handleToggleTheme = ()=>{
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
                    btnClassNames="btn-icon-1 btn-color-3"
                    iconClassNames="fa fa-ellipsis-v"
                    onPress={handleOnClickOptions}
                ></Button>
            </div>
            
            {showModal &&
                <Modal
                    onClose={handleOnCloseModal}
                >
                    <div className='options-container'>
                        <h6 className='options-subtitle'>{c(t("theme"))}</h6>
                        <div className='options-theme'>
                            <p>{c(t("light"))}</p>
                            <Toggle
                                onToggle={handleToggleTheme}
                                isChecked={global.themeMode === 'dark'}
                            >
                            </Toggle>
                            <p>{c(t("dark"))}</p>
                        </div>
                        <h6 className='options-subtitle'>{c(t("language"))}</h6>
                        <div className='options-language'>
                            <LanguageSwitcher>
                            </LanguageSwitcher>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
}