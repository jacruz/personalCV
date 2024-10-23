import {useContext} from "react";
import { useTranslation } from "react-i18next";
import './LanguageSwitcher.scss';
import { GlobalDispatch } from '../../contexts/GlobalContext.jsx';

export default function LanguageSwitcher(){
    
    const globalDispatch = useContext(GlobalDispatch);
    const CONSTANTS = require("../../utils/constants/Constants");
    const { i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);

        globalDispatch({
            type:CONSTANTS.ACTION_UPDATE_LANGUAGE,
            val:newLang
        })
    };

  return (
    <select 
        value={i18n.language} 
        onChange={handleLanguageChange}
        className="language-selector"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}