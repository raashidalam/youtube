import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/YoutubeAction';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  const YoutubeReducer=(state =initialState, action)=> {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        state ={
          ...state,
          loading: true,
       
          
        };
        break;
  
      case FETCH_PRODUCTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
       state={
          ...state,
          loading: false,
          items: action.payload
        };
        console.log(state.items);
        break;
  
      case FETCH_PRODUCTS_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        state= {
          ...state,
          loading: false,
          
          items: []
        };
     break;
        // ALWAYS have a default case in a reducer
       
    }
    return state;
      
   
  }
  export default  YoutubeReducer;
