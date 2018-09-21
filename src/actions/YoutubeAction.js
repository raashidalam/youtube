export function fetchVideo(search) {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=AIzaSyBcDESxFVmjrNPaHQR7MdZZialiNRbkSY0`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.items.map(obj=>obj)));
          return json.items.map(obj=>obj);
          console.log(json.items);
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
  export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
  export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
  
  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  });
  
  export const fetchProductsError = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });
