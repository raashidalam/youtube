import React,{Component} from 'react'
import Thumbnails from './Thumbnail';
import { connect } from 'react-redux';
import {setSearch,displayMode,postDatabases,fetchcomment} from '../actions/YoutubeSearch';
import {fetchVideo} from '../actions/YoutubeAction';
import _ from 'lodash'
import GetComment from './GetCommentFromYoutube';


class Youtube extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            // finalYoutube:[],
         //   search:'',
            view:'list',
            users:[]
            // view_display:'Thumbnails'
            
         
          
        }
      
      
    }
    componentDidMount() {
        fetch(`http://localhost:3000/users`
         
      )
          .then(res => {
              console.log(res);
              return res.json()
           })
          .then(users => { 
              console.log(users.recordset); 
              this.setState({ users:users.recordset })
           });
  
       }
  

    render() { 
  console.log(this.state.users);
        return (
            <div className="container" >
           <div className="row">
           <div className="col-md-6 offset-2">
           <h1>Welcome to Youtube</h1>
           </div>
           </div>
            
            
            <div className="row">
           
            <div className="col-md-3 offset-2">
            <div className="form-group">
                <input size="40" className="form-control" type="text" 
                value={this.props.searchs.search}  
                onChange={this.props.setName.bind(this)} name="name" 
                placeholder="Enter text to search"  />
                </div>
           
                </div>
                <div className="col-md-3">
                <button className="btn btn-secondry" onClick={()=>this.props.getvideo(this.props.searchs.search)} >Search</button>
                </div>
                <div className="col-md-1">
                <button classNmae="btn btn-secondry" onClick={()=>this.props.ChangeDispalyMode(this.props.searchs.display_view)}>{this.props.searchs.display_view}</button>
                </div>
              
      
        
        </div>
     
 
        
        { 
          
            this.props.searchs.display_view=='list' ? (
        
            this.props.youtube.items.map((link,i)=>{
             
                   var frame=(
                    <div>
            <div className="row">
                  <div className="col-md-3">
                          <iframe key={i} width="200" height="150" src={"https://www.youtube.com/embed/"+link.id.videoId} 
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe></div>
     <div className="col-md-6">
     <span>Title: </span>
     <span>{link.snippet.title}</span>
     <br/>
     <br/>
    
     <button disabled={ _.findIndex(this.state.users, function(o) { return o.id == link.id.videoId; })!==-1} 
         onClick={()=> this.props.postDatabase(link.id.videoId,link.snippet.title)} c
         className="btn btn-secondry"> Like</button>
     </div>
    
     
         <div className="col-md-3"> 
         <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></div>
        
         </div>
    <GetComment id={link.id.videoId}/>
         
       <br/>
</div>

        );
        return frame;
       
                }) 
      ) : (
        <Thumbnails finalYoutube={this.props.youtube.items} />
        
      )
               
         
            }
               
               </div>  
              
          );
    
}
}
const  mapStateToProps=(state)=>{
    return {
  youtube :state.youtube,
   searchs:state.searchs
   
    };
}
const  mapDispatchToProps=(dispatch)=>{
    return {
   setName:(event)=>{
       dispatch(setSearch(event.target.value));
  
    },
    getvideo:(search)=>{
        dispatch(fetchVideo(search));
   
     },
     ChangeDispalyMode:(view)=>{
        dispatch(displayMode(view));
   
     },
     postDatabase:(id,title)=>{
        dispatch(postDatabases(id,title));
   
     },
     fetchComment:(videoid)=>{
        dispatch(fetchcomment(videoid));
   
     }

};
};
export default connect
(mapStateToProps,mapDispatchToProps)
(Youtube)

