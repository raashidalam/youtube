import React,{Component} from 'react'
import PropTypes from 'prop-types';
class Thumbnails extends Component {
    constructor(props)
    {
        super(props);
      
    }

    render() { 
       const url="https://www.youtube.com/embed/";
        return (  
         
            <div className="row">
            {
                this.props.finalYoutube.map((obj)=>{
                    return(
                 <div className="col-md-4">
                 <div className="thumbnail">
                  <a href={url + obj.id.videoId}>
                     <img src={obj.snippet.thumbnails.medium.url} />
                     <div>
                          <p>{obj.snippet.title}</p>
                     </div>
                 </a>
                 </div>
             </div>
            );
        }
    )
}

             </div>
         
        );
    }
}
 
export default Thumbnails;
// Thumbnails.propTypes={
//     finalYoutube:PropTypes.object}