const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILED":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "FOLLOW":
      localStorage.setItem("follow", action.payload.token);
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW":
      localStorage.setItem("unfollow", action.payload.token);
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
