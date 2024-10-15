import { createContext, useReducer } from "react";

const CONSTANTS = require("../utils/constants/Constants.js");
export const Global = createContext(null);
export const GlobalDispatch = createContext(null);

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