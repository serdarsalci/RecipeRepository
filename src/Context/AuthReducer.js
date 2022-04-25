const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        isUserLoggedIn: true,
        loggedInUser: {
          id: action.payload.id,
          email: action.payload.email,
        },
      };

    case "LOGOUT":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
