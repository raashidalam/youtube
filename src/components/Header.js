import React,{Component} from "react";
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
// import {BrowserRouter,Route} from "react-router-dom";
import Form from './form'
class Header extends Component {
   
    render() { 
        return ( 
            // <nav className="navbar navbar-default">
            // <div className="container">
            // <div className="navbar-header">
            // <ul className="nav navbar-nav">
            // {/* <li> <a href="#">{this.props.changelinks}</a> </li> */}
            // <p>gfhgfh</p>
            // </ul>
            // </div>
            // </div>
            // </nav>
       
           <Router>
           <div>
                 <li>
                         <Link to="/">Home</Link>
                 </li>
                 <li>
                        <Link to="/form">User</Link>
                        
                 </li>
                 <li>
                         <Link to="/header">Header</Link>
                 </li>
                
                 
                 {/* <Route path={'/header'} render={(props) => <Header {...props} name={this.state.name} initialAge={29} changeName={this.onChangeName.bind(this)} />}>
                
                       
                 </Route> */}
                 <Route path={'/form'} component={Form}></Route>
                 {/* <Route path={'/contact'} component={Contact}></Route> */}
                 
            </div>
         </Router>
              
                    // <BrowserRouter>
                    // <Route path="/new" component={User}/>
                    // </BrowserRouter>
                   );
                 }
               }
               
             
               
      
   

 
export default Header;