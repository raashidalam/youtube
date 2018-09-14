import React,{Component,PureComponent} from 'react';      
import PropTypes from 'prop-types';    
    
const Temp=(props)=>{
    return (<div>{props.val}</div>)
}
class Main extends PureComponent {      
    constructor(props) {    
      super(props);            
      this.state = {    
         val: 1 ,    
      }    
   }   
     
   componentDidMount(){  
       setInterval(()=>{  
           this.setState(()=>{  
               return { val: Math.random()}  
           })  
       },2000)  
   }  
   render() {    
       console.log('Main Component render');    
      return (    
          <div>   
                 
        <Temp val={this.state.val}/>
         </div>    
      );      
   }    
       
}      
    
export default Main;   