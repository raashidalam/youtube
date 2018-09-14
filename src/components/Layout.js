import React, {Component} from "react";
import ReactDom  from "react-dom";
import Home from "./Home";
//  import Home from "./Home";
import Header from "./Header";
class Layout extends Component {
    constructor()
    {
        super();
        this.state={
            changelink:"Home"
        };
    }
  onGreet()
  {
      alert("Hello Rashid");
  }
  onLinkchange(newLink)
  {
      this.setState({
        changelink:newLink
      });
      
  }

    render() { 
        var user={
            name:"Mahira",
            sport:["Cricket","Badminton","Football"]
        };
        return (  
            <div className="container">
                <div className="row">
                <div className="col-md-2">
       <Header changelinks={this.state.changelink}/>
                </div>
                <div className="col-md-4 ">
            <Home name={"Raashid"} 
            age={28}
             user={user}
             greet={this.onGreet}
             link={this.onLinkchange.bind(this)}
             initialName={this.state.changelink}>
            <p>This is ReactJs Page</p>
            </Home>
                </div>
                
                </div> 
                </div>
        );
    }
}
 
export default Layout;


 