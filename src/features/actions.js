export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

export const loginSuccess = (token, status, message) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      token: token,
      status: status,
      message: message,
    },
  };
};

export const loginFailure = (status, message) => {
  return {
    type: "LOGIN_FAILURE",
    payload: {
      status: status,
      message: message,
    },
  };
};

export const logoutRequest = () => {
  return {
    type: "USER_LOGGED_OUT",
  };
};

export const receiveData = (data, status) => {
  return {
    type: "RECEIVE_DATA",
    payload: {
      data: data,
      status: status,
    },
  };
};

// Login action

export const loginUser = (credential) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credential),
    })
      .then((data) => data.json())
      .then((data) => {
        try {
          dispatch(userProfile(data.body.token));
          dispatch(loginSuccess(data.body.token, data.status, data.message));
        } catch (e) {
          dispatch(loginFailure(data.status, data.message));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};

// User's profile action

export const userProfile = (token) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(receiveData(data.body, data.status));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(loginFailure(error));
        }
      });
  };
};

// User's update profile

export const updateProfile = (token, firstName, lastName) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(receiveData(data.body, data.status));
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};
