import './Home.scss';

export default function Home(){
    const handleToggle = ()=>{
        document.documentElement.setAttribute('theme-mode', 'dark')
    }
    return (
        <div>
            <h1>Es del home!!!!!!!!</h1>
            <button onClick={()=>handleToggle()}>Prueba</button>
        </div>
    );
}