import { createContext, useReducer } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../assets/locales/en/translation.json";
import translationES from "../assets/locales/es/translation.json";

const CONSTANTS = require("../utils/constants/Constants.js");
export const Global = createContext(null);
export const GlobalDispatch = createContext(null);


const resources = {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  };
  
  i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });
  

const globalDefault = {
    themeMode : 'light',
    language : 'es',
    idCurrentNavBar : 0
}

export function GlobalProvider({children}){
    const [global, globalDispatch] = useReducer(
        GlobalReducer,
        globalDefault
    );
    return(
        <Global.Provider value={global}>
            <GlobalDispatch.Provider value={globalDispatch}>
                {children}
            </GlobalDispatch.Provider>
        </Global.Provider>
    )
}

function GlobalReducer(global, action){
    switch(action.type){
        case CONSTANTS.ACTION_UPDATE_THEME_MODE:{
            return{
                ...global,
                themeMode : action.val
            };
        }
        case CONSTANTS.ACTION_UPDATE_LANGUAGE:{
            return{
                ...global,
                language : action.val
            };
        }
        case CONSTANTS.ACTION_UPDATE_ID_CURRENT_NAVBAR:{
            return{
                ...global,
                idCurrentNavBar : action.val
            };
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}