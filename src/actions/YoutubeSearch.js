// This is use for Search
export function setSearch(search){
    return{
        type:"Search",
        payload:search
    }
}

// This is use for changing the display mode from list to thumnails and thumnails to list

export function displayMode(view){
    
        if(view==="list")
        {
            return{
                type:"thum",
                payload:"thum"
            };
            
        }
        if(view==="thum")
        {
            return{
                type:"list",
                payload:"list"
            };
            
        }
      
    }

    //Posting the video id to the database

export function postDatabases(id,title){
    return dispatch => {
    var data = {
        id: id,
        title: title
    }
    fetch("http://localhost:3000/postdata", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
      return  dispatch({
            type:"post",
            payload:"success"
        });
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data == "success"){
         console.log("Thanks for Like");  
        }
    }).catch(function(err) {
        console.log(err)
    });
}

}
//This function fetch comment of particular video from youtube
export function fetchcomment(videoid) {
    return function (dispatch){
      //https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=WPvGqX-TXP0&key=AIzaSyBcDESxFVmjrNPaHQR7MdZZialiNRbkSY0
      return fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=5&videoId=${videoid}&key=${your_key}`)
      .then(response => response.json())
      .then(responseJson => {
        const comment = responseJson.items.map(obj => obj);
        console.log("hh"+comment);
        return dispatch({
          type: "Fetch_Comment",
          payload: comment
        });
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  //This function use for posting comment to the database
  export function postComment(id,comment){
    return dispatch => {
    var data = {
        id: id,
        comment: comment
    }
    fetch("http://localhost:3000/postcomment", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
      return  dispatch({
            type:"post",
            payload:"success"
        });
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data == "success"){
         console.log("Thanks for registering");  
        }
    }).catch(function(err) {
        console.log(err)
    });
}
}