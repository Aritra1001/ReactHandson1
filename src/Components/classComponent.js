import {Component} from 'react'
import "./style.css";
class ClassCompo extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         classClick : false,
    //     }
   // }
    render(){

        return(
        <div className="parent">            
            <div className='item_head2 '>
              <h1 className="head">This is created using Class </h1>
              <h1 className ="head"> Component </h1>
              <div className="para">
              <p >This is done using external CSS</p>
              <p style={{color:"blue"}}>This is done using inline CSS</p> 
              </div>
            </div>
        </div>
 
        )
    }
}
export default ClassCompo;