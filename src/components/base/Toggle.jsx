import './Toggle.scss'

export default function Toogle({onToggle,isChecked}){

    return(
        <div>
            <label className="switch">
                <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={()=>{onToggle()}}
                ></input>
                <span className="slider round"></span>
            </label>
        </div>
    );
}