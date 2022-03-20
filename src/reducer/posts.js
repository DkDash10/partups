import { FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DISLIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    // case UPDATE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};



// import { FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

// export default (state = { isLoading: true, posts: [] }, action) => {
 
//   switch (action.type) {
//     case FETCH_ALL:
//       return { ...state, post: action.payload.post };
//     case LIKE:
//       return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
//     case DISLIKE:
//       return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
//     case CREATE:
//       return { ...state, posts: [...state.posts, action.payload] };
    
//     case DELETE:
//       return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
//     default:
//       return state;
//   }
// };