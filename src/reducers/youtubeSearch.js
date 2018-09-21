const YoutubeSearch=(state={
    search:"",
    display_view:"list",
success:'',comment:[]},action)=>{
 switch(action.type){
     case "Search":
     state={
        ...state,
        search:action.payload
   
     };
    // state.lastValue.push(action.payload);
    // InitialState.result+=action.payload;
     break;
    
   
    case action.payload:
    state={
        ...state,
        display_view:action.payload
    };
    break;

    case action.payload:
    state={
        ...state,
        display_view:action.payload
    };
    break;
    case "post":
    state={
        ...state,
        success:action.payload
    };
    break;
    case "Fetch_Comment":
    state={
        ...state,
        comment:action.payload
    };
    break;
 }
 return state;
}
export default YoutubeSearch;