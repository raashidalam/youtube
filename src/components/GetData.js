import React,{Component} from "react";
class GetData extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            items:[],
            isloaded:false,
        }
    }
    Getitem()
    {
        fetch('http://localhost:50142/api/Employees')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isloaded:true,
                items:json,
            })
        });
        // console.log(items);
        // <div>
        //             Data is Loaded
        //             <ul>
        //                 {this.state.items.map(item=>(
        //                     <li key={item.id}>
        //                   Name:  {item.name } Employees_id: {item.empid} Food_Item :{item.food_item} Quantity: {item.quantity} 
        //                     </li>
        //                 ))};
        //                 </ul>
        //             </div>
    }
    render() { 
    
            return ( 
                
                <div><button onClick={this.Getitem()}>Get Item</button>
              
                <div>
                    Data is Loaded
                    <ul>
                        {this.state.items.map(item=>(
                            <li key={item.id}>
                          Name:  {item.name } Employees_id: {item.empid} Food_Item :{item.food_item} Quantity: {item.quantity} 
                            </li>
                        ))};
                        </ul>
                    </div>
                    </div>
            );
        
        
    }
}
 
export default GetData;