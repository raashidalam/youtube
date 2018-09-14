import React,{Component} from "react";
import PropTypes from 'prop-types';
import Form from './form';
class Home extends Component {
     
    constructor(props)
    {
        super();
        this.state={
            ages:props.age,
            status:0,
            homelink:props.initialName
        };
    }
    onMakeolder()
    {
 this.setState({
     ages:this.state.ages + 3
 });
    }
    changeLink(){
        this.props.link(this.state.homelink);
    }
    onChangeLink(event)
    {
       this.setState({
           homelink:event.target.value
       })
       this.props.link(this.state.homelink);
    }
    render() { 
       
        
        return (  
            <div>
                <p> In a new component</p>
               <p>{this.props.name},{this.state.ages}</p>
               <p>{this.state.status}</p>
               <p>{this.props.user.name}</p>
               <div>
                   <h4> Hobbies</h4>
                   <ul>
                        {this.props.user.sport.map((sport)=><li key={sport.toString()}>{sport}</li>)}
                       </ul>
                   </div>
                   <hr/>
                   {this.props.children}
                   <button onClick={()=>this.onMakeolder()}className="btn btn-primary">Click Me</button>
                   <hr/>
                   <button onClick={()=>this.props.greet()}>greet</button>
                   <input type="text" value={this.state.homelink} onChange={(event)=>this.onChangeLink(event)}/>
                   <button className="btn btn-primary" onClick={this.changeLink.bind(this)}>Change</button>
                   <hr/>
                   {/* <Form/> */}
                </div>
                
        );
    }
}
 
export default Home;
Home.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    sport:PropTypes.object,
    children:PropTypes.element.isRequired,
    greet:PropTypes.func,
    link:PropTypes.func,
    initialName:PropTypes.string
}