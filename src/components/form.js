import React,{Component} from "react";
import ReacrDom from "react-dom";

class Forms extends Component {
    constructor()
    {
        super();
        this.state={
            fields:{},
            errors:{}
        };
    }
    changeValues()
    {
       let fields=this.state.fields;
       let errors={}
       let formvalid=true;
       if(!fields["name"]){
        formvalid=false;
        errors["name"]="caanot be empty"  ;
       }
       if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formvalid= false;
           errors["name"] = "Only letters";
        }        
     }
     this.setState({errors: errors});
     return formvalid;

    }
    contactSubmit(e){
        e.preventDefault();

        if(this.changeValues()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }

    }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
     
    }
    formsubmit()
    {
        alert("After form" + this.state.name);
        fetch('api/Employee/Create', {  
            method: 'POST',  
            body: data,  
        }).then((response) => response.json())  
            .then((responseJson) => {  
                this.props.history.push("/fetchemployee");  
            })  
     
    }
    render() { 
        return ( 
            <div className="container" > 
            <div className="row">
            <div className="col-md-6 offset-2"> 
                <form onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="form-group">

                    <label>Name:</label>
                        <input type="text" className="form-control" value={this.state.fields["name"]} onChange={this.handleChange.bind(this,"name")} name="name"/>
                        </div>
                        <div className="form-group">

                  <label>Email:</label>
                  <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this,"email")} name="email"/>
                   </div>
                   <div className="form-group">
                   <label> Select Course</label>
                   <select className="form-control">
                       <option value="math"> Math</option>
                       <option  value="Physics"> Physics</option>
                       <option  value="Chemistry"> Chemistry</option>
                    </select>
                    </div >
                    <div> 
                    <label>Select Gender</label>
                    <div className="form-check">
                    <input type="radio" className="form-check-input" value="Male" />
                   <label className="form-check-label">Male</label>
                    </div>
                
                    <div className="form-check">
                  
                    <input type="radio" className="form-check-input" value="Female"/>
                    <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" >Cheak me out</label>
                    </div>
                    </div>
                        <button type="submit"className="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
                </div>
         );
    }
}
 
export default Forms;