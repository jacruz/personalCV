import './Button.scss';

export default function Button({btnClassNames,iconClassNames,onPress}){
    
    return (
        <button
            className={"btn "+btnClassNames}
            onClick={()=>{onPress()}} 
        >
            <i className={iconClassNames}></i>
        </button>
    );
}