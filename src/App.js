import { useState } from "react";
import ClassCompo from "./Components/classComponent";
import FuncCompo from "./Components/functionComponent";
import "./Components/style.css";
// import "./index.css";


function App() {
const [funcClick, setFuncClick] = useState(false);//useState hooks
const [classClick, setClassClick] = useState(false);
// [name of the variable, function of this variable] = useState(initial value of your variable)
// const handleClick =() =>{
//   setFuncClick(!funcClick);
// }  

return (
    
    <>  
    
    <h1 className="main_head" >Styling using Functional and Class component</h1>
        
    <button className="button1" onClick={()=> setFuncClick(!funcClick)}><span className="button1_text">To see styling in functional component </span></button>
    <button className="button2" onClick={()=> setClassClick(!classClick)}>To see styling in class component</button>
    {funcClick && <FuncCompo/>}
    {classClick && <ClassCompo/>}

    </>

  );
}

export default App;
